import {updateUI} from './../updateUI';

test("Should return null when empty Object is given", ()=> {
    expect(updateUI({})).toBeNull();
})