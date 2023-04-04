describe('Test my regCheck function', function(){

    it ("It should return 'true' when the registration is for and ends with 'GP'",function(){
        assert.deepEqual(true, regCheck('DC 55 YU GP', 'GP')) 
    })
    it ("It should return 'false' when the registration is not for and ends with 'GP'",function(){
        assert.deepEqual(false, regCheck('DC 55 YU GP', 'EC')) 
    })

    it ("It should return 'true' when the registration is for and ends with 'L'",function(){
        assert.deepEqual(true, regCheck('5566 L', 'L')) 
    })
    it ("It should return 'false' when the registration is not for and ends with 'L'",function(){
        assert.deepEqual(false, regCheck('5566 L', 'M')) 
    })

    it ("It should return 'true' when the registration is for and ends with 'EC'",function(){
        assert.deepEqual(true, regCheck('ERT 123 EC', 'EC')) 
    })
    it ("It should return 'false' when the registration is not for and ends with 'EC'",function(){
        assert.deepEqual(false, regCheck('ERT 123 EC', 'GP')) 
    })
    
    it ("It should return 'true' when the registration is for and ends with 'MP'",function(){
        assert.deepEqual(true, regCheck('FGT 123 MP', 'MP')) 
    })
    it ("It should return 'false' when the registration is not for and ends with 'MP'",function(){
        assert.deepEqual(false, regCheck('FGT 123 MM', 'MP')) 
    })

})