var chai = require('chai');
var expect = chai.expect;
var anaylitics = require('./../FireAnalytics');
var create = require('./createHelper');

describe('Create Drill', function() {
    describe('Get Number of Rooms (100 Zones)', function() {
        var map = create.generateMap(100);
        var drillMap = anaylitics.drill.createDrillMap(map, 1);
        it('Should Produce a Object', function() {
            expect(drillMap).to.be.object;
        });
				var mapRooms = anaylitics.zone.countRooms(map);
        it('Should Get Number of Map Rooms - '+mapRooms, function() {
            expect(mapRooms).to.be.number;
        });
				var drillRooms = anaylitics.zone.countRooms(drillMap);
				it('Should Get Number of Drill Rooms - '+drillRooms, function() {
						expect(drillRooms).to.be.number;
				});
    });
		describe('Get Number of Rooms (1000 Zones)', function() {
        var map = create.generateMap(1000);
        var drillMap = anaylitics.drill.createDrillMap(map, 1);
        it('Should Produce a Object', function() {
            expect(drillMap).to.be.object;
        });
				var mapRooms = anaylitics.zone.countRooms(map);
        it('Should Get Number of Map Rooms - '+mapRooms, function() {
            expect(mapRooms).to.be.number;
        });
				var drillRooms = anaylitics.zone.countRooms(drillMap);
				it('Should Get Number of Drill Rooms - '+drillRooms, function() {
						expect(drillRooms).to.be.number;
				});
    });
		describe('Get Number of Rooms (10000 Zones)', function() {
        var map = create.generateMap(10000);
        var drillMap = anaylitics.drill.createDrillMap(map, 1);
        it('Should Produce a Object', function() {
            expect(drillMap).to.be.object;
        });
				var mapRooms = anaylitics.zone.countRooms(map);
        it('Should Get Number of Map Rooms - '+mapRooms, function() {
            expect(mapRooms).to.be.number;
        });
				var drillRooms = anaylitics.zone.countRooms(drillMap);
				it('Should Get Number of Drill Rooms - '+drillRooms, function() {
						expect(drillRooms).to.be.number;
				});
    });
});




describe('Anaylize Drill', function() {
  describe('Get Statistics of Completion (100 Zones)', function() {
      var map = create.generateMap(100);
      var drillMap = anaylitics.drill.createDrillMap(map, 1);
      it('Should Produce a Object', function() {
          expect(drillMap).to.be.object;
      });
      drillMap = create.randomCheckoff(drillMap, 0.9);
      var stats = anaylitics.drill.coverageStatistics(drillMap);
      it('Should Produce a Statistics Object', function() {
          expect(stats).to.be.object;
      });
      it('Should Produce Numbers', function() {
          expect(stats.totalRooms).to.be.number;
          expect(stats.completedRooms).to.be.number;
          expect(stats.totalZones).to.be.number;
          expect(stats.completedZones).to.be.number;

      });
  });
  describe('Get Statistics of Completion (1000 Zones)', function() {
      var map = create.generateMap(1000);
      var drillMap = anaylitics.drill.createDrillMap(map, 1);
      it('Should Produce a Object', function() {
          expect(drillMap).to.be.object;
      });
      drillMap = create.randomCheckoff(drillMap, 0.9);
      var stats = anaylitics.drill.coverageStatistics(drillMap);
      it('Should Produce a Statistics Object', function() {
          expect(stats).to.be.object;
      });
      it('Should Produce Numbers', function() {
          expect(stats.totalRooms).to.be.number;
          expect(stats.completedRooms).to.be.number;
          expect(stats.totalZones).to.be.number;
          expect(stats.completedZones).to.be.number;
      });
  });


});
