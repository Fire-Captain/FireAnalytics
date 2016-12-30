var exports = {};

exports.generateMap = function(zones) {
    var map = [];
		var periods = [1,2,3,4,5,6,7];
    for (var i = 0; i < zones; i++) {
				var rooms = [];
				var randomRooms = Math.floor(Math.random() * 50) + 10;

        for (var r = 0; r < randomRooms; r++) {
            rooms.push({
                name: 'Room ' + r + ' Name',
                periods: [periods[Math.floor(Math.random()*periods.length)],periods[Math.floor(Math.random()*periods.length)],periods[Math.floor(Math.random()*periods.length)]],
                id: 'room-' + r
            });
        }
				map.push({
						name: 'Zone ' + i + ' Name',
						id: 'zone-' + i,
						rooms: rooms
				});
    }
    return map;
};


module.exports = exports;
