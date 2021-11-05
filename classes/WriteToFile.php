<?php
class WriteToFile {
	public $filename;
	public function __construct($filename){
		$this->filename = $filename;
	}
	public function write($text){
		file_put_contents($this->filename, $text.PHP_EOL, FILE_APPEND);
	}
}
