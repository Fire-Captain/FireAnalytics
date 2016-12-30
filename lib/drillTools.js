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
						status: false
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




module.exports = exports;
