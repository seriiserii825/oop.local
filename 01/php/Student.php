<?php

namespace Student;
require_once __DIR__ . '/../../debug.php';

class Student
{
    private $firstName;
    private $lastName;
    private $birthDate;

    public function __construct($firstName, $lastName, $birthDate)
    {
        $this->firstName = $firstName;
        $this->lastName = $lastName;
        $this->birthDate = $birthDate;
        $this->birthDate = $birthDate;
    }

    public function getFullName()
    {
        return $this->lastName . ' ' . $this->firstName . ' - '. $this->birthDate. '.';
    }
}

$student = new Student('Vasya', 'Pupkin', '14-09-1990');
$b = $student;
$student = 10;
debug($b).PHP_EOL;
debug($student);
