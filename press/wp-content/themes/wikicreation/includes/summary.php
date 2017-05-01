<?php

function set_summary (&$str) {
	define(TITLE_ID, 'article-title-');

	$titles = [];
	$titleNbr = 0;
  $summary = '';

  $dom = new DOMDocument;
  $str = mb_convert_encoding($str, 'HTML-ENTITIES', 'UTF-8');
	libxml_use_internal_errors(true);
  $dom->loadHTML($str);
  $titles = $dom->getElementsByTagName('h1');
  foreach ($titles as $title) {
    $id = TITLE_ID.$titleNbr;
    $title->setAttribute('id', $id);
    $summary .= '<a href="#'.$id.'">';
		$summary .= 	'<li class="entry">';
    $summary .=     $title->textContent;
		$summary .= 	'</li>';
    $summary .= '</a>';
    $titleNbr++;
  }
  $str = $dom->saveHTML();
	return $summary;
}
