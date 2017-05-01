<?php
// ------------------- CUSTOM REST ROUTES

define(MAX_FILE_SIZE, 5242880);
define(EMAIL_TO, 'tgoehringer@gmail.com');

function format_category($category){
	$cat = get_category($category);
	return array(
		'id' => $cat->cat_ID,
		'name' => __($cat->name)
	);
}

function get_articles($data){

	$catsParams = $data->get_query_params()["categories"];
 	$titleParam= $data->get_query_params()["title"];

	GLOBAL $wpdb;
	$sql = "SELECT po.id, po.post_title, ca.term_id, ca.name FROM wp_posts AS po " .
	"JOIN (wp_term_relationships AS re) " .
	"ON (po.id = re.object_id) " .
	"JOIN (wp_terms AS ca) " .
	"ON (ca.term_id = re.term_taxonomy_id) " .
	"JOIN (wp_term_taxonomy AS ta) " .
	"ON (ta.term_id = re.term_taxonomy_id) " .
	"WHERE po.post_type='post' AND po.post_status='publish' AND ta.taxonomy='category' ";

	if (isset($catsParams) && $catsParams != '') $sql .= "AND ca.term_id IN ($catsParams) ";
	if (isset($titleParam) && $titleParam != '') $sql .= "AND po.post_title LIKE '%$titleParam%' ";
	$sql .= "ORDER BY ca.term_id ASC";
	$results = $wpdb->get_results($sql);

	$cats = [];
	foreach ($results as $result) {
		if (sizeof($cats) == 0 || $result->term_id != end($cats)['categoryId']) {
			$article = ['id' => $result->id,'title' => __($result->post_title)];
			array_push($cats, array(
				'categoryName' => __($result->name),
				'categoryId' => $result->term_id,
				'articles' => [$article]
			));
		}
		elseif ($result->term_id == end($cats)['categoryId']) {
			$article = ['id' => $result->id,'title' => __($result->post_title)];
			array_push($cats[count($cats)-1]['articles'], $article);
		}
	}
	return array(
			'language' => qtrans_getLanguage(),
			'list' => $cats );
}

function get_article( $data ){
	require_once( __DIR__ . '/includes/footnotes.php');
	require_once( __DIR__ . '/includes/summary.php');


	$post = get_post( $data['id']);
	$categories = wp_get_post_categories($post->ID);
	$i=0;
	foreach ($categories as $category){
		$categories[$i]= format_category($category);
		$i++;
	}

	$authorId = get_post_meta($post->ID)['auteur'][0];
	$author = get_post($authorId);

	$keywords = get_the_tags($post->ID);
	$tagNames = array();
	if(is_array($keywords)) {
		foreach ($keywords as $tag) {
			array_push($tagNames, $tag->name);
		};
	};
	$pic = get_post(get_post_meta($author->ID, "photo")[0])->guid;
	$pic = explode('/',$pic);
	$picURL = array_slice($pic, -5, 5, true);
	$picURL = implode('/', $picURL);

	$pdfFr = get_fields($post->ID)["pdf_fr"]["url"];
	$pdfFr = explode('/',$pdfFr);
	$pdfFrURL =	array_slice($pdfFr, -5, 5, true);
	$pdfFrURL = implode('/', $pdfFrURL);

	$pdfEn = get_fields($post->ID)["pdf_en"]["url"];
	$pdfEn = explode('/',$pdfEn);
	$pdfEnURL =	array_slice($pdfEn, -5, 5, true);
	$pdfEnURL = implode('/', $pdfEnURL);

	$body = wpautop(__($post->post_content));
	$footnotes = set_footnotes($body);
	$summary = set_summary($body);

	return array(
		'id' => $post->ID,
		'language' => $currentLang = qtrans_getLanguage(),
		'title' => __($post->post_title),
		'date' => $post->post_date,
		'keywords' => $tagNames,
		'summary' => $summary,
		'body' => $body,
		'footnotes' => $footnotes,
		'pdfFr' =>  $pdfFrURL,
		'pdfEn' => 	$pdfEnURL,
		'category' => $categories,
		'author' => array(
			'id' => $author->ID,
			'name' => $author->post_title,
			'title' => get_post_meta($author->ID, 'titre')[0],
			'school' => get_post_meta($author->ID, 'universite')[0],
			'desc' => $author->post_content,
			'pic' => $picURL
		)
	);
}

