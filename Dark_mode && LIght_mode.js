let color_change = document.getElementById("btn_1");
let cont = document.querySelectorAll("#content");
let heading = document.getElementById("head");
let button = document.getElementById("btn_1");


// console.log(heading);
// console.log(cont);

color_change.addEventListener("click", background);

function background() {
    if (color_change.innerText === "Light mode") {
        color_change.innerHTML = "Dark mode";
        document.body.classList.remove("myStyle-w");
        document.body.classList.add("myStyle-b");
        heading.classList.remove("heading-1");
        heading.classList.add("heading-1");
        button.classList.remove("btn-dark")
        button.classList.add("btn-white")
       

        cont.forEach(count => {
            count.classList.add("cont");
            count.classList.remove("cont-dark"); 
        });
    }
     else if (color_change.innerText === "Dark mode") {
        color_change.innerHTML = "Light mode";
        document.body.classList.remove("myStyle-b");
        document.body.classList.add("myStyle-w");
        heading.classList.remove("heading-1");

        button.classList.remove("btn-white")
        button.classList.add("btn-dark")

        cont.forEach(count => {
            count.classList.remove("cont");
            count.classList.add("cont-dark"); 

        });
    }
}
