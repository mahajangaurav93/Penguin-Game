function MouseOver1() {
    document.getElementById("penguin1").src = './images/mound_hover.png';
}
function MouseOut1() {
    document.getElementById("penguin1").src = './images/mound.png';
}

function MouseOver2() {
    document.getElementById("penguin2").src = './images/mound_hover.png';
}
function MouseOut2() {
    document.getElementById("penguin2").src = './images/mound.png';
}

function MouseOver3() {
    document.getElementById("penguin3").src = './images/mound_hover.png';
}
function MouseOut3() {
    document.getElementById("penguin3").src = './images/mound.png';
}

function MouseOver4() {
    document.getElementById("penguin4").src = './images/mound_hover.png';
}
function MouseOut4() {
    document.getElementById("penguin4").src = './images/mound.png';
}

function MouseOver5() {
    document.getElementById("penguin5").src = './images/mound_hover.png';
}
function MouseOut5() {
    document.getElementById("penguin5").src = './images/mound.png';
}

function MouseOver6() {
    document.getElementById("penguin6").src = './images/mound_hover.png';
}
function MouseOut6() {
    document.getElementById("penguin6").src = './images/mound.png';
}

function MouseOver7() {
    document.getElementById("penguin7").src = './images/mound_hover.png';
}
function MouseOut7() {
    document.getElementById("penguin7").src = './images/mound.png';
}

function MouseOver8() {
    document.getElementById("penguin8").src = './images/mound_hover.png';
}
function MouseOut8() {
    document.getElementById("penguin8").src = './images/mound.png';
}

function MouseOver9() {
    document.getElementById("penguin9").src = './images/mound_hover.png';
}
function MouseOut9() {
    document.getElementById("penguin9").src = './images/mound.png';
}

var theImages = new Array();

theImages[0] = './images/penguin0.png';
theImages[1] = './images/penguin1.png';
theImages[2] = './images/penguin2.png';
theImages[3] = './images/penguin3.png';
theImages[4] = './images/penguin4.png';
theImages[5] = './images/penguin5.png';
theImages[6] = './images/penguin6.png';
theImages[7] = './images/penguin7.png';
theImages[8] = './images/yeti.png';


var shuffled = [];

while (theImages.length) {
	shuffled.push(theImages.splice(Math.random() * theImages.length, 1));
}

function penguin1() {
    document.getElementById("penguin1").src = shuffled[0];
    document.getElementById("penguin1").removeAttribute("onmouseover");
    document.getElementById("penguin1").removeAttribute("onmouseout");
    document.getElementById("penguin1").removeAttribute("onclick");
    if(shuffled[0]=='./images/yeti.png') {
        display();
    }
}

function penguin2() {
    document.getElementById("penguin2").src = shuffled[1];
    document.getElementById("penguin2").removeAttribute("onmouseover");
    document.getElementById("penguin2").removeAttribute("onmouseout");
    document.getElementById("penguin2").removeAttribute("onclick");
    if(shuffled[1]=='./images/yeti.png') {
        display();
    }
}

function penguin3() {
    document.getElementById("penguin3").src = shuffled[2];
    document.getElementById("penguin3").removeAttribute("onmouseover");
    document.getElementById("penguin3").removeAttribute("onmouseout");
    document.getElementById("penguin3").removeAttribute("onclick");
    if(shuffled[2]=='./images/yeti.png') {
        display();
    }
}

function penguin4() {
    document.getElementById("penguin4").src = shuffled[3];
    document.getElementById("penguin4").removeAttribute("onmouseover");
    document.getElementById("penguin4").removeAttribute("onmouseout");
    document.getElementById("penguin4").removeAttribute("onclick");
    if(shuffled[3]=='./images/yeti.png') {
        display();
    }
}

