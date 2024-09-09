function updateContentPosition(topValue, footerMargin) {
    document.getElementById("content").style.top = topValue;
    document.getElementById("footer").style.marginTop = footerMargin;
}

function updateNavBar(tAreaEvents, dAreaDisplay) {
    let t_area = document.getElementById("titlebar");
    let d_area = document.getElementById("header");

    if (tAreaEvents) {
        t_area.setAttribute("onmouseenter", "navbar_reveal()");
        t_area.setAttribute("onmouseleave", "navbar_hide()");
        d_area.removeAttribute("onmouseenter");
        d_area.removeAttribute("onmouseleave");
    } else {
        t_area.removeAttribute("onmouseenter");
        t_area.removeAttribute("onmouseleave");
        d_area.setAttribute("onmouseenter", "navbar_reveal()");
        d_area.setAttribute("onmouseleave", "navbar_hide()");
    }

    d_area.style.display = dAreaDisplay;
}

function navbar_reveal() {
    updateContentPosition('100px', '110vh');
    updateNavBar(true, 'none');
}

function navbar_hide() {
    updateContentPosition('0px', '95vh');
    updateNavBar(false, 'block');
}

function highlight_page() {
    let url = document.URL;
    let contentBg = document.getElementById("content");
    let headerBg = document.getElementById("headerBg");

    if (url.includes("main.html")) {
        setHighlight("h_home", 'var(--bg-color)', "assets/img/main/main_bg.jpg");
    } else if (url.includes("story.html")) {
        setHighlight("h_story", 'var(--accent-color-1)', "assets/img/story/story_1p.png", "var(--accent-color-4)");
    } else if (url.includes("staff.html")) {
        setHighlight("h_staff", 'var(--accent-color-1)', "assets/img/story/story_bg.jpg", "var(--accent-color-4)");
    } else if (url.includes("character.html")) {
        setHighlight("h_chara", 'var(--accent-color-1)', "assets/img/chara/character_bg.jpg", "var(--accent-color-2)");
    }
}

function setHighlight(elementId, bgColor, bgImage = '', headerBgColor = '') {
    let highlight = document.getElementById(elementId);
    highlight.style.backgroundColor = 'var(--accent-color-1)';
    highlight.style.color = 'var(--accent-color-2)';

    if (bgColor && bgImage) {
        let contentBg = document.getElementById("content");
        contentBg.style.backgroundColor = bgColor;
        contentBg.style.backgroundImage = `url('${bgImage}')`;
    }

    if (headerBgColor) {
        let headerBg = document.getElementById("headerBg");
        headerBg.style.backgroundColor = headerBgColor;
    }
}

function shareTwitter() {
    let txt = "プロジェクトKV』始動！ 「あなたはそこで自分の刀を見つけるはず。";
    let encodeTxt = encodeURI(txt);
    window.open(`http://twitter.com/share?url=${encodeURI(location.href)}&text=${encodeTxt}`, "X", "width=500, height=600");
}

function toggleCategory(activeId, inactiveId, bgImage, headlines, textBlockContent) {
    let activeButton = document.getElementById(activeId);
    activeButton.setAttribute("class", "active nav_button");
    for(var i = 0;  i < inactiveId.length; i++){
        let inactiveButton = document.getElementById(inactiveId[i]);
        inactiveButton.setAttribute("class", "inactive nav_button");
    }

    setTimeout(function(){
        let contentBg = document.getElementById("content");
        contentBg.style.backgroundImage = `url('${bgImage}')`;
    }, 150);

    setTextContent(headlines, textBlockContent);
}

function toggleCategory_chara(activeId, inactiveId, bgImage, name, desc) {
    let activeButton = document.getElementById(activeId);
    activeButton.setAttribute("class", "active sel_button");
    for(var i = 0;  i < inactiveId.length; i++){
        let inactiveButton = document.getElementById(inactiveId[i]);
        inactiveButton.setAttribute("class", "inactive sel_button");
    }
    setTimeout(function(){
        let contentBg = document.getElementById("chara_portrait");
        contentBg.style.backgroundImage = `url('${bgImage}')`;
    }, 150);

    setTextContent_chara(name, desc);
}

