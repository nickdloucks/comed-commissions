<script>
    let repPaths =[];
    fetch('../../fs_db/commission_configs/sales-reps.json')
        .then(response =>{
            return response.json();
        }).then(data =>{
            console.log(data.sales_reps);
            repPaths = repPaths.map(data.keys); // NEED TO FIND A WAY TO ADD THE NAMES TO THE ARRAY ABOVE
        });
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
            console.log(data);
            console.log(currentRepParams.rep_name);
        });
    });
</script>

<main>
    <select id='rep-select'></select>
</main>