describe('Test isFromBellville function' , function(){
    it("It should return 'true' when registration starts with 'CY'" , function(){

        assert.deepEqual(true, isFromBellville('CY 123'), 'true');
    });

    it("It should return 'false' when registration does not start with 'CY'" , function(){

        assert.deepEqual(false, isFromBellville('CJ 123'), 'false');
    });

    it("it should return 'true' when registration starts with 'CY'", function(){

        assert.deepEqual(true, isFromBellville('CY 765'), 'true')
    })

});