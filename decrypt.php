<?php
function decrypt($data, $secret)
{
    //Generate a key from a hash
    $key = md5(utf8_encode($secret), true);

    //Take first 8 bytes of $key and append them to the end of $key.
    $key .= substr($key, 0, 8);

    $data = base64_decode($data);

    $data = mcrypt_decrypt('tripledes', $key, $data, 'ecb');

    $block = mcrypt_get_block_size('tripledes', 'ecb');
    $len = strlen($data);
    $pad = ord($data[$len-1]);

    return substr($data, 0, strlen($data) - $pad);
}


$data=file_get_contents($_FILES['file']['tmp_name']);
$secret=$_POST['key'];
$content=decrypt($data,$secret);
$filename =$_FILES['file']['name'];
$filename = substr($filename,0,strlen($filename)-5);

header('Content-Description: File Transfer');
header('Content-Type: application/octet-stream');
header('Content-disposition: attachment; filename='.$filename);
header('Content-Length: ' . strlen($content));
header('Cache-Control: must-revalidate, post-check=0, pre-check=0');
header('Expires: 0');
header('Pragma: public');
echo $content;
exit;

?>