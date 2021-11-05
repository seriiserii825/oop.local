<?php

abstract class Product
{
    private $name;
    private $price;

    private $discount = 30;

    public function __construct($name, $price)
    {
        $this->name = $name;
        $this->price = $price;
    }

    public function getPrice()
    {
        return $this->price - ($this->price / 100 * $this->setDiscount($this->discount));
    }


    public function getProduct()
    {
        return "<hr><strong>About product</strong>: <br>
                <strong>Name</strong>: $this->name <br>
                <strong>Price</strong>: {$this->getPrice()}  <br>
                ";
    }

    /**
     * @return int
     */
    public function getDiscount(): int
    {
        return $this->discount;
    }

    /**
     * @param int $discount
     */
    public function setDiscount(int $discount): void
    {
        $this->discount = $discount;
    }

    /**
     * @return mixed
     */
    abstract public function addProduct($name, $price);

    /**
     * @return mixed
     */
    public function getName()
    {
        return $this->name;
    }
}
