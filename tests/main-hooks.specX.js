describe('Main', function() {
  var arr
  before(function() {
    
  })
  
  after(function() {
    
  })

  beforeEach(function() {
    arr = [1, 2, 3]
  })

  afterEach(function()  {
    
  })

  it('should have a size of 4 when push another value to the array', function() {
    console.log('Test 1 before', arr)
    arr.push(4)
    console.log(arr.length)
    console.log('Test 1 after', arr)
  })

  it('should have a size of 2 when pop a value from the array', function() {
    console.log('Test 2 before', arr)
    arr.pop()
    console.log(arr.length)
    console.log('Test 2 after', arr)
  })

  it('should remove a value 3 when use pop in the array', function() {
    console.log('Test 3 before', arr)
    console.log(arr.pop() === 3)
    console.log('Test 3 after', arr)
  })
})