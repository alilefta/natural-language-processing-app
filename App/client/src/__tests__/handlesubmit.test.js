import {handleSubmit} from './../handleSubmit';
const mockFunctions = require('jest-fetch-mock');

describe("Handling submit", () => {
    it("On form submitting", ()=> {
        expect(handleSubmit()).toEqual(undefined);
    })
})