const handleSubmit = () => {
    const form = document.querySelector('#form');
    form.addEventListener('submit', e=> {
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
                    return Client.nplAPIUsage(data.key, txt.value, lang.value)
                }).catch(err=> console.log('There is error', err))
            } 
           requestKey();
        }
    })

}

export {handleSubmit}