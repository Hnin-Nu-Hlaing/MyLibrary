var body = document.body;
var h1El = document.createElement("h1");
var infoEl = document.createElement("div");
var imgEl = document.createElement("img");
var kittenEl = document.createElement("div");
var nameEl = document.createElement("div");
var favoriteEl = document.createElement("div");

// Create ordered list element
var listEl = document.createElement("ol");
// Create ordered list items
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

h1El.textContent = "Welcome to my page";
kittenEl.textContent = "This is my kitten 🐱.";
nameEl.textContent = "His name is Jax.";
favoriteEl.textContent = "My favorite foods are:";
// Add text for list items
li1.textContent = "Apples 🍎 ";
li2.textContent = "Pizza 🍕 ";
li3.textContent = "Dumplings 🥟 ";
li4.textContent = "Cupcakes 🧁 ";

//tagတွေကိုထည့်တာ
body.appendChild(h1El); //h1
body.appendChild(infoEl); //div
infoEl.appendChild(imgEl); // img => div
infoEl.appendChild(kittenEl); //div => div
infoEl.appendChild(nameEl); //div => div
body.appendChild(favoriteEl); // div => body
// Append ordered list 
favoriteEl.appendChild(listEl); //li => div

// Append list items to ordered list element 
listEl.appendChild(li1);
listEl.appendChild(li2);
listEl.appendChild(li3);
listEl.appendChild(li4);

h1El.setAttribute("style", "margin:auto; width:50%; text-align:center;");
infoEl.setAttribute("style", "margin:auto; width:50%; text-align:center;");
imgEl.setAttribute("src", "./images/kitten-with-small-nose-sits-wooden-floor_905510-19325.avif");
nameEl.setAttribute("style", "font-size:25px; text-align:center;");
kittenEl.setAttribute("style", "font-size:25px; text-align:center;");
favoriteEl.setAttribute("style", "font-size:20px;");
// Add styling to list element
listEl.setAttribute("style", "background:#333333; padding:20px;");
// Add styling to list items
li1.setAttribute("style", " color:white; background: #666666; padding: 5px; margin-left: 35px;");
li2.setAttribute("style", " color:white; background: #777777; padding: 5px; margin-left: 35px;");
li3.setAttribute("style", " color:white; background: #888888; padding: 5px; margin-left: 35px;");
li4.setAttribute("style", " color:white; background: #999999; padding: 5px; margin-left: 35px;");
