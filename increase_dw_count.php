<?php
$filename = 'dc.txt';


$count = (int)file_get_contents($filename);


$count++;


file_put_contents($filename, $count);


echo json_encode(['count' => $count]);
?>
