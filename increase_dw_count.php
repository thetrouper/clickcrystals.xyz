<?php
$filename = 'dc.txt';

// Read the current count from the file
$count = (int)file_get_contents($filename);

// Increment the count
$count++;

// Write the updated count back to the file
file_put_contents($filename, $count);

// Return the updated count as JSON
echo json_encode(['count' => $count]);
?>
