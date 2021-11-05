<?php
error_reporting(-1);
require_once __DIR__ . '/../debug.php';
require_once __DIR__ . '/../classes/Car.php';

$car1 = new Car('red', 4, 200);
$car2 = new Car('blue', 4, 140);
$car3 = new Car('green', 4, 220);

echo $car1->getCar();
echo $car2->getCar();
echo $car3->getCar();

echo Car::getCountCar();
