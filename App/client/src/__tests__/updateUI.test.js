import {updateUI} from './../updateUI';

describe("Update UI function", ()=> {
    it("Should return null when empty Object is given", ()=> {
        expect(updateUI({})).toBeNull();
    })
})