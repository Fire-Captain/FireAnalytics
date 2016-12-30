var exports = {};


exports.countRooms = function(map) {
    var rooms = 0;
		//console.log(map);
    for (var zoneKey in map) {
			var zone = map[zoneKey];
        for (var room in zone.rooms) {
						rooms++
        };
    };
    return rooms;
};




module.exports = exports;
