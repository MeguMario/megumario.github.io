//setting up some variables
webelement_path= "/elements/"
var t_object = ["section","section"]
var sec0_attr = ["home","subpages"]

var subpages = ["button","button","button","button"]
var subpages_name = ["Donate","Links","Manga","Winnyace"]
var subpages_icon = ["favorite","person","menu_book","question_mark"]
var subpages_dest = ["'/donate.html'","'/info.html'","'/manga/main.html'","'/winnyace.html'"]

titlebar(); //init titlebar

function titlebar(){

    // setting up the title bar
    const div_titlebar = document.createElement("div");
    document.body.prepend(div_titlebar)
    div_titlebar.setAttribute("class","titlebar")
    
   // setting up the mobile bar
   const div_mobilebar = document.createElement('div')
   document.body.prepend(div_mobilebar)
   div_mobilebar.setAttribute("class","mobilebar")

    // creating title bar object
    for (var i = 0; i < t_object.length; i++){
        var t_obj = document.createElement(t_object[i]);
        div_titlebar.append(t_obj);;
        t_obj.setAttribute("id",sec0_attr[i])
    }

    // creating mobile bar object (copy of above code because merging them doesn't work)
    for (var i = 0; i < t_object.length; i++){
        var t_obj = document.createElement(t_object[i]);
        div_mobilebar.append(t_obj);;
        t_obj.setAttribute("id",sec0_attr[i]+'_mobile')
    }

   // home button
   var homebotan_func = document.createElement("a")
   Object.assign(homebotan_func, {
        href: '/index.html',
        id: 'homebotan_link'
   })
   document.getElementById("home").append(homebotan_func)
   var homebotan = document.createElement("img")
   Object.assign(homebotan, {
        src: webelement_path + "asukafly.png",
        id: 'asuka_homebutton',
        href: '/index.html'
   })
   document.getElementById('homebotan_link').append(homebotan)

   // home button for mobilebar
   var homebotan_func = document.createElement("a")
   Object.assign(homebotan_func, {
        id: 'homebotan_link',
        href: '/index.html'
   })
   document.getElementById("home_mobile").append(homebotan_func)
   var homebotan = document.createElement("img")
   Object.assign(homebotan, {
        src: webelement_path + "asukafly.png",
        id: 'asuka_homebutton',
   })
   document.getElementById('homebotan_link').append(homebotan)


   // subpages spawn 
   for (var i = 0; i < subpages.length ; i++){
        var sp_obj =  document.createElement(subpages[i])
        Object.assign(sp_obj, {
            innerHTML: subpages_name[i],
            id: 'button_sp',
            type: 'button'
        })
        document.getElementById("subpages").append(sp_obj)
        sp_obj.setAttribute('onclick', 'location.href=' + subpages_dest[i])
        if (subpages_name[i] == "Donate"){
            sp_obj.setAttribute('class', 'donatebotan')
        }
   }

    // subpages spawn for mobilebar
    for (var i = 0; i < subpages.length ; i++){
        var sp_obj =  document.createElement(subpages[i])
        Object.assign(sp_obj, {
            innerHTML: subpages_name[i],
            id: subpages_name[i] + '_mobilebar_button',
            type: 'button'
        })
        document.getElementById("subpages_mobile").append(sp_obj)

        var sp_obj_img = document.createElement('span')
        Object.assign(sp_obj_img, {
            id: subpages_name[i] + '_mobile',
            innerHTML: subpages_icon[i]
        })
        sp_obj_img.setAttribute('class','material-icons-round')
        document.getElementById(subpages_name[i] + '_mobilebar_button').append(sp_obj_img)

        sp_obj.setAttribute('onclick', 'location.href=' + subpages_dest[i])
    }
}