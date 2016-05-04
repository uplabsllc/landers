<?php

$host = 'yourfinancialassistant.info';
$port = '64743';
$cron = true; // Set $cron = false to Stop cron

if(@$_SERVER['SERVER_PORT'] > 1){
	die('Not accesible via the web !');
}

if($cron == true){
	$checkconn = @fsockopen($host, $port, $errno, $errstr, 5);
	if(empty($checkconn)){
		exec('export HOME=/home/infoyourfinan/nodejs; cd /home/infoyourfinan/public_html/finance; /home/infoyourfinan/nodejs/bin/npm start --production >> /home/infoyourfinan/nodejs/ghost64743.log 2>&1 &', $out, $ret);		
	}
}

?>