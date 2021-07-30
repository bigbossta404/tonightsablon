<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Landing extends CI_Controller
{
	function __construct()
	{
		parent::__construct();
		$this->load->helper('url');
		$this->load->model('publicproduct');
	}
	public function index()
	{
		$this->load->view('header_landing');
		$this->load->view('landing_page');
		$this->load->view('footer_landing');
	}

	public function getPaletWarna()
	{
		$palet = $this->publicproduct->getPalet();
		if ($palet) {
			echo json_encode($palet);
		} else {
			echo json_encode('error');
		}
	}
}
