<?php
// ------------------- CUSTOM REST ROUTES

function get_articles($data){

	$catsParams = $data->get_query_params()["categories"];
 	$titleParam= $data->get_query_params()["title"];

	GLOBAL $wpdb;
	$sql = "SELECT po.id, po.post_title, ca.term_id, ca.name FROM wp_posts AS po JOIN (wp_terms AS ca, wp_term_relationships AS re) ON (po.id = re.object_id AND ca.term_id = re.term_taxonomy_id) WHERE po.post_type='post' AND po.post_status='publish' ";
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

	return array(
		'id' => $post->ID,
		'language' => $currentLang = qtrans_getLanguage(),
		'title' => __($post->post_title),
		'date' => $post->post_date,
		'keywords' => $tagNames,
		'body' => __($post->post_content),
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
	$posts = get_posts(array("posts_per_page" => 5, 'orderby' => 'date', 'order' => 'desc'));
	$news = array();
	foreach ($posts as $post) {
		$authorId = get_post_meta($post->ID, 'auteur')[0];
		$post = [
			'id' => $post->ID,
			'title' => $post->post_title,
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
	$post = get_post( $data['id']);
	$categories = wp_get_post_categories($post->ID);
	$i=0;
	foreach ($categories as $category){
		$categories[$i]= format_category($category);
		$i++;
	}

	$authorId = get_post_meta($post->ID)['auteur'][0];
	$author = get_post($authorId);

	return array(
		'id' => $post->ID,
		'language' => $currentLang = qtrans_getLanguage(),
		'title' => __($post->post_title),
		'date' => $post->post_date,
		'desc' => substr(strip_tags(__($post->post_content)), 0, 420)."...",
		'category' => $categories,
		'author' => array(
			'id' => $author->ID,
			'name' => $author->post_title
		)
	);
}

function get_authors($data){
	$catsParams = $data->get_query_params()["categories"];
	$nameParam= $data->get_query_params()["name"];

	GLOBAL $wpdb;
	$sql = "SELECT DISTINCT au.id, au.post_title FROM wp_posts AS au LEFT JOIN (wp_posts AS po, wp_postmeta as me, wp_terms AS ca, wp_term_relationships AS reca) ON (po.id = me.post_id AND au.id = me.meta_value AND po.id = reca.object_id AND ca.term_id = reca.term_taxonomy_id) WHERE au.post_type='auteur' AND au.post_status='publish' ";
	if (isset($catsParams) && $catsParams != '') $sql .= "AND ca.term_id IN (1,2,200) ";
	if (isset($nameParam) && $nameParam != '') $sql .= "AND au.post_title LIKE '%$nameParam%' ";
	$sql .= "ORDER BY au.post_title ASC";
	$results = $wpdb->get_results($sql);

	var_dump($results);
}

function get_author( $data ){
	$post = get_posts( array(
		'ID' => $data['id'],
		'post_type' => 'auteur'
	))[0];
	$articles = get_posts();
	$articlesByAuthor = array();
	foreach ($articles as $article) {
		$categories = wp_get_post_categories($article->ID, array('fields'=>'all'));
		$categoriesFiltered = array();
		foreach ($categories as $category) {
			array_push($categoriesFiltered, array(
				'id' => $category->term_id,
				'name' => __($category->name)
			));
		}

		if(get_post_meta($article->ID, 'auteur')[0] == $post->ID)
			array_push($articlesByAuthor, array(
				'id' => $article -> ID,
				'title' => __($article -> post_title),
				'date' => $article -> post_date,
				'category' => $categoriesFiltered
			));
	}
	$picURL = get_post(get_post_meta($post->ID, "photo")[0])->guid;
	$picURL = explode('/',$picURL);
	$pic = array_slice($picURL, -5, 5, true);
	$pic = implode('/', $pic);
	return array(
		'id' => $post->ID,
		'language' => $currentLang = qtrans_getLanguage(),
		'name' => $post->post_title,
		'title' => __(get_post_meta($post->ID, 'titre')[0]),
		'school' => __(get_post_meta($post->ID, 'universite')[0]),
		'desc' => __(get_post_meta($post->ID, 'biographie')[0]),
		'pic' => $pic,
		'articles' => $articlesByAuthor
	);
}

function get_all_categories(){
	$cats = get_categories();
	$i=0;
	foreach ($cats as $cat) {
		$cats[$i] = array(
			'id' => $cat->term_id,
			'name' => __($cat->name)
		);
		$i++;
	}
	return array(
		'language' => qtrans_getLanguage(),
		'list' => $cats );
}

function get_graph_data(){
	$cats = get_all_categories();
	$cats = $cats['list'];
	$posts = get_posts(array( "posts_per_page" => -1));

	$i=0;
	foreach ($cats as $cat) {
		$postIds = array();
		foreach ($posts as $post) {
			$postCats = wp_get_post_categories($post->ID, array('fields'=>'names'));

			if($cat['name'] == $postCats[0])
				array_push($postIds, array(
					'id' => $post->ID,
					'name' => __($post->post_title),
					'wpId' => $post->ID,
					'altParents' => array_slice($postCats, 1)
				));
		}

		$postsFiltered = in_array($cat['id'], wp_get_post_categories(11, array('fields'=>'ids')));
		$cats[$i] = array(
			'id' => $cat['id'],
			'name' => $cat['name'],
			'children' => $postIds
		);
		$i++;
	}
	$data = array(name => "crÈation",	children => $cats);
	return array(
		'language' => qtrans_getLanguage(),
		'data' => $data );
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



function setGraph(){

	wp_enqueue_script( 'd3',
	get_template_directory_uri() . '/wikiGraph/d3.v4.min.js',
	array() );

	wp_enqueue_script( 'eventDispatcher',
	get_template_directory_uri() . '/wikiGraph/eventDispatcher.js',
	array() );

	wp_enqueue_script( 'parser',
	get_template_directory_uri() . '/wikiGraph/parser.js',
	array() );

	wp_enqueue_script( 'model',
	get_template_directory_uri() . '/wikiGraph/model.js',
	array() );

	wp_enqueue_script( 'animView',
	get_template_directory_uri() . '/wikiGraph/animView.js',
	array() );

	wp_enqueue_script( 'view',
	get_template_directory_uri() . '/wikiGraph/view.js',
	array() );

	wp_enqueue_script( 'controler',
	get_template_directory_uri() . '/wikiGraph/controler.js',
	array() );

}

add_action( 'wp_enqueue_scripts', 'setGraph' );
add_action( 'wp_ajax_import_developer', 'import_graph_data' );
add_action( 'wp_ajax_nopriv_import_developer', 'import_graph_data' );
?>
