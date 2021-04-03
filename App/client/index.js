import './styles/style.scss'
import {nplAPIUsage} from './src/meaningCloudAPI'
import {handleSubmit} from './src/handleSubmit'


function updateUI(result){
    console.log(result)
}

export {
    handleSubmit,
    nplAPIUsage
}