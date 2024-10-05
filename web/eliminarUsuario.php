<?php
    // Obtener el nombre del usuario desde el formulario
    $user = $_POST["usuario"];

    // URL del microservicio para eliminar usuario
    $url = "http://usuarios:3001/usuarios/$user";

    // Inicializar cURL
    $ch = curl_init($url);

    // Configurar opciones de cURL para una solicitud DELETE
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "DELETE");
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

    // Ejecutar la solicitud DELETE
    $response = curl_exec($ch);

    // Manejar la respuesta
    if ($response === false) {
        echo "Error en la conexión: " . curl_error($ch);
    } else {
        // Si la respuesta es exitosa, redirigir o mostrar mensaje
        echo "Usuario eliminado exitosamente.";
        header("Location: index.html");
    }

    // Cerrar la conexión cURL
    curl_close($ch);
?>
