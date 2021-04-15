import {handleSubmit, requestKey} from './../handleSubmit'


test("Must return object", () => {
    expect(handleSubmit()).toEqual(null);
})