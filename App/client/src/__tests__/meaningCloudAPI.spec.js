import {nplAPIUsage} from './../meaningCloudAPI'
const fetch = require('node-fetch');


describe("Natural Processing Language function", () => {
  it("Test return without auth", async ()=> {
    const expected = {"status": {"code": "100", "credits": "0", "msg": "Operation denied"}};
    return nplAPIUsage("auth", "test", "en").then(data => expect(data).toMatchObject(expected));
  });
  it('check when successful call to API', async () => {
    const auth = await fetch('http://localhost:3355/auth');
    try{
      const authObj = await auth.json();

      return await nplAPIUsage(authObj.key, "test", "en").then(data => expect(data).toHaveProperty('model', 'general_en'));

    }
    catch(e){
       expect(e).toMatch('error');
    }
  });
})
