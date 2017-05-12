var Bits = require('../lib/index');
var expect = require('chai').expect

describe('Bits read int', function() {
    it('should be able to read 8 bit int', function() {
        var buffer = Buffer.from([99]);
        var bits = Bits.from(buffer, 3, 3);
        expect(bits.readInt()).equals(0);
        var buffer = Buffer.from([99]);
        var bits = Bits.from(buffer, 1, 3);
        expect(bits.readInt()).equals(6);
    });

    it('should be able to read 16 bit int', function() {
        var buffer = Buffer.from([99, 98]);
        var bits = Bits.from(buffer, 3, 9);
        expect(bits.readInt()).equals(54);
    });

    it('should be able to read 32 bit int', function() {
        var buffer = Buffer.from([99, 98, 97]);
        var bits = Bits.from(buffer, 1, 22);
        expect(bits.readInt()).equals(3256624);
    });
});