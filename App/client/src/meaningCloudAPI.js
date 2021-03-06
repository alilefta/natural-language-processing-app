const fetch = require("node-fetch");
// Request data from API
const nplAPIUsage = async (auth, txt, lang) => {
    // https://api.meaningcloud.com/sentiment-2.1&key=${auth}&txt=${txt}&lang=${lang}

    const response = await fetch(`https://api.meaningcloud.com/sentiment-2.1&key=${auth}&txt=${txt}&lang=${lang}`).then(res => {
        if(res.ok === true){
            return res.json();
        }else{
            throw new Error("There is an error");
        }
    }).catch(error=> {
        return new Error("There is an error" + error)
    });
    return response;
}


export {nplAPIUsage}