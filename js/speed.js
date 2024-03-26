var time = 3;
var speedOfFirstCyclist = 12;
var speedOfSecondCyclist = 14;

var calculateDistance = function(time, speedOfFirstCyclist, speedOfSecondCyclist) {

	var distanceOfFirstCyclist = speedOfFirstCyclist * time;
	var distanceOfSecondCyclist = speedOfSecondCyclist * time;

	var totalDistance = distanceOfFirstCyclist + distanceOfSecondCyclist;

	retutn totalDistance;
}

console.log(calculateDistance(3,12, 14));