var ls_item = "NODE3000005"
var ls_field = ["Value"]

function statusIcon_create(statusValue){
    let piss_counter = document.createElement('div')
    let piss_status = document.createElement("div")

    piss_status.setAttribute("data-source","lightstreamer")
    piss_status.setAttribute("data-grid","grid")
    piss_status.setAttribute("data-item",ls_item)
    piss_status.setAttribute("data-field",ls_field)
    piss_counter.setAttribute("id","piss_chip")

    if (statusValue == undefined){
        piss_status.innerHTML = "..."
    }
    else if (statusValue != undefined){
        piss_status.innerHTML = statusValue
    }

    const div_titlebar = document.getElementById("home")
    div_titlebar.append(piss_counter)
    piss_counter.append(piss_status)

    if (statusValue == undefined){
        piss_counter.style.setProperty("--bg-progress", "rgba(150,150,150,0.75)", "important")
        piss_counter.style.setProperty("--bg-width", `0%`, "important")
    }
    else if (statusValue < 50){
        piss_counter.style.setProperty("--bg-progress", "rgba(50,205,50,0.75)", "important")
        piss_counter.style.setProperty("--bg-width", `${statusValue}%`, "important")
       
    }
    else if (statusValue >= 50, statusValue < 75){
        piss_counter.style.setProperty("--bg-progress", "rgba(255,240,0,0.75)", "important")
        piss_counter.style.setProperty("--bg-width", `${statusValue}%`, "important")
    }
    else if (statusValue >= 75){
        piss_counter.style.setProperty("--bg-progress", "rgba(255,76,48,0.75)", "important")
        piss_counter.style.setProperty("color", "black", "important")
        piss_counter.style.setProperty("--bg-width", `${statusValue}%`, "important")
    }


    piss_status.insertAdjacentHTML("beforebegin","🧑‍🚀🚽")
}




require(["LightstreamerClient", "Subscription", "StaticGrid"], 
    function dataFetch(LightstreamerClient, Subscription, StaticGrid) {
        statusIcon_create()
        var client = new LightstreamerClient("https://push.lightstreamer.com","ISSLIVE");
        client.connect();
    
        var grid = new StaticGrid("grid", true);

        var progressbar = function progress(){
            let statusValue = grid.values.matrix[`${ls_item}`][`${ls_field}`]
            statusIcon_create(statusValue)
        }

        var subscription = new Subscription("MERGE",ls_item,ls_field);
        
        subscription.addListener(grid);
        subscription.addListener({onItemUpdate: progressbar});

        client.subscribe(subscription);
        
    })



