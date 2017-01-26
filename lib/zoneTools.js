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

exports.mapIssues = function(map){
  var issues = [];
  for (var zoneKey in map) {
    var zone = map[zoneKey];
      for (var room in zone.rooms) {
          if(!room.name) issues.push('Room Is Missing A Name');
          else if(!room.periods || room.periods.length === 0) issues.push('Room ' + zone.room.name + ' Is Missing Class Periods');
      };
  };
  return issues;
};




module.exports = exports;
