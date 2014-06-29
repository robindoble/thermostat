describe('Our cool thermostat', function(){

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function(){
    expect(thermostat.temperature).toEqual(20);
  });

  it('starts on power saving mode', function(){
    expect(thermostat.powerSavingMode).toEqual(true);
  })

  describe('maximum temperature', function(){
    
    it('is 25 if PSM is on', function(){
      expect(thermostat.maximumTemperature()).toEqual(25);
    });

    it('is 32 if PSM is off', function(){
      thermostat.powerSavingMode = false;
      expect(thermostat.maximumTemperature()).toEqual(32);
    });    

  });

  describe('minimum temperature', function(){
    
    it('is 10 degrees', function(){
      expect(thermostat.minimumTemperature()).toEqual(10);
    });

  });

  describe('cooling', function(){

    it('reduces the temp if > 10', function(){
      thermostat.temperature = 15;
      thermostat.cooler();
      expect(thermostat.temperature).toEqual(14);
    });

    it('does not reduce the temp if <= 10', function(){
      thermostat.temperature = 10;
      thermostat.cooler();
      expect(thermostat.temperature).toEqual(10);
    });

  });

  describe('warming', function(){

    describe('with PSM on', function(){
      
      it('increases the temp if < 25', function(){
        thermostat.temperature = 24;
        thermostat.warmer();
        expect(thermostat.temperature).toEqual(25);
      });

      it('does not increase the temp if <= 25', function(){
        thermostat.temperature = 25;
        thermostat.warmer();
        expect(thermostat.temperature).toEqual(25);
      });

    });

    describe('with PSM off', function(){

      beforeEach(function(){
        thermostat.powerSavingMode = false;
      });
      
      it('increases the temp if < 32', function(){
        thermostat.temperature = 31;
        thermostat.warmer();
        expect(thermostat.temperature).toEqual(32);
      });

      it('does not increase the temp if <= 32', function(){
        thermostat.temperature = 32;
        thermostat.warmer();
        expect(thermostat.temperature).toEqual(32);
      });

    });

  });

  describe('reset button', function(){
    it('resets to 20', function(){
      thermostat.temperature = 32;
      thermostat.reset();
      expect(thermostat.temperature).toEqual(20);
    })
  })

  describe('status', function(){
    
    it('is good if temp < 18', function(){
      thermostat.temperature = 15;
      expect(thermostat.status()).toEqual('good');
    });
  
    it('is average if < 25', function(){
      thermostat.temperature = 20;
      expect(thermostat.status()).toEqual('average');
    });

    it('is bad if < 32', function(){
      thermostat.temperature = 28;
      expect(thermostat.status()).toEqual('bad');
    });


  });


});































