let a = document.querySelector(".btn1");
        let b = document.querySelector(".btn2");
        let c = document.querySelector(".btn3");
        let e = document.querySelector(".score");
        let i = document.querySelector(".wonlost");
        let j = document.querySelector(".btn4");
        let count=0;
        function react(bn){
            let arr=["Paper", "Stone", "Scissor"];
            let d = Math.floor(Math.random()*3);
            let g = arr[d];
            let h =bn.textContent;
               console.log(g);
               if(h==g)
               {
                i.textContent ="Uff,It's a draw!" ;
               }
               else if(h=="Scissor" && g=="Paper")
               {
                       i.textContent ="Congratulations,you won! Hurray" ;
                       count++;
                       e.innerHTML = `${count}`;
               }
               else if(h=="Stone" && g=="Scissor" )
               {
                       i.textContent ="Congratulations,you won! Hurray" ;
                       count++;
                       e.innerHTML = `${count}`;
               }
               else if(h=="Paper" && g=="Stone")
               {
                       i.textContent ="Congratulations,you won! Hurray" ;
                       count++;
                       e.innerHTML = `${count}`;
               }
               else
               {
                i.textContent ="Uff,You lost!" ;
               }

        }
        j.addEventListener("click",function exit(){
            count = 0;
            e.innerHTML = `${count}`;
            i.textContent ="Thanks for playing" ;
        })
        a.addEventListener("click",function reac(){react(a)});
        b.addEventListener("click",function reac(){react(b)});
        c.addEventListener("click",function rect(){react(c)});