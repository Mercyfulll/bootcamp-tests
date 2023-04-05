describe("Test fromWhere function",function(){

    it("It should return 'Bellville' the town the car is from",function(){
        assert.deepEqual('Bellville',fromWhere('CY 567489'))
    })
    it("It should return 'Paarl' the town the car is from",function(){
        assert.deepEqual('Paarl',fromWhere('CJ 343502'))
    })
    it("It should return 'Cape Town' the town the car is from",function(){
        assert.deepEqual('Cape Town',fromWhere('CA 987504'))
    })
    it("It should return 'Some other place!' the town the car is from",function(){
        assert.deepEqual('Some other place!',fromWhere('ZN 568593'))
    })
})