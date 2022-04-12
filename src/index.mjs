// import fsPromises from 'fs';

let currentRepParams = {}; // variable for the commissions parameters of the currently selected rep

const repSelect = document.getElementById('rep-select');
repSelect.addEventListener('input',()=>{
    let repName = repSelect.value;
    let configFile = new String(repName).concat('.json');
    let configFilePath = '../fs_db/commission_configs/'.concat(configFile);
    // console.log(configFilePath);

    fetch(configFilePath)
        .then(response =>{
            return response.json();
        })
        .then(data =>{
            currentRepParams = data;
            console.log(currentRepParams.rep_name);
        });
})

