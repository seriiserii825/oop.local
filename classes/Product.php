<?php

class Product
{
    private $name;
    private $price;

    public function __construct($name, $price)
    {
        $this->name = $name;
        $this->price = $price;
    }

    public function getProduct()
    {
        return "<hr><strong>About product</strong>: <br>
                <strong>Name</strong>: $this->name <br>
                <strong>Price</strong>: {$this->price}  <br>
                ";
    }
}
