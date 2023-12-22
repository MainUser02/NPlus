import requests

# Замените на ваш API токен бота
bot_token = '6466345131:AAGTKv11RnDDEGZb9JBtt9ymyv3Czke6atc'
telegram_api_url = f'https://api.telegram.org/bot{bot_token}/sendMessage'

# Замените на ваш чат ID в Telegram, куда будут приходить уведомления
chat_id = 'https://t.me/jafarbamber'

def send_telegram_message(name, phone, message):
    text = f'Новая заявка!\nИмя: {name}\nНомер WhatsApp: {phone}\nСообщение: {message}'

    params = {'chat_id': chat_id, 'text': text}
    response = requests.post(telegram_api_url, params=params)

    if response.status_code == 200:
        print('Сообщение успешно отправлено в Telegram')
    else:
        print('Ошибка отправки сообщения в Telegram')

# Пример использования
if __name__ == "__main__":
    name = input("Введите ваше имя: ")
    phone = input("Введите номер WhatsApp: ")
    message = input("Введите сообщение: ")

    send_telegram_message(name, phone, message)
