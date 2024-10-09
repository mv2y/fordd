// Initialize EmailJS with your User ID
(function() {
    emailjs.init("QiUwjAh2wGdXwfV7y"); // استبدل YOUR_USER_ID بمعرف المستخدم الخاص بك
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Send email using EmailJS
    emailjs.send('service_nb5trg7', 'service_nb5trg7', {
        from_name: document.getElementById('name').value,
        email_id: document.getElementById('email').value,
        message: document.getElementById('message').value
    }).then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        alert('تم إرسال الرسالة بنجاح!');
    }, function(error) {
        console.log('FAILED...', error);
        alert('حدث خطأ أثناء الإرسال...');
    });
});
