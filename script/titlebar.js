
webelement_path= "/elements/"

    const homepage_main = homepagebutton();
    const donate_main = donatebutton();
    const info_main = infobutton();
    const manga_main = mangabutton();
    const winny_main = winnybutton();
    document.getElementById("headerbarjs").appendChild(homepage_main);
    document.getElementById("headerbarjs").append(donate_main);
    document.getElementById("headerbarjs").append(info_main);
    document.getElementById("headerbarjs").append(manga_main);
    document.getElementById("headerbarjs").append(winny_main);

function homepagebutton() {
    const homepage_main = document.createElement("button");
    homepage_main.setAttribute("title", "Homepage");
    const homepage_link = document.createElement("a");
    homepage_link.setAttribute("href", "/index.html");
    const homepage_img = document.createElement("img");
    homepage_img.setAttribute("src", webelement_path + "asukafly.png");
    homepage_img.setAttribute("class", "web_logo_header");
    homepage_img.setAttribute("id","asuka_homebutton");
    homepage_link.appendChild(homepage_img);
    homepage_main.appendChild(homepage_link);
    return homepage_main;
}

function donatebutton() {
    const donate_main = document.createElement("button");
    const homepage_link = document.createElement("a");
    homepage_link.setAttribute("href", "/donate.html");
    const homepage_text = document.createElement("sussy");
    homepage_text.innerHTML = "Donate";
    homepage_link.appendChild(homepage_text);
    donate_main.appendChild(homepage_link);
    return donate_main;
}

function infobutton() {
    const info_main = document.createElement("button");
    const homepage_link = document.createElement("a");
    homepage_link.setAttribute("href", "/info.html");
    const homepage_text = document.createElement("sussybaka");
    homepage_text.innerHTML = "Links";
    homepage_link.appendChild(homepage_text);
    info_main.appendChild(homepage_link);
    return info_main;
}

function winnybutton() {
    const winny_main = document.createElement("button");
    const homepage_link = document.createElement("a");
    homepage_link.setAttribute("href", "/winnyace.html");
    const homepage_text = document.createElement("sussybaka");
    homepage_text.innerHTML = "Winnyace";
    homepage_link.appendChild(homepage_text);
    winny_main.appendChild(homepage_link);
    return winny_main;
}

function mangabutton() {
    const manga_main = document.createElement("button");
    const homepage_link = document.createElement("a");
    homepage_link.setAttribute("href", "/manga/test/test.html");
    const homepage_text = document.createElement("sussybaka");
    homepage_text.innerHTML = "Manga";
    homepage_link.appendChild(homepage_text);
    manga_main.appendChild(homepage_link);
    return manga_main;
}




