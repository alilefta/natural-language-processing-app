import {auxilaryFunc} from './../handleSubmit';

test("return undefiend from API, when {txt: 'hello world', lang: 'en'} is given", ()=> {
    return auxilaryFunc("Hello world", "en").then(data => expect(data).toBeUndefined());
})
