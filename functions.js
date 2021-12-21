const container = document.querySelector(".container");
const body = document.querySelector("body");
const btn = document.querySelector("button");
let bodyWidth = body.clientWidth;
let containerWidth;
let amount = 16;
let items;
let sliders = document.querySelectorAll(".slider");
let red = 127, green = 127, blue = 127;
let color;
const rbtBlack = document.querySelector(".black");
const rbtRandom = document.querySelector(".random");
const rbtChoose = document.querySelector(".choose");

if(rbtBlack.checked == true){
    color = "black";
    sliders.forEach((sld) => {
        sld.disabled = true;
        sld.style.opacity = 0.4;
    });
}
sliders.forEach((sld)=>{
    sld.style.background = `rgb(${red}, ${green}, ${blue})`;
});
setup();
setEventBG();


// Functions
function setup(){
    bodyWidth = body.clientWidth;
    
    if(bodyWidth < 480){
        containerWidth = bodyWidth*0.9;
    }else{
        containerWidth = bodyWidth*0.4;
    }
    let itemWidth = parseInt(containerWidth/amount+"");
    containerWidth = itemWidth * amount;
    container.style.width = ""+containerWidth+"px";
    for(let i = 0; i < amount*amount; i++){
        const div = document.createElement("div");
        div.classList.add("item");
        div.style.border = "1px solid rgba(0, 0, 0, 0.1)";
        div.style.width = ""+itemWidth+"px";
        div.style.height = ""+itemWidth+"px";
        container.appendChild(div);
    }
}

function setEventBG(){
    items = document.querySelectorAll(".item");
    
    items.forEach((item) => {
        item.addEventListener("mouseover", (e) => {
            if(rbtBlack.checked){
                color = "black";
            }else if(rbtRandom.checked){
                let r = Math.random()*256;
                let g = Math.random()*256;
                let b = Math.random()*256;
                color = `rgb(${r}, ${g}, ${b})`;
            }else{
                color = `rgb(${red}, ${green}, ${blue})`;
            }         
            item.style.background = color;
        });
        // item.addEventListener("touch", (e) => {
        //     item.style.background = "black";
        // });
    });
}

// Events Asignation
btn.addEventListener("click", ()=>{
    amount = prompt("Enter new amount: ");
    items.forEach(item => {
        container.removeChild(item);
    });
    setup();
    setEventBG();
});

sliders.forEach((sld)=>{
    sld.addEventListener("click", ()=>{
        //console.log(sld.classList[0]);
        if (sld.classList[0] === "red"){
            red = sld.value;
        }else if(sld.classList[0] === "green"){
            green = sld.value;
        }else{
            blue = sld.value;
        }
        sliders.forEach((sld)=>{
            sld.style.background = `rgb(${red}, ${green}, ${blue})`;
        });
    });
    sld.addEventListener("touchend", ()=>{
        //console.log(sld.classList[0]);
        if (sld.classList[0] === "red"){
            red = sld.value;
        }else if(sld.classList[0] === "green"){
            green = sld.value;
        }else{
            blue = sld.value;
        }
        sliders.forEach((sld)=>{
            sld.style.background = `rgb(${red}, ${green}, ${blue})`;
        });
    });
});
// rbtBlack.onClick(()=>{
//     console.log("black");
// });
rbtBlack.addEventListener("change", ()=>{
    if(rbtBlack.checked == true){
        console.log("black");
        sliders.forEach((sld) => {
            sld.disabled = true;
            sld.style.opacity = 0.4;
        });
    }
});
rbtRandom.addEventListener("change", ()=>{
    if(rbtRandom.checked == true){
        console.log("random");
        sliders.forEach((sld) => {
            sld.disabled = true;
            sld.style.opacity = 0.4;
        });
    }
});
rbtChoose.addEventListener("change", (e)=>{
    if(rbtChoose.checked == true){
        console.log("hello");
        sliders.forEach((sld) => {
            sld.disabled = false;
            sld.style.opacity = 1;
        });
    } 
});
