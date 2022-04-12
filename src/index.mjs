// import fsPromises from 'fs';
const repSelect = document.getElementById('rep-select');


repSelect.addEventListener('input',()=>{
    let repName = repSelect.value;
    let configFile = new String(repName).concat('.json');
    let configFilePath = '../fs_db/commission_configs/'.concat(configFile);
    console.log(configFilePath);

    fetch(configFilePath)
        .then(response =>{
            return response.json();
        })
        .then(data =>{
            console.log(data.rep_name); // LOGS DATA FROM JSON FILE!!!
        });

})

