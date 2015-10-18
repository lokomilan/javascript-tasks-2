'use strict';

var phoneBook = [];

function getSearchString(record) {
    var searchString = '';
    var keys = Object.keys(record);
    keys.forEach(value => {
        searchString += ', ' + String(record[value]);
    });
    //хотелось написать лямбду в одну строчку, но тогда не пройдет jscs
    return searchString.substring(2);
}

function markProperRecords(query) {
    var properRecordsPositions = [];
    if (query == null) {
        return properRecordsPositions;
    }
    for (var i = 0; i < phoneBook.length; i++) {
        var currentRecord = phoneBook[i];
        var searchString = getSearchString(currentRecord);
        var queryRegExp = new RegExp(query, 'i');
        if (queryRegExp.test(searchString)) {
            properRecordsPositions.push(i);
        }
    }
    return properRecordsPositions;
}

var emailRegExp = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-zа-яё0-9_-]+(\.[a-zа-яё0-9_-]+)*\.[a-za-яё]+$/i;
var phoneRegExp = /^(\+?\d+\s?)?((\d{3})|(\(\d{3}\)))(\s?)(\d{3})([\-\s])?(\d)([\-\s])?(\d{3})$/;

module.exports.add = function add(name, phone, email) {
    if (String(name) && phoneRegExp.test(phone) && emailRegExp.test(email)) {
        var record = {
            name: name,
            phone: phone,
            email: email
        };
        phoneBook.push(record);
    }
};

module.exports.find = function find(query) {
    var positions = markProperRecords(query);
    for (var i = 0; i < positions.length; i++) {
        var currentRecord = phoneBook[positions[i]];
        var recordString = getSearchString(currentRecord);
        console.log(recordString);
    }
};

module.exports.remove = function remove(query) {
    var positions = markProperRecords(query);
    for (var i = positions.length - 1; i >= 0; i--) {
        phoneBook.splice(positions[i], 1);
    }
    console.log('Удалено контактов: ' + String(positions.length));
};
