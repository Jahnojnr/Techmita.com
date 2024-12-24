<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstName = htmlspecialchars($_POST['first-name']);
    $lastName = htmlspecialchars($_POST['last-name']);
    $email = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);
    
    
    $to = 'your-email@example.com';  
    $subject = 'New Contact Form Submission: ' . $subject;
    $messageBody = "First Name: $firstName\nLast Name: $lastName\nEmail: $email\nSubject: $subject\nMessage: $message";

   
    if (mail($to, $subject, $messageBody)) {
        echo "Thank you for your message. We will get back to you soon!";
    } else {
        echo "There was an issue sending your message. Please try again.";
    }
}
?>
