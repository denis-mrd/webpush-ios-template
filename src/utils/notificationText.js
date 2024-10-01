// /Users/deniszagitov/Repositories/webpush-ios-template/src/utils/notificationText.js

export function generateNotificationText() {
    const random_number = Math.floor(Math.random() * 1000) + 1;
    const text = `MIR-3247 Зачисление средств ${random_number}р на счёт Накопительный счет *2328. Баланс карты: ${random_number * 2}р, баланс счёта: ${random_number * 3}р`;
    return text;
  }