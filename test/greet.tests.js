describe('Test my Greet function' , function(){
    it("It should return 'Hello, Bob' when called with 'Bob'" , function(){

        assert.deepEqual('Hello, Bob', greet('Bob'), 'this should not be true');
    });

    it("It should return 'Hello, Sam' when called with 'Sam'" , function(){

        assert.deepEqual('Hello, Sam', greet('Sam'), 'this should not be true');
    });

});