// Men page Js ============================Mens---------------------





function myFunction(){
    var x = document.querySelector('.checkmark1').value
    console.log(x);
    if(x== "low"){
        meData.sort(function(a,b){
            return b.price - a.price;
        });
    }
    console.log(meData)
    showDataAll(meData)
}

function myFunction1(){
    var x = document.querySelector('.checkmark2').value
    console.log(x);
    if(x== "high"){
        meData.sort(function(a,b){
            return a.price - b.price;
        });
    }
    console.log(meData)
    showDataAll(meData)
}

// _------------------------FILTER----------------------
function bmyFunction1(){
    var x = document.querySelector('.b1').value
    console.log(x);
    var bx = meData.filter(function(elem){
        return elem.brand==x;
    })
    console.log(meData)
    showDataAll(bx)
}

function bmyFunction2(){
    var x = document.querySelector('.b2').value
    console.log(x);
    var bx = meData.filter(function(elem){
        return elem.brand==x;
    })
    console.log(meData)
    showDataAll(bx)
}

function bmyFunction3(){
    var x = document.querySelector('.b3').value
    console.log(x);
    var bx = meData.filter(function(elem){
        return elem.brand==x;
    })
    console.log(meData)
    showDataAll(bx)
}

function bmyFunction4(){
    var x = document.querySelector('.b4').value
    console.log(x);
    var bx = meData.filter(function(elem){
        return elem.brand==x;
    })
    console.log(meData)
    showDataAll(bx)
}

function bmyFunction5(){
    var x = document.querySelector('.b5').value
    console.log(x);
    var bx = meData.filter(function(elem){
        return elem.brand==x;
    })
    console.log(meData)
    showDataAll(bx)
}

function bmyFunction6(){
    var x = document.querySelector('.b6').value
    console.log(x);
    var bx = meData.filter(function(elem){
        return elem.brand==x;
    })
    console.log(meData)
    showDataAll(bx)
}
// ===========COLOR FILTER===================================== //

function cmyFunction1(){
    var x = document.querySelector('.c1').value
    console.log(x);
    var bx = meData.filter(function(elem){
        return elem.color==x;
    })
    console.log(meData)
    showDataAll(bx)
}

function cmyFunction2(){
    var x = document.querySelector('.c2').value
    console.log(x);
    var bx = meData.filter(function(elem){
        return elem.color==x;
    })
    console.log(meData)
    showDataAll(bx)
}

function cmyFunction3(){
    var x = document.querySelector('.c3').value
    console.log(x);
    var bx = meData.filter(function(elem){
        return elem.color==x;
    })
    console.log(meData)
    showDataAll(bx)
}

function cmyFunction4(){
    var x = document.querySelector('.c4').value
    console.log(x);
    var bx = meData.filter(function(elem){
        return elem.color==x;
    })
    console.log(meData)
    showDataAll(bx)
}

function cmyFunction5(){
    var x = document.querySelector('.c5').value
    console.log(x);
    var bx = meData.filter(function(elem){
        return elem.color==x;
    })
    console.log(meData)
    showDataAll(bx)
}

function cmyFunction6(){
    var x = document.querySelector('.c6').value
    console.log(x);
    var bx = meData.filter(function(elem){
        return elem.color==x;
    })
    console.log(meData)
    showDataAll(bx)
}

function cmyFunction7(){
    var x = document.querySelector('.c7').value
    console.log(x);
    var bx = meData.filter(function(elem){
        return elem.color==x;
    })
    console.log(meData)
    showDataAll(bx)
}

function cmyFunction8(){
    var x = document.querySelector('.c8').value
    console.log(x);
    var bx = meData.filter(function(elem){
        return elem.color==x;
    })
    console.log(meData)
    showDataAll(bx)
}



// ---------------------------------------------------------------------------------------------------------
    // SideBar Filter
    var acc = document.getElementsByClassName("accordion");
    var i;
    
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        } 
      });
    }

    // sidebar filter end

    async function searchData(){
        try {
            let res = await fetch("https://sharan-app-project.herokuapp.com/mens",(
                {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }
            ));
            let data = await res.json();
            console.log(data);
            // data = data.mens
            showDataAll(data)
        } catch (error) {
            console.log(error);
        }
    }
    searchData();
    
    function showDataAll(meData){
        document.querySelector("#prodivMa").innerHTML = "";

        meData.mens.map(function(data){ 
            console.log(data);
        var div = document.createElement("div");
            div.setAttribute("class","menProDiv");

            var image1 = document.createElement("img");
            image1.setAttribute("src", data.img_url);
            image1.setAttribute("id","imgMainDiv");

            var divbutton = document.createElement("div");
            divbutton.setAttribute("id","divbutton");

            var x = document.createElement("div");
            // x.setAttribute("type", "radio");
            x.setAttribute("class","divb1");
            x.style.backgroundColor = "green";

            var y = document.createElement("div");
            // y.setAttribute("type", "radio");
            y.setAttribute("class","divb2");
            // y.style.backgroundColor = "red";

            var z = document.createElement("div");
            // z.setAttribute("type", "radio");
            z.setAttribute("class","divb3");
            z.style.backgroundColor = "red";

            divbutton.append(x,y,z)
            //end button

            var type = document.createElement("p");
            type.textContent = data.brand;
            type.setAttribute("id", "typeColth");

            var name1 = document.createElement("p");
            name1.textContent = data.name;
            name1.setAttribute("id", "name");

            var div2 = document.createElement("div");
            div2.setAttribute("id","mrpdivbar");

            var price1 = document.createElement("p"); 
            price1.setAttribute("id","mrpdivbar1");
            
            price1.textContent = `Now:INR ${data.price}`;
            
            var price2 = document.createElement("p");
            price2.setAttribute("id","mrpdivbar2");
            price2.textContent = `Was:INR  ${data.stprice} 30% off`;
            
            // div2.append(price1,price2);          

            div.append(image1,divbutton,type,name1,div2,price1,price2);

            div.onclick = function() {
            let x = [data]
            localStorage.setItem("allTerm",JSON.stringify(x));
            window.location.href= "productDetails.html";
        }

            document.querySelector("#prodivMa").append(div);
    });
    }
    // showDataAll(meData);
