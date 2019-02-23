describe("Peep model", function() {
  beforeEach(function() {

  })
  it('initialises peeps', function() {
    var peep = new Peep();
    expect(peep instanceof Peep).toBe(true)
  })

  it('peep parameters drawn from the API (id, body, created_at, updated_at, user(id, handle)', function() {
    var peep = new Peep(
      id = 111, 
      body = 'mammal facts', 
      created_at = "2019-02-19T19:41:05.709Z",
      updated_at = "2019-02-19T19:41:05.709Z",
      user_id = 3,
      user_handle = "Big Steve" 
      );

      expect(peep.id).toEqual(111)
      expect(peep.body).toContain('facts')
      expect(peep.created_at).toBe('2019-02-19T19:41:05.709Z')
      expect(peep.updated_at).toBe('2019-02-19T19:41:05.709Z')
      expect(peep.user_id).toEqual(3)
      expect(peep.user_handle).toBe('Big Steve')
  })
});