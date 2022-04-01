


getData();
async function getData() {

    try {
        let res_user = await fetch("https://sharan-app-project.herokuapp.com/users");

        let data_user = await res_user.json();

        let L = data_user.users.length - 1;

        let user_id = data_user.users[L]._id;



        let res = await fetch("https://sharan-app-project.herokuapp.com/cart/");

        let data_cart = await res.json();

        console.log(data_cart);
        appendCart(data_cart.cart, user_id);
    }
    catch (err) {
        console.log('err', err)

    }
}


const appendCart = (data, user_id) => {

    let items = 0;
    let total = 0;

    data.forEach((elem) => {

        console.log(user_id);
        if (elem.user_id == user_id) {

            items++;
            total = total + elem.product_id.price;

            let totalshow = document.getElementById("totalshow");
            totalshow.innerHTML = `${items}`;


            let cartappend = document.getElementById("cartappend");

            let mainDiv = document.getElementById("div");
            mainDiv.setAttribute("id", "mainDiv");

            let subDiv1 = document.createElement('div');
            let subDiv2 = document.createElement('div');

            let main_img = document.getElementById("img");
            main_img.style.height = "100px";
            main_img.src = elem.product_id.img_url;

            subDiv1.append(main_img);

            let name = document.createElement("p");
            name.style.fontSize = "13px";
            name.style.fontWeight = "600";
            name.innerText = elem.product_id.name;


            let color = document.createElement("p");
            color.style.fontSize = "14px";
            color.innerText = elem.product_id.color;
 
            let price = document.createElement("p");
            price.innerText = `₹ ${elem.product_id.price}`;

            subDiv2.append(name, color, price);

            mainDiv.append(subDiv1, subDiv2);
            cartappend.append(mainDiv);

        }
    })


    let shipping = 0;
    if (total < 999) {
        shipping = 80;
    }
    let shippingshow = document.getElementById("shippingshow");
    shippingshow.innerHTML = `₹ ${shipping}`;

    let tax = Math.round((10 * total) / 100);
    let taxshow = document.getElementById("taxshow");
    taxshow.innerHTML = `₹ ${tax}`;

    let total_all = total + tax + shipping;
    let totalp = document.getElementById("totalp");
    totalp.innerHTML = `(INR) ₹ ${total_all}`;
}






