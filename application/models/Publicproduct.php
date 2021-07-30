<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Publicproduct extends CI_Model
{
    public function getPalet()
    {
        $this->db->select('*');
        $this->db->from('palet_warna');
        $this->db->where('hex is not null', null, false);
        $query = $this->db->get();
        return $query->result_array();
    }
}

/* End of file ModelName.php */
