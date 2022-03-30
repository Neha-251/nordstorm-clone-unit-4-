
getData();

async function getData() {
    try {


        let res_data = await fetch("https://sharan-app-project.herokuapp.com/womens", (
            {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }
        ));

        let data = await res_data.json();
        console.log(data);

        appendproduct(data.womens);
    }
    catch (err) {
        console.log('err', err)

    }

}


function appendproduct(data) {
    data.forEach(function (elem) {
        let product_id = localStorage.getItem("product_id");   //see the name of the local storage put by jayprakash
        console.log(product_id);


        if (product_id == elem._id) {



            let imgdiv = document.querySelector("#image"); //put the id of the div where image is to be appended

            let image = document.createElement("img");
            image.src = elem.img_url
            image.setAttribute("id", "rate");


            imgdiv.append(image);

            let brand = document.getElementById("brand"); //see the brand name and put its id
            brand.textContent = elem.brand;

            let desc = document.getElementById("para")  //put the id of item description
            desc.textContent = elem.name;

            let price = document.getElementById("price") //put the id of price 
            price.textContent = `INR ${elem.price}`;

            let striked = document.getElementById("line") //put the id of the striked price
            striked.textContent = `INR ${elem.stprice}`;

            let button = document.getElementById("button2")//put the id of the button(add to cart)
            button.onclick = () => {
                localStorage.setItem("CartItems", JSON.stringify(elem));
            };

        }
    })
}


