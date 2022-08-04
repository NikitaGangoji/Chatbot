"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchData = exports.readData = exports.init = void 0;
const init = (jsonData) => {
    const options = jsonData.flatMap(Object.keys);
    const msg = `Welcome!!!, choose from below: <br/> ${options}`;
    return msg;
};
exports.init = init;
const readData = (jsonData, option, type) => {
    let op;
    const response = jsonData.find((ele) => ele[option]);
    if (response) {
        if (option && type) {
            op = Object.values(response);
            op = op.flat().find((item) => item.type === type);
            op = op.data;
        }
        else if (option && !type) {
            op = Object.values(response);
            op = op.flat().map((item) => item.type);
        }
    }
    return op;
};
exports.readData = readData;
const fetchData = (jsonData, option) => {
    let keys = [];
    let Welcome = undefined;
    if (option) {
        let options = option.split('-');
        let n = options.length;
        while (n !== 0) {
            jsonData = jsonData[options[options.length - n]];
            n--;
        }
    }
    else {
        Welcome = "Hi! This is your personal Assistant. Please choose from below services!";
    }
    for (let key in jsonData) {
        if (jsonData.hasOwnProperty(key)) {
            if (typeof Object.values(key) === 'object') {
                keys.push(key);
            }
            if (key === 'response') {
                return jsonData[key];
            }
        }
    }
    var keynew = keys.join('<br/>');
    return Welcome ? `${Welcome} <br/> ${keynew}` : keynew;
};
exports.fetchData = fetchData;
//# sourceMappingURL=handler.js.map