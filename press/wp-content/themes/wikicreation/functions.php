<?php
// ------------------- CUSTOM REST ROUTES

function my_awesome_func( $data ) {
	$posts = get_posts( array(
		'author' => $data['id'],
	) );
	if ( empty( $posts ) ) {
		return new WP_Error( 'awesome_no_author', 'Invalid author', array( 'status' => 404 ) );
	}
	$filteredPosts = array();
	foreach ($posts as $post){
		array_push($filteredPosts, array(
			'ID' => $post->ID,
			'post_title' => __($post->post_title)
		));
	}
	return $filteredPosts;
}

function format_category($category){
	$cat = get_category($category);
	return array(
		'id' => $cat->cat_ID,
		'name' => __($cat->name)
	);
}

function get_articles(){
	$cats = get_all_categories();
	$cats= $cats['list'];
	$posts = get_posts(array( "posts_per_page" => -1));

	$i=0;
	foreach ($cats as $cat) {
		$postIds = array();
		foreach ($posts as $post) {
			if(in_array($cat['id'], wp_get_post_categories($post->ID, array('fields'=>'ids'))))
				array_push($postIds, array(
					'id' => $post->ID,
					'title' => __($post->post_title)
				));
		};

		$postsFiltered = in_array($cat['id'], wp_get_post_categories(11, array('fields'=>'ids')));
		$cats[$i] = array(
			'categoryName' => __($cat['name']),
			'categoryId' => $cat['id'],
			'articles' => $postIds
		);
		$i++;
	};
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
	foreach ($keywords as $tag) {
		array_push($tagNames, $tag->name);
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
	$posts = get_posts();
	$news = array();
	for ($i = 0; $i < 5; $i++) {
		$authorId = get_post_meta($posts[$i]->ID, 'auteur')[0];
   	$news[$i] =array(
			'id' => $posts[$i]->ID,
			'title' => $posts[$i]->post_title,
			'author' => get_post($authorId)->post_title,
			'desc' => substr(strip_tags(__($posts[$i]->post_content)), 0, 420)."...",
		);
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

function get_authors(){
	$posts = get_posts( array(
		'post_type' => 'auteur'
	));
	$i=0;

	foreach ($posts as $post) {
		$picURL = get_post(get_post_meta($post->ID, "photo")[0])->guid;
		$picURL = explode('/', $picURL);
		$pic = array_slice($picURL, -5, 5, true);
		$pic = implode('/', $pic);

		$posts[$i] = array(
			'id' => $post->ID,
			'name' => $post->post_title,
			'title' => __(get_post_meta($post->ID, 'titre')[0]),
			'school' => __(get_post_meta($post->ID, 'universite')[0]),
			'pic' => $pic
		);
		$i++;
	}
	return array(
			'language' => qtrans_getLanguage(),
			'list' => $posts );
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
		'desc' => $post->post_content,
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


function my_relationship_query( $args, $field, $post ) {
	$args['meta_value'] = $post->ID;
	return $args;
}

add_filter('acf/fields/relationship/query/name=articles', 'my_relationship_query', 10, 3);
add_filter('acf/load_value/name=articles', "set_value", 10, 3);
//add_filter('acf/fields/relationship/result/name=articles', 'my_relationship_result', 10, 3);



function acf_load_auteurs_choices( $field ) {

    // reset choices
    $field['choices'] = array();
	 $choices = array();

	 $query = new WP_Query(array('post_type' => 'auteur'));

	if( $query -> have_posts() ):
		while( $query -> have_posts() ) : $query->the_post();
			$choices[get_the_ID()] = get_the_title();
		endwhile;
	endif;

    // loop through array and add to field 'choices'
    if( is_array($choices) ){
			  $field['choices'] = $choices;
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