function get_news(){
	GLOBAL $wpdb;
	$sql = "SELECT po.id, po.post_title, po.post_content FROM wp_posts AS po " .
	"WHERE po.post_type='post' AND po.post_status='publish' ORDER BY po.post_date DESC LIMIT 5";
	$posts = $wpdb->get_results($sql);
	// $posts = get_posts(array("posts_per_page" => 5, 'orderby' => 'date', 'order' => 'desc'));
	$news = array();
	foreach ($posts as $post) {
		$authorId = get_post_meta($post->id, 'auteur')[0];
		$post = [
			'id' => $post->id,
			'title' => __($post->post_title),
			'author' => get_post($authorId)->post_title,
			'desc' => substr(strip_tags(__($post->post_content)), 0, 420)."..."
		];
   	$news[] = $post;
	}
	return array(
		'language' => qtrans_getLanguage(),
		'list' => $news);
}

function get_preview($data){
	require_once( __DIR__ . '/includes/footnotes.php');

	GLOBAL $wpdb;
	$sql = "SELECT DISTINCT po.id, po.post_title, po.post_date, po.post_content " .
	"FROM wp_posts AS po " .
	"WHERE po.post_type='post' AND po.post_status='publish' AND po.id=" . $data['id'] . " ";
	$post = $wpdb->get_row($sql);
	// $post = get_post( $data['id']);
	$categories = wp_get_post_categories($post->id);
	$i=0;
	foreach ($categories as $category){
		$categories[$i]= format_category($category);
		$i++;
	}

	$authorId = get_post_meta($post->id)['auteur'][0];
	$author = get_post($authorId);

	return array(
		'id' => (int) $post->id,
		'language' => $currentLang = qtrans_getLanguage(),
		'title' => __($post->post_title),
		'date' => $post->post_date,
		'desc' => substr(strip_tags(filter_footnotes(__($post->post_content))), 0, 620)."...",
		'category' => $categories,
		'author' => array(
			'id' => $author->id,
			'name' => $author->post_title
		)
	);
}

function get_authors($data){
	$catsParams = $data->get_query_params()["categories"];
	$nameParam= $data->get_query_params()["name"];

	GLOBAL $wpdb;
	$sql = "	SELECT DISTINCT au.id, au.post_title FROM wp_posts AS au LEFT JOIN (wp_posts AS po, wp_postmeta as me, wp_terms AS ca, wp_term_relationships AS reca) ON (po.id = me.post_id AND au.id = me.meta_value AND po.id = reca.object_id AND ca.term_id = reca.term_taxonomy_id) WHERE au.post_type='auteur' AND au.post_status='publish' ";
	if (isset($catsParams) && $catsParams != '') $sql .= "AND ca.term_id IN ($catsParams) ";
	if (isset($nameParam) && $nameParam != '') $sql .= "AND au.post_title LIKE '%$nameParam%' ";
	$sql .= "ORDER BY au.post_title ASC";
	$results = $wpdb->get_results($sql);

	$authors=array();

	foreach ($results as $result) {
		$picURL = get_post(get_post_meta($result->id, "photo")[0])->guid;
		$picURL = explode('/', $picURL);
		$pic = array_slice($picURL, -5, 5, true);
		$pic = implode('/', $pic);

		$authors[]= [
			'id' => $result->id,
			'name' => $result->post_title,
			'title' => __(get_post_meta($result->id, 'titre')[0]),
			'school' => __(get_post_meta($result->id, 'universite')[0]),
			'pic' => $pic
		];
	}
	return array(
			'language' => qtrans_getLanguage(),
			'list' => $authors );

}

