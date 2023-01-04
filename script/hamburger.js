
webelement_path= "/elements/"

const hamburger_button = hamburger();
const overlay_ham = newFunction();
const ham_label = newFunction_1();
document.getElementById("hamburgerjs").appendChild(hamburger_button);
document.getElementById("hamburgerjs").appendChild(ham_label);
document.getElementById("hamburgerjs").appendChild(overlay_ham);

function hamburger(){
    const hamburger_button = document.createElement("input");
    hamburger_button.setAttribute("type", "checkbox");
    hamburger_button.setAttribute("id", "hamburger-input");
    hamburger_button.setAttribute("class","burger-shower");
    return hamburger_button;
}

function newFunction_1() {
    const hamburger_img = document.createElement("img");
    hamburger_img.setAttribute("src", webelement_path + "asukafly.png");
    hamburger_img.setAttribute("class", "web_logo_header");
    const ham_label = document.createElement("label");
    ham_label.setAttribute("id", "hammenu");
    ham_label.setAttribute("for", "hamburger-input");
    ham_label.setAttribute("class", "web_logo_header");
    const ham_list = document.createElement("nav");
    ham_list.setAttribute("id", "sidemenu");

    const ham_listcont = document.createElement("div");
    const ham_listcont_donate_link = document.createElement('a');
    ham_listcont_donate_link.setAttribute("href", "/donate.html");
    const ham_listcont_donate_img = document.createElement('img');
    ham_listcont_donate_img.setAttribute("src","/elements/heart.svg");
    ham_listcont_donate_link.appendChild(ham_listcont_donate_img);

    const ham_listcont2 = document.createElement("div");
    const ham_listcont_home_link = document.createElement('a');
    ham_listcont_home_link.setAttribute("href", "/index.html");
    const ham_listcont_home_img = document.createElement('img');
    ham_listcont_home_img.setAttribute("src","/elements/home.svg");
    ham_listcont_home_link.appendChild(ham_listcont_home_img);

    const ham_listcont4 = document.createElement("div");
    const ham_listcont_manga_link = document.createElement('a');
    ham_listcont_manga_link.setAttribute("href", "/manga/test/test.html");
    const ham_listcont_manga_img = document.createElement('img');
    ham_listcont_manga_img.setAttribute("src","/elements/book.svg");
    ham_listcont_manga_link.appendChild(ham_listcont_manga_img);
    
    const ham_listcont3 = document.createElement("div");
    const ham_listcont_social_link = document.createElement('a');
    ham_listcont_social_link.setAttribute("href", "/info.html");
    const ham_listcont_social_img = document.createElement('img');
    ham_listcont_social_img.setAttribute("src","/elements/social.svg");
    ham_listcont_social_link.appendChild(ham_listcont_social_img);

    const ham_listcont5 = document.createElement("div");
    const ham_listcont_winny_link = document.createElement('a');
    ham_listcont_winny_link.setAttribute("href", "/winnyace.html");
    const ham_listcont_winny_img = document.createElement('img');
    ham_listcont_winny_img.setAttribute("src","/elements/question_mark.svg");
    ham_listcont_winny_link.appendChild(ham_listcont_winny_img);

    ham_listcont2.appendChild(ham_listcont_home_link);
    ham_listcont.appendChild(ham_listcont_donate_link);
    ham_listcont3.appendChild(ham_listcont_social_link);
    ham_listcont4.appendChild(ham_listcont_manga_link);
    ham_listcont5.appendChild(ham_listcont_winny_link);
    ham_list.appendChild(ham_listcont2);
    ham_list.appendChild(ham_listcont);
    ham_list.appendChild(ham_listcont3);
    ham_list.appendChild(ham_listcont4);
    ham_list.appendChild(ham_listcont5);
    ham_label.appendChild(hamburger_img);
    ham_label.appendChild(ham_list);
    return ham_label;
}

function newFunction() {
    const overlay_ham = document.createElement("div");
    overlay_ham.setAttribute("class", "overlay");
    return overlay_ham;
}

