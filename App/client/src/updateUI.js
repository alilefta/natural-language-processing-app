import {nplAPIUsage} from './meaningCloudAPI';

const updateUI = async (data) => {
    const statusAgreement = document.querySelector('#text-analyze-agreement');
    const statusConfidence = document.querySelector('#text-analyze-confidence');
    const statusModel = document.querySelector('#text-analyze-model');

    if(data.hasOwnProperty('status')){
        statusAgreement.innerText = data.agreement;
        statusConfidence.innerText = data.confidence;
        statusModel.innerText = data.model;
    }

}


export {updateUI}