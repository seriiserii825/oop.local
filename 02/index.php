<?php
error_reporting(-1);
require_once __DIR__ . '/../debug.php';
require_once __DIR__ . '/../classes/WriteToFile.php';

$newFile = new WriteToFile('filename.txt', 'some text for file');
$newFile->write();
	