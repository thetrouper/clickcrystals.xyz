<?php
$filename = 'dc.txt';


$count = (int)file_get_contents($filename);

echo json_encode(['count' => $count]);
?>

