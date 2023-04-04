describe('Test my yearsAgo function',function(){

    it('It should return how many years ago that year is from the current year.',function(){
        assert.deepEqual(47,yearsAgo(1976))
    })
    it('It should return how many years ago that year is from the current year.',function(){
        assert.deepEqual(23,yearsAgo(2000))
    })
    it('It should return how many years ago that year is from the current year.',function(){
        assert.deepEqual(29,yearsAgo(1994))
    })

})