var chai = require('chai');
var expect = chai.expect;
var anaylitics = require('./../FireAnalytics');
var create = require('./createHelper');


describe('Create Map', function() {
    describe('Small Map Creation (100 Zones)', function() {
        var jsonMap, map;
        map = create.generateMap(100);
        it('Should return a object', function() {
            expect(map).to.exist;
        });
        it('Convert to JSON', function() {
            jsonMap = JSON.stringify(map);
            expect(jsonMap).to.be.string;
        });
        it('Parse JSON', function() {
            map = JSON.parse(jsonMap);
            expect(map).to.exist;
        });
    });
    describe('Overkill Map Creation (1000 Zones)', function() {
        var jsonMap, map;
        map = create.generateMap(1000);
        it('Should return a object', function() {
            expect(map).to.exist;
        });
        it('Convert to JSON', function() {
            jsonMap = JSON.stringify(map);
            expect(jsonMap).to.be.string;
        });
        it('Parse JSON', function() {
            map = JSON.parse(jsonMap);
            expect(map).to.exist;
        });
    });
		describe('Extreme Map Creation (10000 Zones)', function() {
				var jsonMap, map;
				map = create.generateMap(10000);
				it('Should return a object', function() {
						expect(map).to.exist;
				});
				it('Convert to JSON', function() {
						jsonMap = JSON.stringify(map);
						expect(jsonMap).to.be.string;
				});
				it('Parse JSON', function() {
						map = JSON.parse(jsonMap);
						expect(map).to.exist;
				});
		});
});
