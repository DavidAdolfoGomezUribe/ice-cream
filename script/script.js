
let items = document.querySelectorAll('.slider .item');
let active = 0;

function loadShow(){
    items[active].style.transform = `none`;
    items[active].style.zIndex = 1;
    items[active].style.filter = 'none';
    items[active].style.opacity = 1;
    items[active].style.backgroundColor = `hsla(0, 0.00%, 100.00%, 100.00%, 0.75)` ;
    items[active].style.color = `black` ;

    let stt = 0;
    for(var i = active + 1; i < items.length; i ++){
        stt++;
        items[i].style.transform = `translateY(${2.2*stt}vw) scale(${1 - 0.2*stt}) perspective(16px) rotateY(-0deg) ` ;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'none';
        items[i].style.opacity = stt > 2 ? 0 : 0.9;
        items[i].style.backgroundColor = "hsl(0, 0.00%, 100.00%)" ;
    }
     stt = 0;
    
    for(var i = (active - 1); i >= 0; i --){
        stt++;
        items[i].style.transform = `translateY(${-2.2*stt}vw) scale(${1 - 0.2*stt}) perspective(16px) rotateY(0deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'none';
        items[i].style.opacity = stt > 2 ? 0 : 0.9;
        items[i].style.backgroundColor = "hsl(0, 0.00%, 100.00%)" ;
        
    }
}

loadShow();
let next = document.getElementById('next');
let prev = document.getElementById('prev');

next.onclick = function(){
   active = active + 1 < items.length ?  active + 1 : active;
   loadShow();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active -1 : active;
    loadShow();
}


document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".amountflex1").forEach(container => {
        let plus = container.querySelector(".plus");
        let minus = container.querySelector(".minus");
        let number = container.querySelector(".number");

        let a = parseInt(number.innerText);

        plus.addEventListener("click", () => {
            a++;
            number.innerText = a < 10 ? "0" + a : a;
        });

        minus.addEventListener("click", () => {
            if (a > 1) {
                a--;
                number.innerText = a < 10 ? "0" + a : a;
            }
        });
    });
});


const products = [

{
    image:"",
    name: "Mix Ice cream",
    "typer-order": [
                    "On Table",
                    "Delivery"
    ],
    
    price : [
        199, 0
    ]

}
,
{
    image:"",
    name: "Chocolate Cup",
    "typer-order": [
                    "On Table",
                    "Delivery"
    ],
    
    price : [
        199, 0
    ]

}
,
{
    image:"",
    name: "Barry Ice cream",
    "typer-order": [
                    "On Table",
                    "Delivery"
    ],
    
    price : [
        199, 0
    ]

}
,
{
    image:"",
    name: "Strawnberry Ice cream",
    "typer-order": [
                    "On Table",
                    "Delivery"
    ],
    
    price : [
        199, 0
    ]

}





]



