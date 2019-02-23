describe("Peep model", function() {
  beforeEach(function() {

  })
  it('initialises peeps', function() {
    var peep = new Peep();
    expect(peep instanceof Peep).toBe(true)
  })
})