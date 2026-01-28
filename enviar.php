<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $mensaje = $_POST['mensaje'];
    
    $destinatario = "contacto@aragspa.cl"; // TU CORREO AQUÍ
    $asunto = "Nuevo mensaje de contacto desde la Web";
    
    $cuerpo = "Nombre: $nombre \n";
    $cuerpo .= "Correo: $email \n";
    $cuerpo .= "Mensaje: $mensaje";
    
    $headers = "From: no-reply@aragspa.cl";

    if (mail($destinatario, $asunto, $cuerpo, $headers)) {
        echo "Mensaje enviado con éxito";
    } else {
        echo "Error al enviar";
    }
}
?>
