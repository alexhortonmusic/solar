var SolarSystem = (function (milkyWay) {
	var closestStars = ["Alpha Centauri", "Death Star", "Sun", "North Star"];
	var ageOfSolarSystem = 0;
	var dwarfPlanets = [];

	milkyWay.getClosestStars = function () {
		return closestStars;
	};

	milkyWay.addDwarfPlanet = function (lumpOfRock) {
		dwarfPlanets.push(lumpOfRock);
	};

	return milkyWay;

})(SolarSystem);