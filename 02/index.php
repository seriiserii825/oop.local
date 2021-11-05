<?php
error_reporting(-1);
require_once __DIR__ . '/../debug.php';
require_once __DIR__ . '/../classes/Product.php';
//require_once __DIR__ . '/../classes/NotebookProduct.php';
require_once __DIR__ . '/../classes/BookProduct.php';

function offerCase(IGadget $product){
    echo "<p>Get case for <strong>{$product->getName()}</strong></p>";
}

$notebook = new NotebookProduct('Notebook', 2000, 'Intel');
offerCase($notebook);