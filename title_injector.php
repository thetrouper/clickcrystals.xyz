<?php

$html = file_get_contents($_SERVER['REQUEST_URI']);

$html = preg_replace("/<title>(.*?)<\/title>/i", "<title>ClickCrystals | $1</title>", $html);

echo $html;
?>
