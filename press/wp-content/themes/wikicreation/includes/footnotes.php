<?php

function set_footnotes ($str) {
	define(FOOTNOTE_ID, 'footnote-');
	define(FOOTNOTE_TARGET_ID, 'footnote-target-');

	/* Générer les notes de bas de page */
	$notes = [];
	$noteNbr = 1; /* Numéro de la première note */

	preg_match_all('/\{\{(.*?)\}\}/', $str, $notes); /* THIBAULT : La note de bas de page est enregistré dans le tableau $notes */
	while (strpos($str, '{{') !== false && strpos($str, '}}') !== false) {
		$str = preg_replace(array('/\{\{(.*?)\}\}/'), '<a id="'.FOOTNOTE_TARGET_ID.$noteNbr.'" href="#'.FOOTNOTE_ID.$noteNbr.'"> ['.$noteNbr.']</a>', $str, 1); /* THIBAULT : Formatage des liens vers le bas de la page html */
		$noteNbr++;
	}

	$footnotes = '';
	if (count($notes[1]) > 0) {
		foreach ($notes[1] as $key => $note){
			$num = $key+1;

			/* Cas exceptionnel pour les nots de bas de page inclus dans une référence */
			if (is_array($note)) $note = $note[1];

			/* Repère décalé pour permettre un lien ancre visible au centre de l'écran */
			$footnotes .= '<div class="footnote">';
			$footnotes .= 	'<div class="left-cell">';
			$footnotes .= 		'<a id="'.FOOTNOTE_ID.$num.'" href="#'.FOOTNOTE_TARGET_ID.$num.'">'.$num.'</a>';
			$footnotes .= 	'</div>';
			$footnotes .= 	'<div class="right-cell">';
			$footnotes .= 		$note;
			$footnotes .= 	'</div>';
			$footnotes .= '</div>';
		}
	}
	return ['body' => $str, 'footnotes' => $footnotes];
}

function filter_footnotes ($str) {
  return preg_replace(array('/\{\{(.*?)\}\}/'), '', $str, 1);
}
