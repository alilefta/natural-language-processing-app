document.querySelector('#form').addEventListener('submit', e=> {
    e.preventDefault();
    let txt = document.querySelector('#txt');
    let lang = document.querySelector('#lang');


    if(txt.value !== '' && lang.value !== ''){
        const requestKey = async()=> {
            await fetch("http://localhost:3355/auth").then(res=> {
                if(res.ok === true){
                    return res.json();
                }else{
                    throw new Error('There is an error')
                }
            }).then(data => {
                nplAPIUsage(data.key, txt.value, lang.value);
            }).catch(err=> console.log('There is error', err))
        } 
    
        requestKey();

    }


    

})


// const requestAuthKey = async () => {
//     const res = await fetch('http://localhost:3355/Authenticate')
//     try{
//         if(res.ok === true){
//             const data = await res.json();
//             return data.API_KEY;
//         }else{
//             throw new Error("There is an error", res.status)
//         }

//     }
//     catch(err){
//         console.log("There is Error", err)
//     }
// }

const nplAPIUsage = async (auth='', txt, lang) => {
    const formdata = new FormData();
    formdata.append("key", auth);
    formdata.append("txt", txt);
    formdata.append("lang", lang);  // 2-letter code, like en es fr ...

    const requestOptions = {
        method: 'POST',
        mode:'cors',
        credentials: 'same-origin',
        redirect: 'follow',
        headers: {
            "Content-Type": "multipart/form-data"
        },
        body: formdata
    };

    console.log(formdata.keys)
    const response = await fetch("https://api.meaningcloud.com/sentiment-2.1", requestOptions)
    try{
        if(response.ok === true){
            const data = await response.json();
            console.log(data)
            return data
        }
    }catch(error){
        console.log('There is an Error:', error)
    }
}


function updateUI(result){
    console.log(result)
}
