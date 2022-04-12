// import * as fsPromises from 'fs/promises';

let currentRepParams = {}; // variable for the commissions parameters of the currently selected rep

const REP_SELECT = document.getElementById('rep-select');
REP_SELECT.addEventListener('input',()=>{
    let repName = REP_SELECT.value;
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
            // console.log(currentRepParams.__filename); // doesn't seem to work, just prints undefined
        });
});

const OTD_UPLOAD = document.getElementById('otd-upload');
OTD_UPLOAD.addEventListener('input', async ()=>{
    let otdTracings = OTD_UPLOAD.files;
    // console.log(otdTracings);
    // try{
    //     const fileData = await fsPromises.readFile(otdTracings, 'utf-8');
        
    //     const NEW_PATH = '../fs_db/tracings/';
        
    //     await fsPromises.writeFile()
    // }catch(err){
    //     console.log(err);
    //     console.log('Error reading OTD tracings file.');
    // }
    
});

const DIR_UPLOAD = document.getElementById('dir-upload');
DIR_UPLOAD.addEventListener('input', ()=>{
    let DIRTracings = DIR_UPLOAD.files;
});