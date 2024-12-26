function statusIcon_create(){
    var piss_counter = document.createElement('div')
    var piss_status = document.createElement("div")

    piss_status.setAttribute("data-source","lightstreamer")
    piss_status.setAttribute("data-grid","grid")
    piss_status.setAttribute("data-item","NODE3000005")
    piss_status.setAttribute("data-field","Value")
    piss_counter.setAttribute("id","piss_chip")
    piss_status.innerHTML = "..."

    const div_titlebar = document.getElementById("home")
    div_titlebar.append(piss_counter)
    piss_counter.append(piss_status)
    piss_status.insertAdjacentHTML("beforebegin","🚽")
}



require(["LightstreamerClient", "Subscription", "StaticGrid"], 
    function dataFetch(LightstreamerClient, Subscription, StaticGrid) {
        statusIcon_create()
        var client = new LightstreamerClient("http://push.lightstreamer.com","ISSLIVE");
        client.connect();
    
        var grid = new StaticGrid("grid", true);

        var subscription = new Subscription("MERGE","NODE3000005",["Value"]);
        subscription.addListener(grid);
        
        client.subscribe(subscription);
        
    })



