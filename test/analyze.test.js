var chai = require('chai');
var expect = chai.expect;
var anaylitics = require('./../FireAnalytics');
var create = require('./createHelper');


describe('Analyze Map', function() {
    describe('Get Number of Rooms (100 Zones)', function() {
        var map = create.generateMap(100);
				var rooms = anaylitics.zone.countRooms(map);
				it('Should Produce Number - '+rooms, function() {
						expect(rooms).to.be.number;
				});
    });
		describe('Get Number of Rooms (1000 Zones)', function() {
				var map = create.generateMap(1000);
				var rooms = anaylitics.zone.countRooms(map);
				it('Should Produce Number - '+rooms, function() {
						expect(rooms).to.be.number;
				});
		});
		describe('Get Number of Rooms (10000 Zones)', function() {

				var map = create.generateMap(10000);
				var rooms = anaylitics.zone.countRooms(map);
				it('Should Produce Number - '+rooms, function() {
						expect(rooms).to.be.number;
				});
		});
	});
