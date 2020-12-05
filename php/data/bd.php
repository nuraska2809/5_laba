<?php
include ("php/bd/bd.php");
try {
    include("php/bd/bd.php");
    $query = "SELECT * FROM info WHERE id=2";
    $result = $db->query($query);
    $myrow = $result->fetch();
}
catch (Throwable $e)
{
    echo "Captured Throwable: " . $e->getMessage() . PHP_EOL;
}
?>