<?php
defined('BASEPATH') or exit('No direct script access allowed');

$route['default_controller'] = 'landing';
$route['404_override'] = '';
$route['translate_uri_dashes'] = FALSE;

$route['login'] = 'auth_controller';
