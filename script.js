(function() {
    emailjs.init("IaMKw31aFFW89_3pv"); // Substitua pelo seu ID público EmailJS
})();

document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm('service_hvm1vkn', 'template_y7rpujq', this)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Cadastro enviado com sucesso!');
        }, function(error) {
            console.log('FAILED...', error);
            alert('Houve um erro ao enviar o cadastro.');
        });
});
