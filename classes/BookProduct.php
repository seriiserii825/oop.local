<?php

namespace classes;

class BookProduct
{
    public $name;
    public $price;
    public $pagesCount;

    public function __construct($name, $price, $pagesCount)
    {
        $this->name = $name;
        $this->pagesCount = $pagesCount;
        $this->price = $price;
    }

    public function getProduct()
    {
        $out = "<strong>Pages count: $this->pagesCount</strong>";
        return $out;
    }
}