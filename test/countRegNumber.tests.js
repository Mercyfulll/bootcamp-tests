describe('Test countRegNumber function' , function(){
    it("It should return '3' when it finds 3 strings seperated by comma ','" , function(){

        assert.deepEqual( 3 , countRegNumber('CA 182736,CY 523519,CJ 812328'), '3');
    });

    it("It should return '1' when it finds a registration number" , function(){

        assert.deepEqual( 1 , countRegNumber('CA 182736'), '1');
    });

    it("It should return '6' when it finds 6 string seperated by a comma ',' ",function(){

        assert.deepEqual(6, countRegNumber('CA 239856,CY 100745,CJ 812328,CA 365432,CA 736009,CY 555667'));
    })

});