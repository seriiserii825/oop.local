<?php
	
	class Car
	{
		public $color;
		public $wheels;
		public $speed;
        public static $countCar;
		
		public function __construct($color, $wheels, $speed) {
			$this->color = $color;
			$this->wheels = $wheels;
			$this->speed = $speed;
            self::$countCar++;
		}

        public static function getCountCar(){
            return self::$countCar;
        }
		
		public function getCar(): string {
			return "
			Color: $this->color<br>
			Wheels: $this->wheels<br>
			Speed: $this->speed<br>
			<hr>
			";
		}
	}
