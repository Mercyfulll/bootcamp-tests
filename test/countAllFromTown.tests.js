describe("Test my countAllFromTown function", function(){

    it("It should return the number of registration numbers in the string that is for that town '3'",function(){
        assert.deepEqual(3,countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'))
    })
    it("It should return the number of registration numbers in the string that is for that town '1'",function(){
        assert.deepEqual(1,countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341','CF'))
    })     
})