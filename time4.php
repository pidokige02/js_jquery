<?php
$timezones = ["Asia/Seoul", "America/New_York"];
header('Content-Type: application/json');
echo json_encode($timezones);
// PHP Array 또는 String 따위를 JSON 문자열로 변환하는 PHP 함수
?>