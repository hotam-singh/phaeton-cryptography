"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BigNum = require("bignum");
exports.BIG_ENDIAN = 'big';
exports.LITTLE_ENDIAN = 'little';
exports.intToBuffer = (value, byteLength, endianness = exports.BIG_ENDIAN) => new BigNum(value).toBuffer({ size: byteLength, endian: endianness });
exports.bufferToIntAsString = (buffer) => BigNum.fromBuffer(buffer).toString();
exports.bigNumberToBuffer = (bignumber, size, endian = exports.BIG_ENDIAN) => exports.intToBuffer(bignumber, size, endian);
exports.bufferToBigNumberString = (bigNumberBuffer) => exports.bufferToIntAsString(bigNumberBuffer);
exports.bufferToHex = (buffer) => Buffer.from(buffer).toString('hex');
const hexRegex = /^[0-9a-f]+/i;
exports.hexToBuffer = (hex, argumentName = 'Argument') => {
    if (typeof hex !== 'string') {
        throw new TypeError(`${argumentName} must be a string.`);
    }
    const matchedHex = (hex.match(hexRegex) || [])[0];
    if (!matchedHex || matchedHex.length !== hex.length) {
        throw new TypeError(`${argumentName} must be a valid hex string.`);
    }
    if (matchedHex.length % 2 !== 0) {
        throw new TypeError(`${argumentName} must have a valid length of hex string.`);
    }
    return Buffer.from(matchedHex, 'hex');
};
//# sourceMappingURL=buffer.js.map