function setTextContent(headlines, textBlockContent) {
    document.getElementById("info").style.opacity = 0;
    setTimeout(function(){
        document.getElementById("headline1").innerHTML = headlines[0];
        document.getElementById("headline2").innerHTML = headlines[1];
        document.getElementById("textblock").innerHTML = textBlockContent;
        document.getElementById("headline3").innerHTML = headlines[2];
        document.getElementById("info").style.opacity = 100;
    }, 150);
}

function setTextContent_chara(name, desc) {
    document.getElementById("chara_info").style.opacity = 0;
    setTimeout(function(){
        document.getElementById("name").innerHTML = name;
        document.getElementById("desc").innerHTML = desc;
        document.getElementById("chara_info").style.opacity = 100;
    }, 150);
}

function s_category() {
    toggleCategory("s_overview", ["s_synopsis"], 
        "assets/img/story/story_1p.png", 
        ["The「Arcana」is the means", "By which all is revealed", "Death awaits you."],
        "The moment man devoured the fruit of knowledge, he sealed his fate... Entrusting his future to the cards, man clings to a dim hope. Yet, the Arcana is the means by which all is revealed... Beyond the beaten path lies the absolute end. It matters not who you are... "
    );
}

function s_category2() {
    toggleCategory("s_synopsis", ["s_overview"], 
        "assets/img/story/story_2p.png", 
        ["Feelings, you say? You dare...", "My feelings...", "She belongs only to ME!"],
        "My feelings have never changed, they're the same as they've always been! They're for you, Mio! The time I had with you meant everything to me! But now... it's all gone... If she truly is gone, I'll have to redo it all! Watch me! Rewind our clocks, back to the start! Noah... My long shadow... You have stolen her away from me... I will extinguish you, and take her back! Mio is MINE! She's not yours, she's mine! You are nothing. "
    );
}

function ch_sel1() {
    let c_1 = document.getElementById("ch1");
    toggleCategory_chara("ch1", ["ch2","ch3","ch4"], 
        "https://www.xenoserieswiki.org/w/images/archive/d/dd/20220816154815%21Noah.png", 
        "Noah",
        "Noah is a playable character and, along with Mio, a protagonist of Xenoblade Chronicles 3. He was designed by Masatsugu Saito, the lead character designer of the game."
    );
}

function ch_sel2() {
    let c_2 = document.getElementById("ch2");
    toggleCategory_chara("ch2", ["ch1","ch3","ch4"], 
        "https://www.xenoserieswiki.org/w/images/archive/c/c0/20230502205300%21Matthew.png", 
        "Matthew Vandham",
        "Matthew Vandham is a playable character and a protagonist of Xenoblade Chronicles 3: Future Redeemed. He was designed by Masatsugu Saito, the lead character designer of the game."
    );
}

function ch_sel3() {
    let c_3 = document.getElementById("ch3");
    toggleCategory_chara("ch3", ["ch1","ch2","ch4"], 
        "https://www.xenoserieswiki.org/w/images/archive/f/f6/20230502205056%21Shulk_%28XC3FR%29.png", 
        "Shulk",
        'Shulk is the main playable character and the protagonist of Xenoblade Chronicles. His ability to wield the Monado, using the sword\'\s unique powers, as well as visions of the future, makes him one of the main forces against the Mechon. He is often referred to by some characters as the "Heir to the Monado".'
    );
}

function ch_sel4() {
    let c_4 = document.getElementById("ch4");
    toggleCategory_chara("ch4", ["ch1","ch2","ch3"], 
        "https://www.xenoserieswiki.org/w/images/archive/b/ba/20230502205153%21Rex_%28XC3FR%29.png", 
        "Rex",
        'Rex is the main playable character and the male protagonist of Xenoblade Chronicles 2. He is a Driver who harnesses the power of a Blade named Pyra, also known as the legendary Aegis. Rex devotes himself into protecting her, and together with Pyra, he goes on a quest to find her long-lost home, Elysium. Due to the Aegis\'\ duality, Rex can use the power of the other incarnation of the weapon, Mythra. '
    );
}

