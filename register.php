<?php
// Connect to the database
$host = 'localhost';
$user = 'root';
$password = '12345';
$database = 'user1';
$conn = mysqli_connect($host, $user, $password, $database);
if (!$conn) {
    die('Connection failed: ' . mysqli_connect_error());
}

// Check if the form has been submitted
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Get the form data
    $username = $_POST['username'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT); // Hash the password
    $email = $_POST['email'];

    // Check if the username already exists in the database
    // $sql = "SELECT * FROM user1 WHERE username = aditya";
    // $stmt = $conn->prepare($sql);
    // $stmt->bind_param('s', $username);
    // $stmt->execute();
    // $result = $stmt->get_result();
    
    if ($result->num_rows > 0) {
        echo 'Username already exists.';
    } else {
        // Insert the new user into the database
        $sql = "INSERT INTO user1 (username, password, email) VALUES (?, ?, ?)";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param('sss', $username, $password, $email);
        $stmt->execute();
        echo 'Registration successful.';
    }
    
    // Close the statement
    $stmt->close();
}

// Close the connection
$conn->close();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Registration</title>
    <link rel="stylesheet" href="signup.css">
</head>
<body>
    <div class="container">
        <h1>Register</h1>
        <form action="register.php" method="post">
            <label for="username">Username:</label>
            <input type="text" name="username" id="username" required>
            
            <label for="password">Password:</label>
            <input type="password" name="password" id="password" required>
            
            <label for="email">Email:</label>
            <input type="email" name="email" id="email" required>
            
            <button type="submit">Register</button>
        </form>
    </div>
</body>
</html>
