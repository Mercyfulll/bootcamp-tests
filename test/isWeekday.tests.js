describe('Test my isWeekday function',function(){

    it("It should return 'false' when the day starts with 'S'",function(){

        assert.deepEqual(false,isWeekday('Saturday'))
    })
    it("It should return 'false' when the day starts with 'S'",function(){

        assert.deepEqual(false,isWeekday('Sunday'))
    })
    it("It should return 'true' when the day does not start with 'S'",function(){
        
        assert.deepEqual(true,isWeekday('Monday'))
    })
    it("It should return 'true' when the day does not start with 'S'",function(){
        
        assert.deepEqual(true,isWeekday('Tuesday'))
    })
    it("It should return 'true' when the day does not start with 'S'",function(){
        
        assert.deepEqual(true,isWeekday('Wednesday'))
    })
    it("It should return 'true' when the day does not start with 'S'",function(){
        
        assert.deepEqual(true,isWeekday('Thursday'))
    })
    it("It should return 'true' when the day does not start with 'S'",function(){
        
        assert.deepEqual(true,isWeekday('Friday'))
    })
})