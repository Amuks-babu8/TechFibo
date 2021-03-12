<?php
$receiving_email_address = 'contact@techfibo.co.ke';

  $from_name = $_POST['phone'];
  $subject ="Work Available";
  $message = $_POST['body'];

 $message=$from_name." Wants some work done on ".$message;
if(mail($receiving_email_address, $subject,$message)){
  echo "OK";
  exit;
}
echo "Could not send due to an error";

?>