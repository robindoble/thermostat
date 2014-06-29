// creating a class Thermostat
function Thermostat() {
	this.temperature = 20;
	this.powerSavingMode = true;
}

Thermostat.prototype.maximumTemperature = function() {
	if (this.powerSavingMode) return 25;
	return 32;
};
