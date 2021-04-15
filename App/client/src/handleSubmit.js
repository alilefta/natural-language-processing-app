import {nplAPIUsage} from './meaningCloudAPI'
const fetch = require("node-fetch");

const requestKey = async()=> {
    const response = await fetch("http://localhost:3355/auth").then(res=> {
        if(res.ok === true){
            return res.json();
        }else{
            throw new Error('There is an error')
        }
    }).then(data => {
        return data;
    }).catch(err=> console.log('There is error', err));
    return response;
} 


const auxilaryFunc = (txt, lang) => {
    return requestKey().then(data => nplAPIUsage(data.key, txt, lang));
}

const handleSubmit = () => {
    const form = document.querySelector('#form');
    let txt = document.querySelector('#txt');
    let lang = document.querySelector('#lang');

    if(form){
        form.addEventListener('submit', e=> {
            e.preventDefault();
            
            if(txt.value !== '' && lang.value !== ''){
                return auxilaryFunc(txt.value, lang.value);
            }
        })
    }
    return null;

}



export {handleSubmit, auxilaryFunc}