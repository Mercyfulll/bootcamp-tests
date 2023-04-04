describe("Test my countAllPaarl function",function(){

    it("It should return the number of registration numbers in the string for Paarl '3'",function(){
        assert.deepEqual(3,countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'))
    })
    it("It should return the number of registration numbers in the string for Paarl '2'",function(){
        assert.deepEqual(2,countAllPaarl('CJ 345 123, CK 345, CJ 123'))
    })
    it("It should return the number of registration numbers in the string for Paarl '5'",function(){
        assert.deepEqual(5,countAllPaarl('CJ 345 123, CK 345, CJ 123,CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'))
    })
    
})