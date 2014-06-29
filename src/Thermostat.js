// creating a class Thermostat
function Thermostat() {
	this.temperature = 20;
	this.powerSavingMode = true;
}

Thermostat.prototype.maximumTemperature = function() {
	if (this.powerSavingMode) return 25;
	return 32;
};

Thermostat.prototype.minimumTemperature = function() {
	return 10;
};

Thermostat.prototype.cooler = function() {
	if (this.temperature > this.minimumTemperature()) {
		this.temperature -= 1;
	}
};

Thermostat.prototype.warmer = function() {
	if (this.temperature < this.maximumTemperature()) {
	this.temperature += 1;
}
};

Thermostat.prototype.reset = function() {
	this.temperature = 20;
};

Thermostat.prototype.status = function() {
	if (this.temperature < 18) return 'good';
	if (this.temperature < 25) return 'average';
	if (this.temperature < 32) return 'bad';
};