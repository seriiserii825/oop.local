<?php
function getFullName($lastName, $firstName)
{
    return $lastName . ' ' . $firstName;
}

$student = [
    'firstName' => 'Vasya',
    'lastName' => 'Petrov',
    'birthDate' => '14-09-1990'
];

echo getFullName($student['firstName'], $student['lastName']);