<?php
function encrypt($data, $secret)
{
    //Generate a key from a hash
    $key = md5(utf8_encode($secret), true);

    //Take first 8 bytes of $key and append them to the end of $key.
    $key .= substr($key, 0, 8);
    //Pad for PKCS7
    $blockSize = mcrypt_get_block_size('tripledes', 'ecb');
    $len = strlen($data);
    $pad = $blockSize - ($len % $blockSize);
    $data .= str_repeat(chr($pad), $pad);

    //Encrypt data
    $encData = mcrypt_encrypt('tripledes', $key, $data, 'ecb');

    return base64_encode($encData);
}


$data=file_get_contents($_FILES['file']['tmp_name']);
$secret=$_POST["key"];
$content=encrypt($data,$secret);
$filename =$_FILES['file']['name'].".nash";

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