<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Auth_controller extends CI_Controller
{
    function __construct()
    {
        parent::__construct();
        $this->load->helper('url');
        $this->load->model('authmodel');
    }

    public function index()
    {
        $this->load->view('login_page');
    }
}
