// jww - Jumper with Weaves Qaulify (type of race)
// std - Standard Quality (type of race)
// doubleQ - earned a Jumper and Standard at same show

//Illustrate object and instances of the Dog object
let Project = function (name, desc1, desc2, desc3, desc4) {
    this.name = name;
    this.desc1 = desc1;
    this.desc2 = desc2;
    this.desc3 = desc3;
    this.desc4 = desc4;

};
console.log(Project);

let chartJS = new Project("chartjs", "CSS Grid", "Chart JS", "Graphic Interface - icons & SVGs");
let lightbox = new Project("lightbox", "Bootstrap", "JQuery", "Magnific-Popup", "Filter techniques");
let game = new Project("game", "JavaScript Event Handling", "Arrays", "Functions", "For Loops");
let mach = new Project("mach", "CSS Flexbox", "JS Objects", "Multi-dimentional Arrays", "Document Object Model");
let html = new Project("html", "Form elements", "Form styling", "Responsiveness", "Form validation");
let api = new Project("api", "Generating Modals", "Search Capabilities", "Fetch");


/// ChartJs
let dataChart = document.getElementById("chartPoints");

//let points = `<p> My name is ${ellie.name} ${ellie.age} </p>`;
//print(points);

//Illustrate template literal
function printChart() {
    let paragraph = document.getElementById('outputChart');
    paragraph.innerHTML = `<li>${chartJS.desc1}</li><li>${chartJS.desc2}</li><li>${chartJS.desc3}</li>`;
}

$(document).ready(function () {
    $(".btnChart").click(function (e) {
        $(".btnChart").hide();
        e.preventDefault();
    });
});

dataChart.addEventListener('click', printChart);


//// Lightbox
let dataLightbox = document.getElementById("lightPoints");

//let points = `<p> My name is ${ellie.name} ${ellie.age} </p>`;
//print(points);

function printLightbox() {
    let paragraph = document.getElementById('outputLight');
    paragraph.innerHTML = `<li>${lightbox.desc1}</li><li>${lightbox.desc2}</li><li>${lightbox.desc3}</li><li>${lightbox.desc4}</li>`;
}

$(document).ready(function () {
    $(".btnLight").click(function (e) {
        $(".btnLight").hide();
        e.preventDefault();
    });
});

dataLightbox.addEventListener('click', printLightbox);

//// game
let dataGame = document.getElementById("gamePoints");

//let points = `<p> My name is ${ellie.name} ${ellie.age} </p>`;
//print(points);

function printGame() {
    let paragraph = document.getElementById('outputGame');
    paragraph.innerHTML = `<ul>${game.desc1}</ul> <ul>${game.desc2}</ul><ul>${game.desc3}</ul> <ul>${game.desc4}</ul>`;
}

$(document).ready(function () {
    $(".btnGame").click(function (e) {
        $(".btnGame").hide();
        e.preventDefault();
    });
});

dataGame.addEventListener('click', printGame);

////Mach
let dataMach = document.getElementById("machPoints");

function printMach() {
    let paragraph = document.getElementById('outputMach');
    paragraph.innerHTML = `<ul>${mach.desc1}</ul> <ul>${mach.desc2}</ul><ul>${mach.desc3}</ul> <ul>${mach.desc4}</ul>`;
}

$(document).ready(function () {
    $(".btnMach").click(function (e) {
        $(".btnMach").hide();
        e.preventDefault();
    });
});

dataMach.addEventListener('click', printMach);

///html
let dataHtml = document.getElementById("htmlPoints");

function printHtml() {
    let paragraph = document.getElementById('outputHtml');
    paragraph.innerHTML = `<ul>${html.desc1}</ul> <ul>${html.desc2}</ul><ul>${html.desc3}</ul>`;
}

$(document).ready(function () {
    $(".btnHtml").click(function (e) {
        $(".btnHtml").hide();
        e.preventDefault();
    });
});

dataHtml.addEventListener('click', printHtml);

///Api
let dataApi = document.getElementById("apiPoints");

function printApi() {
    let paragraph = document.getElementById('outputApi');
    paragraph.innerHTML = `<ul>${api.desc1}</ul> <ul>${api.desc2}</ul><ul>${api.desc3}</ul>`;
}

$(document).ready(function () {
    $(".btnApi").click(function (e) {
        $(".btnApi").hide();
        e.preventDefault();
    });
});

dataApi.addEventListener('click', printApi);


/*
for (const key in ellie) {
    console.log(key, ellie[key]);
}
*/

/*
const keys = Object.values(ellie);
console.log(keys);

const data = Object.entries(ellie);
console.log(data);
*/