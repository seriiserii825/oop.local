<?php
error_reporting(-1);
require_once __DIR__ . '/../debug.php';
require_once __DIR__ . '/../classes/Product.php';
require_once __DIR__ . '/../classes/NotebookProduct.php';
require_once __DIR__ . '/../classes/BookProduct.php';

$prod = new Product('Book', '22');
echo $prod->getProduct();
$prodNotebook = new NotebookProduct('notebook', 2022, 'Intel');
echo $prodNotebook->getProduct();

$prodBook = new BookProduct('Book', 2000, '14');
echo $prodBook->getProduct();