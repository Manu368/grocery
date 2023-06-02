let items = [
    {
        title:"Milk"
    },
    {
        title:"Peanut Butter"
    },
    {
        title:"Choco Chips"
    },
    {
        title:"Tomato Sauce"
    },
    {
        title:"Cup Cakes"
    },
    {
        title:"Noodles"
    }
]




let b1 = document.getElementById("bg-container01");

let h01 = document.createElement("h1");
h01.classList.add("heading01");
h01.textContent = "Grocery List";
b1.appendChild(h01);



let div01 = document.createElement("div");
div01.classList.add("list-container");
b1.appendChild(div01);

let a = document.createElement("ul");
div01.appendChild(a);

function anu(manu){
    let b = document.createElement("li");
    b.classList.add("list-items")
    b.textContent = manu.title;
    a.appendChild(b)
} 

for(let manu of items){
    anu(manu);
}




let in1 = document.createElement("input");
in1.type = "checkbox";
in1.setAttribute("id", "manohar01");
in1.classList.add("mb-3")
b1.appendChild(in1);

let la1 = document.createElement("label");
la1.setAttribute("for", "manohar01");
la1.textContent = "Need Home Delivery";
la1.classList.add("item01", "mb-3")
b1.appendChild(la1);


let brake = document.createElement("br");
b1.appendChild(brake);

let btn = document.createElement("button");
btn.classList.add("btn", "btn-primary");
btn.textContent = "Proceed To Pay";
b1.appendChild(btn)



