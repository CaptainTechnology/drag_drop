let list=document.getElementsByClassName("list");
let leftbox=document.getElementById("left");
let rightbox=document.getElementById("right");

for (let li of list) {
    li.addEventListener("dragstart",(e)=>{
       let selected=e.target;

        rightbox.addEventListener("dragover",(e)=>{
            e.preventDefault();
        });
        rightbox.addEventListener("drop",(e)=>{
            rightbox.appendChild(selected);
            selected=null;
        });

        leftbox.addEventListener("dragover",(e)=>{
            e.preventDefault();
        });
        leftbox.addEventListener("drop",(e)=>{
            leftbox.appendChild(selected);
            selected=null;
        });
        
    });
   
}