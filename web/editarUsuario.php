<?php 
    if ($response === false) {
    // Manejar errores
        $_SESSION['update_error'] = "Error al actualizar los datos.";
        header("Location: administrarCuenta.php");
    } else {
        $_SESSION['update_success'] = true;
        header("Location: administrarCuenta.php?success=true");
    }
    // Obtener los datos enviados desde el formulario
    $user = $_POST["usuario"];
    $email = $_POST["nuevo_email"];
    $pass = $_POST["nueva_password"];

    // URL del microservicio con el nombre del usuario como parámetro
    $url = "http://192.168.100.2:3001/usuarios/$user";

    // Datos que se enviarán en la solicitud PUT
    $data = array(
        'email' => $email,
        'password' => $pass,
    );
    $json_data = json_encode($data);

    // Inicializar cURL
    $ch = curl_init($url);

    // Configurar opciones de cURL para una solicitud PUT
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "PUT");
    curl_setopt($ch, CURLOPT_POSTFIELDS, $json_data);
    curl_setopt($ch, CURLOPT_HTTPHEADER, array(
        'Content-Type: application/json',
        'Content-Length: ' . strlen($json_data)
    ));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

    // Ejecutar la solicitud PUT
    $response = curl_exec($ch);


    // Manejar la respuesta


    // Cerrar la conexión cURL
    curl_close($ch);
?>
