describe("Test my totalPhoneBill function",function(){

    it("It should the total bill for the data provided 'R7.45'",function(){
        assert.deepEqual('R7.45',totalPhoneBill('call, sms, call, sms, sms'))
    })
    it("It should the total bill for the data provided 'R3.40'",function(){
        assert.deepEqual('R3.40',totalPhoneBill('call, sms'))
    })
    it("It should the total bill for the data provided 'R1.30'",function(){
        assert.deepEqual('R1.30',totalPhoneBill('sms, sms'))
    })
})