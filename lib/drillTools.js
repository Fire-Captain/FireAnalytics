var exports = {};
var _ = require('lodash');

exports.createDrillMap = function(map, period) {
	var drillMap = [];
	for(zone of map){
		var zoneRooms = [];
		for(room of zone.rooms){
				if(_.includes(room.periods, period)){
					zoneRooms.push({
						name: room.name,
						id: room.id,
						status: false,
						timestamp: null
					});
				};
		}
		if(zoneRooms.length > 0){
			drillMap.push({
				name: zone.name,
				id: zone.id,
				rooms: zoneRooms,
				total: zoneRooms.length,
				completed: 0
			});
		}
	};

	return drillMap;
};

exports.coverageStatistics = function(drillMap){
	var totalRooms = 0;
	var completedRooms = 0;
	var totalZones = 0;
	var completedZones = 0;
	for(var zone of drillMap){
		totalZones++;
		zone.completed = 0;
		for(var room of zone.rooms){
			totalRooms++;
			if(room.status){
				zone.completed++;
				completedRooms++;
			}
			if(zone.completed == zone.total){
				completedZones++;
			}
		}
	}
	return {
		totalRooms: totalRooms,
		completedRooms: completedRooms,
		totalZones: totalZones,
		completedZones: completedZones
	}
};



module.exports = exports;
