<?php
require_once('db.php');
$login = $_POST['login'];
$pass = $_POST['pass'];
$repeatpass = $_POST['repeatpass'];





if($pass != $repeatpass){
        echo "Пароли не совпадают";
    } else {
        $sql = "INSERT INTO `users` (login ,pass) VALUES ('$login','$pass')";
       if ($conn -> query($sql) === TRUE){
        echo '<div class="login">'.$login.'</div>';
        echo readfile('index1.php');
        
       } 
   else {
    echo "Ошибка:" . $conn->error;
   }

}
