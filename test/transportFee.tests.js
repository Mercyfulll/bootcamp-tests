describe("Test my transportFee function",function(){

    it("It should return the right price based on the shift worked 'R20'",function(){
        assert.deepEqual('R20', transportFee('morning'))
    })
    it("It should return the right price based on the shift worked 'R10'",function(){
        assert.deepEqual('R10', transportFee('afternoon'))
    })
    it("It should return the right price based on the shift worked 'free'",function(){
        assert.deepEqual('free', transportFee('nightshift'))
    })
})