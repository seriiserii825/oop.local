<?php
error_reporting(-1);
require_once __DIR__ . '/../debug.php';
require_once __DIR__ . '/../classes/Product.php';

$prod1 = new Product('asus', 2000, 'amd');
echo $prod1->getProduct();
