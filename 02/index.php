<?php
	error_reporting(-1);
	require_once __DIR__ . '/../debug.php';
	require_once __DIR__ . '/../classes/Car.php';
	$car = new Car('red', 4, '180');
	
	echo $car->getCar();