var SolarSystem = (function () {
	var planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Neptune", "Uranus", "Pluto"];
	var planetsLandedUpon = 234;
	var spacecraft = ["USS Enterprise", "Millenium Falcon", "Tie Fighter", "Spaceship Earth"];


	return {
		// Getter for array that can't get modified
		getPlanets: function() {
			return planets;
		},
		// getter/setter for planets that have been landed on
		getPlanetsLandedUpon: function() {
			return planetsLandedUpon;
		},
		setPlanetsLandedOnNumber: function(num) {
			planetsLandedUpon = num;
		},
		// Public property for date of last modified
		lastModified: Date.now(),
		//getter/setter for spacecraft currently exploring
		getSpacecraft: function () {
			return spacecraft;
		},
		addSpacecraft: function (ships) {
			spacecraft.push(ships);
		}
	};
})();