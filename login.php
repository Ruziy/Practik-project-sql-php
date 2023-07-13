<?php 
require_once('db.php');

$login = $_POST['login'];
$pass = $_POST['pass'];
$test = "hellowrld";
if (empty($login)|| empty($pass))
{
    echo "Заполните все поля";
} else {
    $sql = "SELECT * FROM `users` WHERE login = '$login' AND pass ='$pass'";
    $result = $conn->query($sql);
    $html = "<div class='login'>".$login."</div>";
    echo $html;
    if ($result->num_rows > 0)
    {
        while($row = $result->fetch_assoc()){
            echo readfile('index1.php');
            
            
        }
    } else {
        echo "нет такого пользователя";
    }
}
