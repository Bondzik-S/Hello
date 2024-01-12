// Mouse Events | Події

//

// Приклад 1.

{
    window.addEventListener("DOMContentLoaded", () => {

        const p = document.getElementsByTagName("p")[0];

        const mouse = (e, obj) => {
            e.target.classList.add("hover")
            console.log(`X:${e.clientX} / Y:${e.clientY}`);
            document.querySelector("div").classList.add("show")

        }

        // курсор вошел в пределы элемента.
        p.addEventListener("mouseover", e => mouse(e, {}))
        
        

        // курсор вышел за пределы элемента.
        p.onmouseout = function () {
            this.classList.remove("hover")
        }
       
    })
}

//

// Приклад 2.

{
    window.addEventListener("DOMContentLoaded", () => {
        const div1 = document.getElementById("div1"),
            div2 = document.getElementById("div2"),
            div3 = document.getElementById("div3");


        // mousedown - схоже на подію клік, але основна відмінність в тому, що mousedown реагує на натискання на елемент (без відпуску клавіші)
        div1.addEventListener("mousedown", function (e) {
            if (!e) e = event;

            // offsetX(Y) - знаїодить координати відносно елементу, а не вікна браузеру
            this.innerHTML = "Событие onmouse<b>down</b> X:" + (e.offsetX == undefined ? e.layerX : e.offsetX)
                + " Y:" + (e.offsetY == undefined ? e.layerY : e.offsetY);
        });

        div2.onmousemove = function (e) {
  
            this.innerHTML = "Событие onmouse<b>move</b> X:" + e.offsetX + " Y:" + e.offsetY;
        }

        // onmouseup - схоже на подію клік, але основна відмінність в тому, що onmouseup реагує на відпуск кнопки миші
        div3.onmouseup = function (e) {

            this.innerHTML = "Событие onmouse<b>up</b> X:" + e.offsetX + " Y:" + e.offsetY;
        }

    });
   
    /*

    
            
              window.addEventListener("DOMContentLoaded", () => {
                const div1 = document.getElementById("div1"),
                    div2 = document.getElementById("div2"),
                    div3 = document.getElementById("div3");
    
    
                div1.onmousedown = function (e) {
                    if (!e) e = event;
    
                    this.innerHTML = `Событие onmouse<b>down</b> X:  ${e.clientX} Y : ${e.clientY}`
                }
    
                div2.onmousemove = function (e) {
                    this.innerHTML = "Событие onmouse<b>move</b> X:" + e.clientX + " Y:" + e.clientY;
                }
    
                div3.onmouseup = function (e) {
                   console.dir(e)
               this.innerHTML = "Событие onmouse<b>up</b> X:" + e.clientX + " Y:" + e.clientY;
                }
    
            });
        */    
}