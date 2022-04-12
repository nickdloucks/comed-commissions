const repSelect = document.getElementById('rep-select');


repSelect.addEventListener('input',()=>{
    let repName = repSelect.value;
    let configFilePath = new String(repName).concat('.json');
    console.log(configFilePath);
})

