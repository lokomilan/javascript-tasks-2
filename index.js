'use strict';

var phoneBook = require('./phoneBook');

// Добавляем записи
phoneBook.add('Сергей', '7 999 6667778', 'gs@example.com');
phoneBook.add('Сергей 2', '999 4433444', 'gs@example.com');
phoneBook.add('Олег', '+7 (999) 777-7-777', 'just7@yandex-team.ru');

// Невалидные данные не должны попадать в книгу!
phoneBook.add('Честный Хрюндель', '+7 (999) 777-7-77', 'honest-hrundel@gmail.com');

phoneBook.find('777');
// Выводит построчно записи, все поля через запятую:
// Сергей, +7 (999) 666-7-778, gogolef@yandex-team.ru
// Олег, +7 (999) 777-7-777, just7@yandex-team.ru

phoneBook.remove('Олег');
// Выводит количество удалённых контактов, которые удовлетворят запросу:
// Удален 1 контакт
