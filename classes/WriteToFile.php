<?php
class WriteToFile {
	public $filename;
	public $text;
	public function __construct($filename, $text){
		$this->filename = $filename;
		$this->text = $text;
	}
	public function write(){
		file_put_contents($this->filename, $this->text);
	}
}