function get_author( $data ) {
	$post = get_post($data['id']);

	GLOBAL $wpdb;
	$sql = "SELECT DISTINCT ar.id, ar.post_title, ar.post_date " .
	"FROM wp_posts AS ar " .
	"JOIN (wp_postmeta as me) ON (ar.id = me.post_id) " .
	"JOIN (wp_posts as au) ON (au.id = me.meta_value) " .
	"WHERE ar.post_type='post' AND ar.post_status='publish' " .
	"AND au.id=$post->ID AND me.meta_key='auteur' " .
	"ORDER BY ar.post_title ASC ";
	$articles = $wpdb->get_results($sql);

	foreach ($articles as $key => $article) {
		$categories = wp_get_post_categories($article->id, ['fields'=>'all']);
		foreach ($categories as $catKey => $category) {
			$categories[$catKey] = ['id' => $category->term_id, 'name' => __($category->name)];
		}
		$articles[$key] = [
			'id' => (int) $article->id,
			'title' => __($article->post_title),
			'date' => $article->post_date,
			'category' => $categories
		];
	}

	$picURL = get_post(get_post_meta($post->ID, "photo")[0])->guid;
	$picURL = explode('/',$picURL);
	$pic = array_slice($picURL, -5, 5, true);
	$pic = implode('/', $pic);

	return [
		'id' => $post->ID,
		'language' => $currentLang = qtrans_getLanguage(),
		'name' => $post->post_title,
		'title' => __(get_post_meta($post->ID, 'titre')[0]),
		'school' => __(get_post_meta($post->ID, 'universite')[0]),
		'desc' => __(get_post_meta($post->ID, 'biographie')[0]),
		'pic' => $pic,
		'articles' => $articles
	];
}

function get_all_categories() {
	$cats = get_categories();

	$catsArray = [];
	foreach ($cats as $cat) {
		$catsArray[] = [
			'id' => $cat->term_id,
			'name' => __($cat->name)
		];
	}
	return array(
		'language' => qtrans_getLanguage(),
		'list' => $catsArray );
}

function get_graph_data(){
	$cats = get_categories();
	$graphCats = [];
	GLOBAL $wpdb;
	$sql = "SELECT DISTINCT po.id, po.post_title " .
	"FROM wp_posts AS po " .
	"WHERE po.post_type='post' AND po.post_status='publish'";
	$posts = $wpdb->get_results($sql);

	$i=0;
	foreach ($cats as $cat) {
		$catPosts = array();
		foreach ($posts as $post) {
			$postCats = wp_get_post_categories($post->id, array('fields'=>'names'));

			if($cat->name == $postCats[0]) {
				array_push($catPosts, array(
					'id' => $post->id,
					'name' => __($post->post_title),
					'wpId' => $post->id,
					'altParents' => array_slice($postCats, 1)
				));
			}
		}

		$graphCats[$i] = array(
			'id' => $cat->term_id,
			'name' => $cat->name,
			'children' => $catPosts
		);
		$i++;
	}
	$data = array(name => "Creation",	children => $graphCats);
	return array(
		'language' => qtrans_getLanguage(),
		'data' => $data );
}

function post_contact ($data) {
	$params = $data->get_params();

	$name = $params['name'];
	$email = $params['email'];
	$message = $params['message'];

	if ($name === null || $email === null || $message === null) {
		return new WP_Error('field_error', "Présence d'un champ non-rempli.", ['status' => 404 ]);
	}

	$subject = "Wikicreation : nouveau message de " . $name;

	$mailOk = wp_mail(EMAIL_TO, $subject, $message, $headers = '', null);
	if (!$mailOk) {
		return new WP_Error('mail_error', "Erreur lors de l'envoi du mail.", ['status' => 404 ]);
	} else {
		return ['success' => 'Mail envoyé.'];
	};
}

