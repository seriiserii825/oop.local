<?php
	
	class Car
	{
		public $color;
		public $wheels;
		public $speed;
		
		public function __construct($color, $wheels, $speed) {
			$this->color = $color;
			$this->wheels = $wheels;
			$this->speed = $speed;
		}
		
		public function getCar(): string {
			return "
			Color: $this->color<br>
			Wheels: $this->wheels<br>
			Speed: $this->speed<br>
			";
		}
	}
