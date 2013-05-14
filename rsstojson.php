<?php

header('Content-Type: application/json');
$feed = new DOMDocument();
$feed->load($_GET['url']);
$json = array();

$json['title'] = $feed->getElementsByTagName('channel')->item(0)->getElementsByTagName('title')->item(0)->firstChild->nodeValue;

$json['description'] = $feed->getElementsByTagName('channel')->item(0)->getElementsByTagName('description')->item(0)->firstChild->nodeValue;
$json['link'] = $feed->getElementsByTagName('channel')->item(0)->getElementsByTagName('link')->item(0)->firstChild->nodeValue;

$items = $feed->getElementsByTagName('channel')->item(0)->getElementsByTagName('item');

$json['item'] = array();
$i = 0;

foreach($items as $item) {
   $title = $item->getElementsByTagName('title')->item(0)->firstChild->nodeValue;
   $description = $item->getElementsByTagName('description')->item(0)->firstChild->wholeText;
   
   $json['item'][$i]['title'] = $title;
   $json['item'][$i]['description'] = $description;
   $json['item'][$i]['id'] = $i;
   
   $i++;   
}

echo json_encode($json);
//print_r($json);

?>