function penguin5() {
    document.getElementById("penguin5").src = shuffled[4];
    document.getElementById("penguin5").removeAttribute("onmouseover");
    document.getElementById("penguin5").removeAttribute("onmouseout");
    document.getElementById("penguin5").removeAttribute("onclick");
    if(shuffled[4]=='./images/yeti.png') {
        display();
    }
}

function penguin6() {
    document.getElementById("penguin6").src = shuffled[5];
    document.getElementById("penguin6").removeAttribute("onmouseover");
    document.getElementById("penguin6").removeAttribute("onmouseout");
    document.getElementById("penguin6").removeAttribute("onclick");
    if(shuffled[5]==='./images/yeti.png') {
        display();
    }
}

function penguin7() {
    document.getElementById("penguin7").src = shuffled[6];
    document.getElementById("penguin7").removeAttribute("onmouseover");
    document.getElementById("penguin7").removeAttribute("onmouseout");
    document.getElementById("penguin7").removeAttribute("onclick");
    if(shuffled[6]=='./images/yeti.png') {
        display();
    }
}

function penguin8() {
    document.getElementById("penguin8").src = shuffled[7];
    document.getElementById("penguin8").removeAttribute("onmouseover");
    document.getElementById("penguin8").removeAttribute("onmouseout");
    document.getElementById("penguin8").removeAttribute("onclick");
    if(shuffled[7]=='./images/yeti.png') {
        display();
    }
}

function penguin9() {
    document.getElementById("penguin9").src = shuffled[8];
    document.getElementById("penguin9").removeAttribute("onmouseover");
    document.getElementById("penguin9").removeAttribute("onmouseout");
    document.getElementById("penguin9").removeAttribute("onclick");
    if(shuffled[8]=='./images/yeti.png') {
        display();
    }
}

function display() {
    document.getElementById("para").innerHTML = "ROOOOOAAAARRRRRR!!!!";
    document.getElementById("para").style.fontWeight = "bold";
    document.getElementById("para").style.fontSize = "50px";
    var btn = document.getElementById("dButton");
    btn.setAttribute("class", "d-block col-12 btn btn-primary");
    btn.setAttribute("onclick", "start()");
    document.getElementById("penguin1").removeAttribute("onmouseover");
    document.getElementById("penguin1").removeAttribute("onmouseout");
    document.getElementById("penguin1").removeAttribute("onclick");
    document.getElementById("penguin2").removeAttribute("onmouseover");
    document.getElementById("penguin2").removeAttribute("onmouseout");
    document.getElementById("penguin2").removeAttribute("onclick");
    document.getElementById("penguin3").removeAttribute("onmouseover");
    document.getElementById("penguin3").removeAttribute("onmouseout");
    document.getElementById("penguin3").removeAttribute("onclick");
    document.getElementById("penguin4").removeAttribute("onmouseover");
    document.getElementById("penguin4").removeAttribute("onmouseout");
    document.getElementById("penguin4").removeAttribute("onclick");
    document.getElementById("penguin5").removeAttribute("onmouseover");
    document.getElementById("penguin5").removeAttribute("onmouseout");
    document.getElementById("penguin5").removeAttribute("onclick");
    document.getElementById("penguin6").removeAttribute("onmouseover");
    document.getElementById("penguin6").removeAttribute("onmouseout");
    document.getElementById("penguin6").removeAttribute("onclick");
    document.getElementById("penguin7").removeAttribute("onmouseover");
    document.getElementById("penguin7").removeAttribute("onmouseout");
    document.getElementById("penguin7").removeAttribute("onclick");
    document.getElementById("penguin8").removeAttribute("onmouseover");
    document.getElementById("penguin8").removeAttribute("onmouseout");
    document.getElementById("penguin8").removeAttribute("onclick");
    document.getElementById("penguin9").removeAttribute("onmouseover");
    document.getElementById("penguin9").removeAttribute("onmouseout");
    document.getElementById("penguin9").removeAttribute("onclick");
}

function start() {
    window.location.reload();
}