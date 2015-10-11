'use strict';

var phoneBook = [];

function markProperRecords(query) {
    var properRecordsPositions = [];
    for (var i = 0; i < phoneBook.length; i++) {
        var currentRecord = phoneBook[i];
        var searchString = '';
        for (var key in currentRecord) {
            searchString = searchString + ' ' + String(currentRecord[key]);
        }
        if (searchString.lastIndexOf(query) >= 0) {
            properRecordsPositions.push(i);
        }
    }
    return properRecordsPositions;
}
var emailRegExp = /^([a-z0-9_\-]+\.)*[a-z0-9_\-]+@[a-zа-я0-9_-]+(\.[a-zа-я0-9_-]+)*\.[a-za-я]+$/i;
var phoneRegExp = /^(\+?\d+\s?)?((\d{3})|(\(\d{3}\)))(\s?)(\d{3})([\-\s])?(\d)([\-\s])?(\d{3})$/;

module.exports.add = function add(name, phone, email) {
    if (name && phoneRegExp.test(phone) && emailRegExp.test(email)) {
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
        var recordString = '';
        var record = phoneBook[positions[i]];
        for (var key in record) {
            recordString = recordString + ', ' + record[key];
        }
        console.log(recordString.substring(2));
    }
};

module.exports.remove = function remove(query) {
    var positions = markProperRecords(query);
    for (var i = positions.length - 1; i >= 0; i--) {
        phoneBook.splice(positions[i], 1);
    }
    console.log('Удалено контактов: ' + String(positions.length));
};

