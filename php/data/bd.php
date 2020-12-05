<?php
include ("php/bd/bd.php");
$query  = "SELECT * FROM info WHERE id=2";
$result = $db->query($query);
$myrow = $result ->fetch();
?>