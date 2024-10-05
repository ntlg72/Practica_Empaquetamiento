<?php
    session_start();
    $us = $_SESSION["usuario"];
    if ($us == "") {
        header("Location: index.html");
    }

    if (isset($_GET['success']) && $_GET['success'] === 'true') {
        unset($_SESSION['update_success']);
    } else if (isset($_SESSION['update_error'])) {
        unset($_SESSION['update_error']);
    }
    
?>
<?php
    // Mostrar mensaje de éxito si se ha establecido en la sesión
    if (isset($_SESSION['update_success']) && $_SESSION['update_success']) {
        unset($_SESSION['update_success']);
    }
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    <title>Administrar Cuenta</title>
</head>

<body>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="usuario.php">Almacén ABC</a>
            <div class="navbar-nav">
                <a class="nav-link" href="usuario.php">Orden</a>
                <a class="nav-link" href="administrar_cuenta.php">Administrar cuenta</a>
            </div>
            <span class="navbar-text">
                <?php echo "<a class='nav-link' href='logout.php'>Logout $us</a>"; ?>
            </span>
        </div>
    </nav>


    <h2>Administrar cuenta</h2>

    <!-- Formulario para actualizar el email -->
    <form method="post" action="editarUsuario.php" class="mb-4">
        <div class="mb-3">
            <label for="nuevo_email" class="form-label">Nuevo correo electrónico</label>
            <input type="email" class="form-control" id="nuevo_email" name="nuevo_email" required>
        </div>
        <input type="hidden" name="usuario" value="<?php echo $us; ?>">
        <button type="submit" class="btn btn-primary">Actualizar Email</button>
    </form>

    <!-- Formulario para actualizar la contraseña -->
    <form method="post" action="editarUsuario.php">
        <div class="mb-3">
            <label for="nueva_password" class="form-label">Nueva contraseña</label>
            <input type="password" class="form-control" id="nueva_password" name="nueva_password" required>
        </div>
        <input type="hidden" name="usuario" value="<?php echo $us; ?>">
        <button type="submit" class="btn btn-success">Actualizar Contraseña</button>
    </form>

    <h2 class="mt-5">Eliminar cuenta</h2>
    <form method="post" action="eliminarUsuario.php">
        <div class="mb-3">
            <label for="usuario" class="form-label">Nombre de usuario</label>
            <input type="text" class="form-control" id="usuario" name="usuario" value="<?php echo $us; ?>" readonly>
        </div>
        <input type="submit" value="Eliminar cuenta" class="btn btn-danger">
    </form>
    </div>
</body>

</html>