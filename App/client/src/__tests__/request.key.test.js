import {requestKey} from './../handleSubmit';
const fetch = require('node-fetch');

describe("Requesting key for API Authentication", () => {
    it("test connection to Server", async ()=> {
        expect.assertions(0);
        try {
            const res = fetch("http://localhost:3355")
            res.then(response => expect(response.ok).toBe(true))
        }
        catch(err){
            expect(err).toMatch('error');
        }
    });
    it("test getting a key", ()=> {
        return requestKey().then(data => expect(data).toHaveProperty('key'));
    })
});