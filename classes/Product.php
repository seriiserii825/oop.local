<?php

class Product
{
    public $name;
    public $price;
    public $cpu;
    public $numPages;

    public function __construct($name, $price, $cpu = null, $numPages = null)
    {
        $this->name = $name;
        $this->price = $price;
        $this->cpu = $cpu;
        $this->numPages = $numPages;
    }

    public function getCpu()
    {
        return $this->cpu;
    }

    public function getPrice()
    {
        return $this->price;
    }

    public function getProduct($type = 'notebook')
    {
        $out = "<strong>About product</strong>: <br>
                <strong>Name</strong>: $this->name <br>
                <strong>Price</strong> $this->price <br>
                ";
        if ($type === 'notebook') {
            $out .= "<strong>Cpu</strong>: $this->cpu";
        } else {
            $out .= "<strong>Num pages</strong>: $this->numPages";
        }
        $out .= "<hr>";
        return $out;
    }


}
