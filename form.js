// Получаем все кнопки с классом "openFormButton"
const openFormButtons = document.querySelectorAll('.openFormButton');

// Добавляем обработчик клика ко всем кнопкам с классом "openFormButton"
openFormButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        document.getElementById('overlay').style.display = 'flex';
    });
});

// Закрываем всплывающую форму при клике на кнопку "Закрыть"
document.getElementById('closeFormButton').addEventListener('click', function () {
    document.getElementById('overlay').style.display = 'none';
});

// Ограничение ввода только цифр для поля phone
document.getElementById('phone').addEventListener('input', function(event) {
    this.value = this.value.replace(/\D/g, '');
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем стандартное поведение формы

    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var message = document.getElementById('message').value;

    // Проверяем, чтобы все поля были заполнены перед отправкой
    if (name.trim() === '' || phone.trim() === '' || message.trim() === '') {
        alert('Пожалуйста, заполните все поля формы');
        return false; // Предотвращаем отправку формы
    }

    var textMessage = `Новая заявка!\nИмя: ${name}\nНомер WhatsApp: ${phone}\nСообщение: ${message}`;

    // Ваш токен бота
    var botToken = '6466345131:AAGTKv11RnDDEGZb9JBtt9ymyv3Czke6atc';

    // ID вашего чата в Telegram
    var chatId = '998671458';

    // 599450851

    var url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    var data = {
        chat_id: chatId,
        text: textMessage
    };

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Ошибка отправки данных в Telegram');
        }
        return response.json();
    })
    .then(data => {
        var successMessage = document.getElementById('successMessage');
        successMessage.style.display = 'flex';
        overlay.style.display = 'none';

        setTimeout(function() {
            successMessage.style.display = 'none';
        }, 5000);

        // Очищаем поля формы
        document.getElementById('name').value = '';
        document.getElementById('phone').value = '';
        document.getElementById('message').value = '';
    })

    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Предотвращаем стандартное поведение формы
        sendMessageToTelegram(); // Вызываем функцию отправки сообщения в телеграм
    })

    .catch(error => {
        console.error(error);
        alert('Ошибка отправки данных в Telegram');
    });

    return false; // Предотвращаем отправку формы
});