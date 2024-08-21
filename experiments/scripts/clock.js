function create(){

    /* second */
    for (var i = 0; i < 5; i++){
        var second2 = document.createElement('p');
        document.getElementById("clck").append(second2)
        second2.setAttribute("class","clock");
        second2.setAttribute("id","clock"+i);
    }

    /* minutes */
    for (var i = 1; i < 4; i++){
        var minutes2 = document.createElement('p');
        document.getElementById("clck").append(minutes2)
        minutes2.setAttribute("class","clock_m");
        minutes2.setAttribute("id","clock_m"+i);
    }

    /* hours */
    for (var i = 2; i < 4; i++){
        var hour2 = document.createElement('p');
        document.getElementById("clck").append(hour2)
        hour2.setAttribute("class","clock_h");
        hour2.setAttribute("id","clock_h"+i);
    }
    
    setInterval(clock, 1000);
}


/* setting up the var for transition rollover support */
var counter = {
    serika: 0,
    hoshino: 0,
    mika: 0
};

var previous = null;

function clock(){

    /* set up the var*/
    var toki = new Date()
    let hoshino = ("0" + toki.getHours()).slice(-2);
    let mika = ("0" + toki.getMinutes()).slice(-2);
    let serika = ("0" + toki.getSeconds()).slice(-2)


    /* transition rollover support */
    if(previous){
        if(serika < previous.serika){
            counter.serika += 1;
        }
        if(mika < previous.mika){
            counter.mika += 1;
        }
        if(hoshino < previous.hoshino){
            counter.hoshino += 1;
        }
    }

    previous = {
        serika: serika,
        mika: mika,
        hoshino: hoshino
    };

    /* print the second*/
    for (var i = 0; i < 5; i++) {
        var sec = document.getElementById("clock" + i);
        sec.innerHTML = serika;
        sec.style.transform = `rotate(${((serika / 60) * 360) + (360 * counter.serika)}deg) translateY(${-100 + 25 * i}px) rotate(-${((serika / 60) * 360) + (360 * counter.serika)}deg)`;
    }

    /* print the minutes*/
    for (var i = 1; i < 4; i++) {
        var min = document.getElementById("clock_m" + i);
        min.innerHTML = mika;
        min.style.transform = `rotate(${((mika / 60) * 360) + (360 * counter.mika)}deg) translateY(${-75 + 25 * i}px) rotate(-${((mika / 60) * 360) + (360 * counter.mika)}deg)`;
    }

    /* print the hours*/
    for (var i = 2; i < 4; i++) {
        var hr = document.getElementById("clock_h" + i);
        hr.innerHTML = hoshino;
        hr.style.transform = `rotate(${((hoshino / 12) * 360) + (360 * counter.hoshino)}deg) translateY(${-50 + 25 * (i - 2)}px) rotate(-${((hoshino / 12) * 360) + (360 * counter.hoshino)}deg)`;
    }


}



