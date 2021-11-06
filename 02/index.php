<?php
require_once __DIR__ . '/../header.php';
error_reporting(E_ALL);
ini_set('display_errors', '1');

use classes\BookProduct;

require_once __DIR__ . '/../debug.php';
require_once __DIR__ . '/../classes/BookProduct.php';

$book = new BookProduct('Book', 3000, 14);
debug($book);
require_once __DIR__ . '/../footer.php';
?>
