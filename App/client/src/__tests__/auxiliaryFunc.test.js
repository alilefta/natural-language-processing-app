import {auxilaryFunc} from './../handleSubmit';

describe("Linker function", ()=> {
    it("return undefiend from API, when {txt: 'hello world', lang: 'en'} is given", ()=> {
        return auxilaryFunc("Hello world", "en").then(data => expect(data).toBe(null));
    })
})