function post_contribute ($data) {
	$params = $data->get_params();

	$name = $params['name'];
	$university = $params['university'];
	$authorTitle = $params['authorTitle'];
	$bio = $params['bio'];
	$title = $params['title'];
	$categories = $params['categories'];
	$keywords = $params['keywords'];
	$abstract = $params['abstract'];
	$email = $params['email'];

	if ($name === null || $university === null || $authorTitle === null ||
		$bio === null || $title === null || $categories === null ||
		$keywords === null || $abstract === null || $email === null) {
		return new WP_Error('field_error', "Présence d'un champ non-rempli.", ['status' => 404 ]);
	}

	$doc = $data->get_file_params()['doc'];

	if (!$doc) {
		return new WP_Error('no_doc_error', "Aucun document joint.", ['status' => 404 ]);
	}

	$tmpDoc = $doc['tmp_name'];
	$docName = $doc['name'];
	$docSize = $doc['size'];
	$newDoc = $tmpDoc . $docName;

	if ($docSize > MAX_FILE_SIZE) {
		return new WP_Error('doc_too_large_error', "Document trop volumineux.", ['status' => 404 ]);
	}

	if (!move_uploaded_file($tmpDoc, $newDoc)) {
	    return new WP_Error('doc_move_error', "Erreur lors du renommage du fichier.", ['status' => 404 ]);
	}

	$subject = "Wikicreation : nouvelle proposition d'article par " . $name;
	$message = "Nom de l'auteur : $name \n" .
		"Email de contact : $email \n" .
		"Université : $university \n" .
		"Titre de l'auteur : $authorTitle \n" .
		"Biographie : $bio \n" .
		"Titre de l'article : $title \n" .
		"Catégories : $categories \n" .
		"Mots-clés : $keywords \n" .
		"Abstract : $abstract \n";
	$attachments = [$newDoc];

	$mailOk = wp_mail(EMAIL_TO, $subject, $message, $headers = '', $attachments);
	if (!$mailOk) {
		return new WP_Error('mail_error', "Erreur lors de l'envoi du mail.", ['status' => 404 ]);
	} else {
		unlink($newDoc);
		return ['success' => 'Mail envoyé.'];
	};
}

remove_action( 'rest_api_init', 'create_initial_rest_routes', 0 );
add_action( 'rest_api_init', function () {
	register_rest_route( 'wp/v2', '/articles', array(
		'methods' => 'GET',
		'callback' => 'get_articles'
	));
	register_rest_route( 'wp/v2', '/articles/(?P<id>\d+)', array(
		'methods' => 'GET',
		'callback' => 'get_article'
	));
	register_rest_route( 'wp/v2', '/news', array(
		'methods' => 'GET',
		'callback' => 'get_news'
	));
	register_rest_route( 'wp/v2', '/preview/(?P<id>\d+)', array(
		'methods' => 'GET',
		'callback' => 'get_preview'
	));
	register_rest_route( 'wp/v2', '/authors', array(
		'methods' => 'GET',
		'callback' => 'get_authors'
	));
	register_rest_route( 'wp/v2', '/authors/(?P<id>\d+)', array(
		'methods' => 'GET',
		'callback' => 'get_author'
	));
	register_rest_route( 'wp/v2', '/categories', array(
		'methods' => 'GET',
		'callback' => 'get_all_categories'
	));
	register_rest_route( 'wp/v2', '/graph-data', array(
		'methods' => 'GET',
		'callback' => 'get_graph_data'
	));
	register_rest_route( 'wp/v2', '/contact', array(
		'methods' => 'POST',
		'callback' => 'post_contact'
	));
	register_rest_route( 'wp/v2', '/contribute', array(
		'methods' => 'POST',
		'callback' => 'post_contribute'
	));
});


//Réécrit toutes les routes afin d'éviter les erreurs 404
add_action('init', function () {
  add_rewrite_rule('.*', 'index.php', 'top' );
});

// ------------------- CUSTOM ADMIN INTERFACE
add_action( 'init', 'create_post_type' );
function create_post_type() {
  register_post_type( 'auteur',
    array(
      'labels' => array(
        'name' => __( 'Auteurs' ),
        'singular_name' => __( 'Auteur' )
      ),
      'public' => true,
		'show_in_rest' => true,
		'rest_base'  => 'auteurs',
    )
  );
}


function wpfstop_change_default_title( $title ){
	$screen = get_current_screen();
	if ( 'auteur' == $screen->post_type ){
	  $title = "Nom de l'auteur";
	}
	return $title;
}
add_filter( 'enter_title_here', 'wpfstop_change_default_title' );



function acf_load_auteurs_choices( $field ) {
	$field['choices'] = [];
	$auteurs = get_posts(['posts_per_page' => -1,'post_type' => 'auteur']);
	foreach ($auteurs as $auteur) {
		$field['choices'][$auteur->ID] = $auteur->post_title;
	}
	return $field;
}

add_filter('acf/load_field/name=auteur', 'acf_load_auteurs_choices');

add_filter( 'rest_cache_skip', function($skip, $request_uri ) {
	if ( ! $skip && ( false !== stripos($request_uri, 'wp-json/wp/v2/contact')
	|| false !== stripos($request_uri, 'wp-json/wp/v2/contribute') ) ) {
		return true;
	}
	return $skip;
}, 10, 2 );


?>
