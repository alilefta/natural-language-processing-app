const nplAPIUsage = async (auth, txt, lang) => {
    // https://api.meaningcloud.com/sentiment-2.1&key=${auth}&txt=${txt}&lang=${lang}

    const response = await fetch(`https://api.meaningcloud.com/sentiment-2.1&key=${auth}&txt=${txt}&lang=${lang}`)
    try{
        if(response.ok === true){
            const data = await response.json();
            console.log(data)
            return data
        }else{
            console.log('there is error')
        }
    }catch(error){
        console.log('There is an Error:', error)
    }
}

export {nplAPIUsage}