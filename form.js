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


function sendMessageToTelegram() {
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var message = document.getElementById('message').value;

    // Формирование текста сообщения без кодирования
    var textMessage = `Новая заявка!\nИмя: ${name}\nНомер WhatsApp: ${phone}\nСообщение: ${message}`;

    // Ваш токен бота
    var botToken = '6466345131:AAGTKv11RnDDEGZb9JBtt9ymyv3Czke6atc';

    // ID вашего чата в Telegram
    var chatId = '599450851';

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
        console.log('Данные успешно отправлены в Telegram');
    })
    .catch(error => {
        console.error(error);
    });
}
