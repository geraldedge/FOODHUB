var loginbutton = document.querySelector(".button");
var loginpanel = document.querySelector(".login");
var cartlogo = document.querySelector(".cart");
var cartl = document.querySelector(".cart_inside");
var placeorder = document.querySelector(".placeorder");
var cartl1 = document.querySelector(".cart_inside1");
var cartl2 = document.querySelector(".cart_inside2");
var cancel = document.getElementById("cancel");
var cancel1 = document.getElementById("cancel1");
var cartexit = document.getElementById("cartexit");
var close_pizza = document.getElementById("close_pizza");
var close_burger = document.getElementById("close_burger");
var close_salad = document.getElementById("close_salad");
var price = document.querySelector(".price");
var pep_add = document.getElementById("pep_add");
var pep_minus = document.getElementById("pep_minus");
var pine_add = document.getElementById("pine_add");
var pine_minus = document.getElementById("pine_minus");
var bq_add = document.getElementById("bq_add");
var bq_minus = document.getElementById("bq_minus");
var cream_add = document.getElementById("cream_add");
var cream_minus = document.getElementById("cream_minus");

var cheese_add = document.getElementById("cheese_add");
var cheese_minus = document.getElementById("cheese_minus");
var squid_add = document.getElementById("squid_add");
var squid_minus = document.getElementById("squid_minus");
var tin_add = document.getElementById("tin_add");
var tin_minus = document.getElementById("tin_minus");
var fish_add = document.getElementById("fish_add");
var fish_minus = document.getElementById("fish_minus");

var noodles_add = document.getElementById("noodles_add");
var noodles_minus = document.getElementById("noodles_minus");
var roco_add = document.getElementById("roco_add");
var roco_minus = document.getElementById("roco_minus");
var chicken_add = document.getElementById("chicken_add");
var chicken_minus = document.getElementById("chicken_minus");
var vegan_add = document.getElementById("vegan_add");
var vegan_minus = document.getElementById("vegan_minus");

var cancel_pep = document.querySelector(".entry_close");
var cancel_pine = document.querySelector(".entry_close1");
var cancel_bq = document.querySelector(".entry_close2");
var cancel_cream = document.querySelector(".entry_close3");

var cancel_cheese = document.querySelector(".entry_close4");
var cancel_squid = document.querySelector(".entry_close5");
var cancel_tin = document.querySelector(".entry_close6");
var cancel_fish = document.querySelector(".entry_close7");

var cancel_noodles = document.querySelector(".entry_close8");
var cancel_roco = document.querySelector(".entry_close9");
var cancel_chicken = document.querySelector(".entry_close0");
var cancel_vegan = document.querySelector(".entry_close11");

var amount = 0;
var pizza = document.getElementById("p");
var burger = document.getElementById("b");
var salad = document.getElementById("s");
var createcallbutton = document.querySelector(".createbutton");

var minus_circle = document.querySelector(".minus_circle");
var minus_circle1 = document.querySelector(".minus_circle1");
var minus_circle2 = document.querySelector(".minus_circle2");
var minus_circle3 = document.querySelector(".minus_circle3");

var minus_circle4 = document.querySelector(".minus_circle4");
var minus_circle5 = document.querySelector(".minus_circle5");
var minus_circle6 = document.querySelector(".minus_circle6");
var minus_circle7 = document.querySelector(".minus_circle7");

var minus_circle8 = document.querySelector(".minus_circle8");
var minus_circle9 = document.querySelector(".minus_circle9");
var minus_circle0 = document.querySelector(".minus_circle0");
var minus_circle11 = document.querySelector(".minus_circle11");

var pep_amount = document.querySelector(".pep_amount");
var pine_amount = document.querySelector(".pine_amount");
var bq_amount = document.querySelector(".bq_amount");
var cream_amount = document.querySelector(".cream_amount");

var cheese_amount = document.querySelector(".cheese_amount");
var squid_amount = document.querySelector(".squid_amount");
var tin_amount = document.querySelector(".tin_amount");
var fish_amount = document.querySelector(".fish_amount");

var noodles_amount = document.querySelector(".noodles_amount");
var roco_amount = document.querySelector(".roco_amount");
var chicken_amount = document.querySelector(".chicken_amount");
var vegan_amount = document.querySelector(".vegan_amount");

var food = document.querySelector(".food");
var order = document.querySelector(".nothing");
var registerpanelankasa = document.querySelector(".register");
var standard = document.querySelector(".default");
var logincallbutton = document.querySelector(".logincallbutton");
var loginapibutton = document.getElementById("loginbuttonapi");

var logoutbutton = document.querySelector(".logoutbutton");
var notfound = document.querySelector(".notfound");
var cartmenu = document.querySelector(".cartmenu");
var empty = document.querySelector(".emptycart");
var space = document.querySelector(".space");
var menu_pizza = document.querySelector(".menu_pizza");
var menu_burger = document.querySelector(".menu_burger");
var menu_salad = document.querySelector(".menu_salad");

var firstname = document.querySelector(".firstname");
var lastname = document.querySelector(".lastname");
var password = document.querySelector(".password");
var email = document.querySelector(".email");

var password_login = document.querySelector(".password_login");
var email_login = document.querySelector(".email_login");

let order_p;
let food_p;
let amount_p;
let cost_p;
let cancel_p;

let cost_p1 = 0;
let cost_p2 = 0;
let cost_p3 = 0;
let cost_p4 = 0;
let cost_p5 = 0;

let order_pine;
let food_pine;
let amount_pine;
let cost_pine;

let order_bq;
let food_bq;
let amount_bq;
let cost_bq;

let order_cream;
let food_cream;
let amount_cream;
let cost_cream;

let order_cheese;
let food_cheese;
let amount_cheese;
let cost_cheese;

let order_squid;
let food_squid;
let amount_squid;
let cost_squid;

let order_fish;
let food_fish;
let amount_fish;
let cost_fish;

let order_noodles;
let food_noodles;
let amount_noodles;
let cost_noodles;

let order_roco;
let food_roco;
let amount_roco;
let cost_roco;

let order_chicken;
let food_chicken;
let amount_chicken;
let cost_chicken;

let order_vegan;
let food_vegan;
let amount_vegan;
let cost_vegan;

var x = 0;
var g = 0;
var h = 0;
var j = 0;
var k = 0;

var a = 0;
var s = 0;
var d = 0;
var f = 0;

var c = 0;
var v = 0;
var b = 0;
var n = 0;

var checker = "string";
var checker1 = "string";
var checker2 = "string";
var checker3 = "string";

var checker4 = "string";
var checker5 = "string";
var checker6 = "string";
var checker7 = "string";

var checker8 = "string";
var checker9 = "string";
var checker0 = "string";
var checker11 = "string";
var store;

checkertee = () => {
  store = cost_p1 + cost_p2+cost_p3+cost_p4

  if (store <= 0) {
    price.innerHTML = "";
    placeorder.style.opacity="0"
  } else {
    price.innerHTML = "&#8373;" + store;
    placeorder.style.opacity="1"
  }
};
//call listeners
loginbox = () => {
  loginpanel.style.top = "40%";
  loginpanel.style.opacity = "0.7";
};
cancelloginpanel = () => {
  loginpanel.style.top = "-100%";
  loginpanel.style.opacity = "0";
};

cancelregisterpanel = () => {
  registerpanelankasa.style.top = "-100%";
  registerpanelankasa.style.opacity = "0";
};

registerpanel = () => {
  cancelloginpanel();
  registerpanelankasa.style.top = "0";
  registerpanelankasa.style.opacity = "0.7";
};
logincallregister = () => {
  cancelregisterpanel();
  loginpanel.style.top = "40%";
  loginpanel.style.opacity = "0.7";
};
cartmenu_popup = () => {
  cartmenu.style.top = "0";
  cartmenu.style.opacity = "1";
  if (
    x === 0 &&
    g === 0 &&
    h === 0 &&
    j === 0 &&
    k === 0 &&
    a === 0 &&
    s === 0 &&
    d === 0 &&
    f === 0 &&
    c === 0 &&
    v === 0 &&
    b === 0 &&
    n === 0
  ) {
    standard.className = "center";

    empty.innerHTML = "EMPTY CART. DINE.";
    empty.style.zIndex = 2;
    empty.style.opacity = "1";
  } else {
    empty.innerHTML = "";
    standard.className = "default";
  }
};

cancel_pep.addEventListener("click", () => {
  checker = "string";
  g = 0;
  order_p.remove();
  cost_p1 = 0;
  amount=0
  subtract_pep()
  checkertee();
  cartmenu_popup();
});

cancel_pine.addEventListener("click", () => {
  checker1 = "string";
  h = 0;
  cost_p2 = 0;
  amount1=0
  subtract_pine()
  checkertee();
  order_pine.remove();
  cartmenu_popup();
});

cancel_bq.addEventListener("click", () => {
  checker2 = "string";
  j = 0;
  cost_p3 = 0;
  amount2=0
  subtract_bq()
  checkertee();
  order_bq.remove();
  cartmenu_popup();
});

cancel_cream.addEventListener("click", () => {
  checker3 = "string";
  k = 0;    
  cost_p4 = 0;
  amount3=0
  subtract_cream()
  checkertee();
  order_cream.remove();
  cartmenu_popup();
});

cancel_cheese.addEventListener("click", () => {
  checker4 = "string";
  a = 0;
  cost_p5 = 0;
  amount4=0
  subtract_cheese()
  checkertee();
  order_cheese.remove();
  cartmenu_popup();
});

cancel_squid.addEventListener("click", () => {
  checker5 = "string";
  s = 0;
  cost_p6 = 0;
  amount5=0
  subtract_squid()
  checkertee();
  order_squid.remove();
  cartmenu_popup();
});

cancel_tin.addEventListener("click", () => {
  checker6 = "string";
  d = 0;
  cost_p7 = 0;
  amount6=0
  subtract_tin()
  checkertee();
  order_tin.remove();
  cartmenu_popup();
});

cancel_fish.addEventListener("click", () => {
  checker7 = "string";
  f = 0;
  cost_p8 = 0;
  amount7=0
  subtract_fish()
  checkertee();
  order_fish.remove();
  cartmenu_popup();
});

cancel_noodles.addEventListener("click", () => {
  checker8 = "string";
  c = 0;
  cost_p9 = 0;
  amount8=0
  subtract_noodles()
  checkertee();
  order_noodles.remove();
  cartmenu_popup();
});

cancel_roco.addEventListener("click", () => {
  checker9 = "string";
  v = 0;
  cost_p10 = 0;
  amount9=0
  subtract_roco()
  checkertee();
  order_roco.remove();
  cartmenu_popup();
});

cancel_chicken.addEventListener("click", () => {
  checker0 = "string";
  b = 0;
  cost_p11 = 0;
  amount0=0
  subtract_chicken()
  checkertee();
  order_chicken.remove();
  cartmenu_popup();
});

cancel_vegan.addEventListener("click", () => {
  checker11 = "string";
  n = 0;
  cost_p12 = 0;
  amount11=0
  subtract_vegan()
  checkertee();
  order_vegan.remove();
  cartmenu_popup();
});

closemenu = () => {
  cartmenu.style.top = "-100%";
  cartmenu.style.opacity = "0";
};

saladmenu = () => {
  menu_salad.style.transition = "animation 0.5s ease 0s linear;";
  menu_salad.style.animation = "slide 1s";
  menu_salad.style.left = "0";
};

pizzamenu = () => {
  menu_pizza.style.transition = "animation 0.5s ease 0s linear;";
  menu_pizza.style.animation = "slide 1s";
  menu_pizza.style.left = "0";
};

burgermenu = () => {
  menu_burger.style.transition = "animation 0.5s ease 0s linear;";
  menu_burger.style.animation = "slide 1s";
  menu_burger.style.left = "0";
};

pizza_reset = () => {
  menu_pizza.style.transition = "";
  menu_pizza.style.animation = "";
  menu_pizza.style.left = "";
};

salad_reset = () => {
  menu_salad.style.transition = "";
  menu_salad.style.animation = "";
  menu_salad.style.left = "";
};

burger_reset = () => {
  menu_burger.style.transition = "";
  menu_burger.style.animation = "";
  menu_burger.style.left = "";
};

//menu features
//add_, subtract_

//pep
add_pep = () => {
  minus_circle.style.opacity = "1";
  amount = amount + 1;
  pep_amount.innerHTML = amount;

  g = g + 1;
  console.log(typeof checker);
  cancel_pep.style.opacity = "1";
  cancel_pep.style.top = "5%";
  cancel_pep.style.right = "0";

  if (typeof checker === "string") {
    empty.innerHTML = "";
    empty.style.zIndex = -20;
    empty.style.opacity = "0";
    standard.className = "default";
    standard.style.overflow = "auto";
    //cancel_p = document.createElement("div");
    order_p = document.createElement("div");
    food_p = document.createElement("p");
    amount_p = document.createElement("p");
    cost_p = document.createElement("p");
    cost_pine = document.createElement("p");
    //icon = document.createElement("i");

    //icon.className = "fas fa-times";
    //cancel_p.className = "entry_close";
    amount_p.className = "food";
    food_p.className = "food";
    cost_p.className = "food";
    order_p.className = "order";
    food_p.innerHTML = "PEPPERONI.";
    cost_p1 = amount * 30;
    checkertee();
    cost_p.innerHTML = "&#8373;" + amount * 30 + ".00";
    amount_p.innerHTML = amount + "pc.";
    //cancel_p.append(icon);
    order_p.append(cancel_pep);
    order_p.append(amount_p);
    order_p.append(food_p);
    order_p.append(cost_p);
    standard.append(order_p);

    checker = 1;
  } else {
    amount_p.innerHTML = amount + "pcs.";
    cost_p.innerHTML = "&#8373;" + amount * 30 + ".00";
    cost_p1 = amount * 30;
    checkertee();
  }
};

subtract_pep = () => {
  amount = amount - 1;
  if (amount <= 0) {
    minus_circle.style.opacity = "0";
    amount = 0;
    pep_amount.innerHTML = "";
    amount_p.innerHTML = "";
    g = 0;
    cost_p1 = amount * 30;
    checkertee();
    checker = "string";
    order_p.remove();
  } else {
    pep_amount.innerHTML = amount;
    cost_p.innerHTML = "&#8373;" + amount * 30 + ".00";
    cost_p1 = amount * 30;
    checkertee();
    if (amount === 1) {
      amount_p.innerHTML = amount + "pc.";
    } else {
      amount_p.innerHTML = amount + "pcs.";
    }
  }
};
var amount1 = 0;
var amount2 = 0;
var amount3 = 0;

var amount4 = 0;
var amount5 = 0;
var amount6 = 0;
var amount7 = 0;

var amount8 = 0;
var amount9 = 0;
var amount0 = 0;
var amount11 = 0;

//pineapple
add_pine = () => {
  minus_circle1.style.opacity = "1";
  amount1 = amount1 + 1;
  pine_amount.innerHTML = amount1;
  cancel_pine.style.opacity = "1";
  cancel_pine.style.top = "5%";
  cancel_pine.style.right = "0";
  h = h + 1;

  if (typeof checker1 === "string") {
    empty.innerHTML = "";
    empty.style.zIndex = -20;
    empty.style.opacity = "0";
    standard.className = "default";
    standard.style.overflow = "auto";
    order_pine = document.createElement("div");
    food_pine = document.createElement("p");
    amount_pine = document.createElement("p");
    cost_pine = document.createElement("p");
    amount_pine.className = "food";
    food_pine.className = "food";
    cost_pine.className = "food";
    order_pine.className = "order";
    food_pine.innerHTML = "PINEAPPLE.";
    amount_pine.innerHTML = amount1 + "pc.";
    cost_p2 = amount1 * 25;
    checkertee();
    cost_pine.innerHTML = "&#8373;" + amount1 * 25 + ".00";
    order_pine.append(cancel_pine);
    order_pine.append(amount_pine);
    order_pine.append(food_pine);
    order_pine.append(cost_pine);
    standard.append(order_pine);

    checker1 = 1;
  } else {
    amount_pine.innerHTML = amount1 + "pcs.";
    cost_pine.innerHTML = "&#8373;" + amount1 * 25 + ".00";
    cost_p2 = amount1 * 25;
    checkertee();
  }
};
subtract_pine = () => {
  amount1 = amount1 - 1;
  if (amount1 <= 0) {
    minus_circle1.style.opacity = "0";
    amount1 = 0;
    pine_amount.innerHTML = "";
    amount_pine.innerHTML = "";
    h = 0;
    cost_p2 = amount1 * 25;
    checkertee();
    checker1 = "string";
    order_pine.remove();
  } else {
    pine_amount.innerHTML = amount1;
    amount_pine.innerHTML = amount1;
    cost_pine.innerHTML = "&#8373;" + amount1 * 25 + ".00";
    cost_p2 = amount1 * 25;
    checkertee();

    if (amount1 === 1) {
      amount_pine.innerHTML = amount1 + "pc.";
    } else {
      amount_pine.innerHTML = amount1 + "pcs.";
    }
  }
};

//bq

add_bq = () => {
  minus_circle2.style.opacity = "1";
  amount2 = amount2 + 1;
  bq_amount.innerHTML = amount2;
  cancel_bq.style.opacity = "1";
  cancel_bq.style.top = "5%";
  cancel_bq.style.right = "0";
  j = j + 1;
  if (typeof checker2 === "string") {
    empty.innerHTML = "";
    empty.style.zIndex = -20;
    empty.style.opacity = "0";
    standard.className = "default";
    standard.style.overflow = "auto";
    order_bq = document.createElement("div");
    food_bq = document.createElement("p");
    amount_bq = document.createElement("p");
    cost_bq = document.createElement("p");
    amount_bq.className = "food";
    food_bq.className = "food";
    cost_bq.className = "food";
    order_bq.className = "order";
    food_bq.innerHTML = "HOT BQ.";
    amount_bq.innerHTML = amount2 + "pc.";
    cost_p3 = amount2 * 20;
    checkertee();
    cost_bq.innerHTML = "&#8373;" + amount2 * 20 + ".00";
    order_bq.append(cancel_bq);
    order_bq.append(amount_bq);
    order_bq.append(food_bq);
    order_bq.append(cost_bq);
    standard.append(order_bq);
    checker2 = 1;
  } else {
    amount_bq.innerHTML = amount2 + "pcs.";
    cost_bq.innerHTML = "&#8373;" + amount2 * 20 + ".00";
    cost_p3 = amount2 * 20;
    checkertee();
  }
};
subtract_bq = () => {
  amount2 = amount2 - 1;
  if (amount2 <= 0) {
    minus_circle2.style.opacity = "0";
    amount2 = 0;
    bq_amount.innerHTML = "";
    amount_bq.innerHTML = "";
    j = 0;
    cost_p3 = amount2 * 20;
    checkertee();

    checker2 = "string";
    order_bq.remove();
  } else {
    bq_amount.innerHTML = amount2;
    amount_bq.innerHTML = amount2;
    cost_bq.innerHTML = "&#8373;" + amount2 * 20 + ".00";
    cost_p3 = amount2 * 20;
    checkertee();

    if (amount2 === 1) {
      amount_bq.innerHTML = amount2 + "pc.";
    } else {
      amount_bq.innerHTML = amount2 + "pcs.";
    }
  }
};

//cream

add_cream = () => {
  minus_circle3.style.opacity = "1";
  amount3 = amount3 + 1;
  cream_amount.innerHTML = amount3;
  cancel_cream.style.opacity = "1";
  cancel_cream.style.top = "5%";
  cancel_cream.style.right = "0";
  k = k + 1;
  if (typeof checker3 === "string") {
    empty.innerHTML = "";
    empty.style.zIndex = -20;
    empty.style.opacity = "0";
    standard.className = "default";
    standard.style.overflow = "auto";
    order_cream = document.createElement("div");
    food_cream = document.createElement("p");
    amount_cream = document.createElement("p");
    cost_cream = document.createElement("p");
    amount_cream.className = "food";
    food_cream.className = "food";
    cost_cream.className = "food";
    order_cream.className = "order";
    food_cream.innerHTML = "CREAM DIGHT.";
    amount_cream.innerHTML = amount3 + "pc.";
    cost_cream.innerHTML = "&#8373;" + amount3 * 35 + ".00";
    order_cream.append(cancel_cream);
    order_cream.append(amount_cream);
    order_cream.append(food_cream);
    order_cream.append(cost_cream);
    standard.append(order_cream);
    cost_p4 = amount3 * 35;
    checkertee();
    checker3 = 1;
  } else {
    amount_cream.innerHTML = amount3 + "pcs.";
    cost_cream.innerHTML = "&#8373;" + amount3 * 35 + ".00";
  }
};
subtract_cream = () => {
  amount3 = amount3 - 1;
  if (amount3 <= 0) {
    minus_circle3.style.opacity = "0";
    amount3 = 0;
    cream_amount.innerHTML = "";
    amount_cream.innerHTML = "";
    k = 0;
    cost_p4 = amount3 * 35;
    checkertee();

    checker3 = "string";
    order_cream.remove();
  } else {
    cream_amount.innerHTML = amount3;

    amount_cream.innerHTML = amount3;
    cost_cream.innerHTML = "&#8373;" + amount3 * 35 + ".00";
    cost_p4 = amount3 * 35;
    checkertee();

    if (amount3 === 1) {
      amount_cream.innerHTML = amount3 + "pc.";
    } else {
      amount_cream.innerHTML = amount3 + "pcs.";
    }
  }
};

//burger
add_cheese = () => {
  minus_circle4.style.opacity = "1";
  amount4 = amount4 + 1;
  cheese_amount.innerHTML = amount4;

  a = a + 1;
  console.log(typeof checker);
  cancel_cheese.style.opacity = "1";
  cancel_cheese.style.top = "5%";
  cancel_cheese.style.right = "0";

  if (typeof checker4 === "string") {
    empty.innerHTML = "";
    empty.style.zIndex = -20;
    empty.style.opacity = "0";
    standard.className = "default";
    standard.style.overflow = "auto";
    //cancel_p = document.createElement("div");
    order_cheese = document.createElement("div");
    food_cheese = document.createElement("p");
    amount_cheese = document.createElement("p");
    cost_cheese = document.createElement("p");
    //cost_pine = document.createElement("p");
    //icon = document.createElement("i");

    //icon.className = "fas fa-times";
    //cancel_p.className = "entry_close";
    amount_cheese.className = "food";
    food_cheese.className = "food";
    cost_cheese.className = "food";
    order_cheese.className = "order";
    food_cheese.innerHTML = "CHEESE BRGER.";
    cost_cheese.innerHTML = "&#8373;" + amount4 * 30 + ".00";
    amount_cheese.innerHTML = amount4 + "pc.";
    //cancel_p.append(icon);
    order_cheese.append(cancel_cheese);
    order_cheese.append(amount_cheese);
    order_cheese.append(food_cheese);
    order_cheese.append(cost_cheese);
    standard.append(order_cheese);
    checker4 = 1;
  } else {
    amount_cheese.innerHTML = amount4 + "pcs.";
    cost_cheese.innerHTML = "&#8373;" + amount4 * 30 + ".00";
  }
};

subtract_cheese = () => {
  amount4 = amount4 - 1;
  if (amount4 <= 0) {
    minus_circle4.style.opacity = "0";
    amount4 = 0;
    cheese_amount.innerHTML = "";
    amount_cheese.innerHTML = "";
    a = 0;
    checker4 = "string";

    order_cheese.remove();
  } else {
    cheese_amount.innerHTML = amount4;
    cost_cheese.innerHTML = "&#8373;" + amount4 * 30 + ".00";
    if (amount4 === 1) {
      amount_cheese.innerHTML = amount4 + "pc.";
    } else {
      amount_cheese.innerHTML = amount4 + "pcs.";
    }
  }
};

add_squid = () => {
  minus_circle5.style.opacity = "1";
  amount5 = amount5 + 1;
  squid_amount.innerHTML = amount5;

  s = s + 1;
  console.log(typeof checker);
  cancel_squid.style.opacity = "1";
  cancel_squid.style.top = "5%";
  cancel_squid.style.right = "0";

  if (typeof checker5 === "string") {
    empty.innerHTML = "";
    empty.style.zIndex = -20;
    empty.style.opacity = "0";
    standard.className = "default";
    standard.style.overflow = "auto";
    //cancel_p = document.createElement("div");
    order_squid = document.createElement("div");
    food_squid = document.createElement("p");
    amount_squid = document.createElement("p");
    cost_squid = document.createElement("p");
    //cost_pine = document.createElement("p");
    //icon = document.createElement("i");

    //icon.className = "fas fa-times";
    //cancel_p.className = "entry_close";
    amount_squid.className = "food";
    food_squid.className = "food";
    cost_squid.className = "food";
    order_squid.className = "order";
    food_squid.innerHTML = "SQUID BRGER.";
    cost_squid.innerHTML = "&#8373;" + amount5 * 40 + ".00";
    amount_squid.innerHTML = amount5 + "pc.";
    //cancel_p.append(icon);
    order_squid.append(cancel_squid);
    order_squid.append(amount_squid);
    order_squid.append(food_squid);
    order_squid.append(cost_squid);
    standard.append(order_squid);
    checker5 = 1;
  } else {
    amount_squid.innerHTML = amount5 + "pcs.";
    cost_squid.innerHTML = "&#8373;" + amount5 * 40 + ".00";
  }
};

subtract_squid = () => {
  amount5 = amount5 - 1;
  if (amount5 <= 0) {
    minus_circle5.style.opacity = "0";
    amount5 = 0;
    squid_amount.innerHTML = "";
    amount_squid.innerHTML = "";
    s = 0;
    checker5 = "string";

    order_squid.remove();
  } else {
    squid_amount.innerHTML = amount5;
    cost_squid.innerHTML = "&#8373;" + amount5 * 40 + ".00";
    if (amount5 === 1) {
      amount_squid.innerHTML = amount5 + "pc.";
    } else {
      amount_squid.innerHTML = amount5 + "pcs.";
    }
  }
};

add_tin = () => {
  minus_circle6.style.opacity = "1";
  amount6 = amount6 + 1;
  tin_amount.innerHTML = amount6;

  d = d + 1;

  cancel_tin.style.opacity = "1";
  cancel_tin.style.top = "5%";
  cancel_tin.style.right = "0";

  if (typeof checker6 === "string") {
    empty.innerHTML = "";
    empty.style.zIndex = -20;
    empty.style.opacity = "0";
    standard.className = "default";
    standard.style.overflow = "auto";
    //cancel_p = document.createElement("div");
    order_tin = document.createElement("div");
    food_tin = document.createElement("p");
    amount_tin = document.createElement("p");
    cost_tin = document.createElement("p");
    //cost_pine = document.createElement("p");
    //icon = document.createElement("i");

    //icon.className = "fas fa-times";
    //cancel_p.className = "entry_close";
    amount_tin.className = "food";
    food_tin.className = "food";
    cost_tin.className = "food";
    order_tin.className = "order";
    food_tin.innerHTML = "TIN-TIN.";
    cost_tin.innerHTML = "&#8373;" + amount6 * 35 + ".00";
    amount_tin.innerHTML = amount6 + "pc.";
    //cancel_p.append(icon);
    order_tin.append(cancel_tin);
    order_tin.append(amount_tin);
    order_tin.append(food_tin);
    order_tin.append(cost_tin);
    standard.append(order_tin);
    checker6 = 1;
  } else {
    amount_tin.innerHTML = amount6 + "pcs.";
    cost_tin.innerHTML = "&#8373;" + amount6 * 35 + ".00";
  }
};

subtract_tin = () => {
  amount6 = amount6 - 1;
  if (amount6 <= 0) {
    minus_circle6.style.opacity = "0";
    amount6 = 0;
    tin_amount.innerHTML = "";
    amount_tin.innerHTML = "";
    d = 0;
    checker6 = "string";

    order_tin.remove();
  } else {
    tin_amount.innerHTML = amount6;
    cost_tin.innerHTML = "&#8373;" + amount6 * 35 + ".00";
    if (amount6 === 1) {
      amount_tin.innerHTML = amount6 + "pc.";
    } else {
      amount_tin.innerHTML = amount6 + "pcs.";
    }
  }
};

add_fish = () => {
  minus_circle7.style.opacity = "1";
  amount7 = amount7 + 1;
  fish_amount.innerHTML = amount7;

  f = f + 1;

  cancel_fish.style.opacity = "1";
  cancel_fish.style.top = "5%";
  cancel_fish.style.right = "0";

  if (typeof checker7 === "string") {
    empty.innerHTML = "";
    empty.style.zIndex = -20;
    empty.style.opacity = "0";
    standard.className = "default";
    standard.style.overflow = "auto";
    //cancel_p = document.createElement("div");
    order_fish = document.createElement("div");
    food_fish = document.createElement("p");
    amount_fish = document.createElement("p");
    cost_fish = document.createElement("p");
    //cost_pine = document.createElement("p");
    //icon = document.createElement("i");

    //icon.className = "fas fa-times";
    //cancel_p.className = "entry_close";
    amount_fish.className = "food";
    food_fish.className = "food";
    cost_fish.className = "food";
    order_fish.className = "order";
    food_fish.innerHTML = "FISH BRGER.";
    cost_fish.innerHTML = "&#8373;" + amount7 * 30 + ".00";
    amount_fish.innerHTML = amount7 + "pc.";
    //cancel_p.append(icon);
    order_fish.append(cancel_fish);
    order_fish.append(amount_fish);
    order_fish.append(food_fish);
    order_fish.append(cost_fish);
    standard.append(order_fish);
    checker7 = 1;
  } else {
    amount_fish.innerHTML = amount7 + "pcs.";
    cost_fish.innerHTML = "&#8373;" + amount7 * 30 + ".00";
  }
};

subtract_fish = () => {
  amount7 = amount7 - 1;
  if (amount7 <= 0) {
    minus_circle7.style.opacity = "0";
    amount7 = 0;
    fish_amount.innerHTML = "";
    amount_fish.innerHTML = "";
    f = 0;
    checker7 = "string";

    order_fish.remove();
  } else {
    fish_amount.innerHTML = amount7;
    cost_fish.innerHTML = "&#8373;" + amount7 * 30 + ".00";
    if (amount7 === 1) {
      amount_fish.innerHTML = amount7 + "pc.";
    } else {
      amount_fish.innerHTML = amount7 + "pcs.";
    }
  }
};

add_noodles = () => {
  minus_circle8.style.opacity = "1";
  amount8 = amount8 + 1;
  noodles_amount.innerHTML = amount8;

  c = c + 1;

  cancel_noodles.style.opacity = "1";
  cancel_noodles.style.top = "5%";
  cancel_noodles.style.right = "0";

  if (typeof checker8 === "string") {
    empty.innerHTML = "";
    empty.style.zIndex = -20;
    empty.style.opacity = "0";
    standard.className = "default";
    standard.style.overflow = "auto";
    //cancel_p = document.createElement("div");
    order_noodles = document.createElement("div");
    food_noodles = document.createElement("p");
    amount_noodles = document.createElement("p");
    cost_noodles = document.createElement("p");
    //cost_pine = document.createElement("p");
    //icon = document.createElement("i");

    //icon.className = "fas fa-times";
    //cancel_p.className = "entry_close";
    amount_noodles.className = "food";
    food_noodles.className = "food";
    cost_noodles.className = "food";
    order_noodles.className = "order";
    food_noodles.innerHTML = "NOODLES SALAD.";
    cost_noodles.innerHTML = "&#8373;" + amount8 * 22 + ".00";
    amount_noodles.innerHTML = amount8 + "pc.";
    //cancel_p.append(icon);
    order_noodles.append(cancel_noodles);
    order_noodles.append(amount_noodles);
    order_noodles.append(food_noodles);
    order_noodles.append(cost_noodles);
    standard.append(order_noodles);
    checker8 = 1;
  } else {
    amount_noodles.innerHTML = amount8 + "pcs.";
    cost_noodles.innerHTML = "&#8373;" + amount8 * 22 + ".00";
  }
};

subtract_noodles = () => {
  amount8 = amount8 - 1;
  if (amount8 <= 0) {
    minus_circle8.style.opacity = "0";
    amount8 = 0;
    noodles_amount.innerHTML = "";
    amount_noodles.innerHTML = "";
    c = 0;
    checker8 = "string";

    order_noodles.remove();
  } else {
    noodles_amount.innerHTML = amount8;
    cost_noodles.innerHTML = "&#8373;" + amount8 * 22 + ".00";
    if (amount8 === 1) {
      amount_noodles.innerHTML = amount8 + "pc.";
    } else {
      amount_noodles.innerHTML = amount8 + "pcs.";
    }
  }
};

add_roco = () => {
  minus_circle9.style.opacity = "1";
  amount9 = amount9 + 1;
  roco_amount.innerHTML = amount9;

  v = v + 1;

  cancel_roco.style.opacity = "1";
  cancel_roco.style.top = "5%";
  cancel_roco.style.right = "0";

  if (typeof checker9 === "string") {
    empty.innerHTML = "";
    empty.style.zIndex = -20;
    empty.style.opacity = "0";
    standard.className = "default";
    standard.style.overflow = "auto";
    //cancel_p = document.createElement("div");
    order_roco = document.createElement("div");
    food_roco = document.createElement("p");
    amount_roco = document.createElement("p");
    cost_roco = document.createElement("p");
    //cost_pine = document.createElement("p");
    //icon = document.createElement("i");

    //icon.className = "fas fa-times";
    //cancel_p.className = "entry_close";
    amount_roco.className = "food";
    food_roco.className = "food";
    cost_roco.className = "food";
    order_roco.className = "order";
    food_roco.innerHTML = "ROCO MIX.";
    cost_roco.innerHTML = "&#8373;" + amount9 * 25 + ".00";
    amount_roco.innerHTML = amount9 + "pc.";
    //cancel_p.append(icon);
    order_roco.append(cancel_roco);
    order_roco.append(amount_roco);
    order_roco.append(food_roco);
    order_roco.append(cost_roco);
    standard.append(order_roco);
    checker9 = 1;
  } else {
    amount_roco.innerHTML = amount9 + "pcs.";
    cost_roco.innerHTML = "&#8373;" + amount9 * 25 + ".00";
  }
};

subtract_roco = () => {
  amount9 = amount9 - 1;
  if (amount9 <= 0) {
    minus_circle9.style.opacity = "0";
    amount9 = 0;
    roco_amount.innerHTML = "";
    amount_roco.innerHTML = "";
    v = 0;
    checker9 = "string";
    order_roco.remove();
  } else {
    roco_amount.innerHTML = amount9;
    cost_roco.innerHTML = "&#8373;" + amount9 * 25 + ".00";
    if (amount9 === 1) {
      amount_roco.innerHTML = amount9 + "pc.";
    } else {
      amount_roco.innerHTML = amount9 + "pcs.";
    }
  }
};

add_chicken = () => {
  minus_circle0.style.opacity = "1";
  amount0 = amount0 + 1;
  chicken_amount.innerHTML = amount0;

  b = b + 1;

  cancel_chicken.style.opacity = "1";
  cancel_chicken.style.top = "5%";
  cancel_chicken.style.right = "0";

  if (typeof checker0 === "string") {
    empty.innerHTML = "";
    empty.style.zIndex = -20;
    empty.style.opacity = "0";
    standard.className = "default";
    standard.style.overflow = "auto";
    //cancel_p = document.createElement("div");
    order_chicken = document.createElement("div");
    food_chicken = document.createElement("p");
    amount_chicken = document.createElement("p");
    cost_chicken = document.createElement("p");
    //cost_pine = document.createElement("p");
    //icon = document.createElement("i");

    //icon.className = "fas fa-times";
    //cancel_p.className = "entry_close";
    amount_chicken.className = "food";
    food_chicken.className = "food";
    cost_chicken.className = "food";
    order_chicken.className = "order";
    food_chicken.innerHTML = "CHICKEN STIR.";
    cost_chicken.innerHTML = "&#8373;" + amount0 * 35 + ".00";
    amount_chicken.innerHTML = amount0 + "pc.";
    //cancel_p.append(icon);
    order_chicken.append(cancel_chicken);
    order_chicken.append(amount_chicken);
    order_chicken.append(food_chicken);
    order_chicken.append(cost_chicken);
    standard.append(order_chicken);
    checker0 = 1;
  } else {
    amount_chicken.innerHTML = amount0 + "pcs.";
    cost_chicken.innerHTML = "&#8373;" + amount0 * 35 + ".00";
  }
};

subtract_chicken = () => {
  amount0 = amount0 - 1;
  if (amount0 <= 0) {
    minus_circle0.style.opacity = "0";
    amount0 = 0;
    chicken_amount.innerHTML = "";
    amount_chicken.innerHTML = "";
    b = 0;
    checker0 = "string";
    order_chicken.remove();
  } else {
    chicken_amount.innerHTML = amount0;
    cost_chicken.innerHTML = "&#8373;" + amount0 * 35 + ".00";
    if (amount0 === 1) {
      amount_chicken.innerHTML = amount0 + "pc.";
    } else {
      amount_chicken.innerHTML = amount0 + "pcs.";
    }
  }
};

add_vegan = () => {
  minus_circle11.style.opacity = "1";
  amount11 = amount11 + 1;
  vegan_amount.innerHTML = amount11;

  n = n + 1;

  cancel_vegan.style.opacity = "1";
  cancel_vegan.style.top = "5%";
  cancel_vegan.style.right = "0";

  if (typeof checker11 === "string") {
    empty.innerHTML = "";
    empty.style.zIndex = -20;
    empty.style.opacity = "0";
    standard.className = "default";
    standard.style.overflow = "auto";
    //cancel_p = document.createElement("div");
    order_vegan = document.createElement("div");
    food_vegan = document.createElement("p");
    amount_vegan = document.createElement("p");
    cost_vegan = document.createElement("p");
    //cost_pine = document.createElement("p");
    //icon = document.createElement("i");

    //icon.className = "fas fa-times";
    //cancel_p.className = "entry_close";
    amount_vegan.className = "food";
    food_vegan.className = "food";
    cost_vegan.className = "food";
    order_vegan.className = "order";
    food_vegan.innerHTML = "VEGAN SALAD.";
    cost_vegan.innerHTML = "&#8373;" + amount11 * 45 + ".00";
    amount_vegan.innerHTML = amount11 + "pc.";
    //cancel_p.append(icon);
    order_vegan.append(cancel_vegan);
    order_vegan.append(amount_vegan);
    order_vegan.append(food_vegan);
    order_vegan.append(cost_vegan);
    standard.append(order_vegan);
    checker11 = 1;
  } else {
    amount_vegan.innerHTML = amount11 + "pcs.";
    cost_vegan.innerHTML = "&#8373;" + amount11 * 45 + ".00";
  }
};

subtract_vegan = () => {
  amount11 = amount11 - 1;
  if (amount11 <= 0) {
    minus_circle11.style.opacity = "0";
    amount11 = 0;
    vegan_amount.innerHTML = "";
    amount_vegan.innerHTML = "";
    n = 0;
    checker11 = "string";
    order_vegan.remove();
  } else {
    vegan_amount.innerHTML = amount11;
    cost_vegan.innerHTML = "&#8373;" + amount11 * 45 + ".00";
    if (amount11 === 1) {
      amount_vegan.innerHTML = amount11 + "pc.";
    } else {
      amount_vegan.innerHTML = amount11 + "pcs.";
    }
  }
};

loginbutton.addEventListener("click", loginbox);
cancel.addEventListener("click", cancelloginpanel);
cancel1.addEventListener("click", cancelregisterpanel);
createcallbutton.addEventListener("click", registerpanel);
logincallbutton.addEventListener("click", logincallregister);
cartexit.addEventListener("click", closemenu);
cartlogo.addEventListener("click", cartmenu_popup);
cartl.addEventListener("click", cartmenu_popup);
cartl1.addEventListener("click", cartmenu_popup);
cartl2.addEventListener("click", cartmenu_popup);

//menu
pizza.addEventListener("click", pizzamenu);
burger.addEventListener("click", burgermenu);
salad.addEventListener("click", saladmenu);
close_pizza.addEventListener("click", pizza_reset);
close_burger.addEventListener("click", burger_reset);
close_salad.addEventListener("click", salad_reset);

//features
//pizza
pep_add.addEventListener("click", add_pep);
pep_minus.addEventListener("click", subtract_pep);

pine_add.addEventListener("click", add_pine);
pine_minus.addEventListener("click", subtract_pine);

bq_add.addEventListener("click", add_bq);
bq_minus.addEventListener("click", subtract_bq);

cream_add.addEventListener("click", add_cream);
cream_minus.addEventListener("click", subtract_cream);

//burger

cheese_add.addEventListener("click", add_cheese);
cheese_minus.addEventListener("click", subtract_cheese);

squid_add.addEventListener("click", add_squid);
squid_minus.addEventListener("click", subtract_squid);

tin_add.addEventListener("click", add_tin);
tin_minus.addEventListener("click", subtract_tin);

fish_add.addEventListener("click", add_fish);
fish_minus.addEventListener("click", subtract_fish);

//salad

noodles_add.addEventListener("click", add_noodles);
noodles_minus.addEventListener("click", subtract_noodles);

roco_add.addEventListener("click", add_roco);
roco_minus.addEventListener("click", subtract_roco);

chicken_add.addEventListener("click", add_chicken);
chicken_minus.addEventListener("click", subtract_chicken);

vegan_add.addEventListener("click", add_vegan);
vegan_minus.addEventListener("click", subtract_vegan);

//////////////////////////////////////

//api listeners

api_login = () => {
  cancelloginpanel();
  loginbutton.style.zIndex = -5;
  logoutbutton.style.zIndex = 1;
};

api_logout = () => {
  logoutbutton.style.zIndex = -5;
  loginbutton.style.zIndex = 1;
  cartlogo.style.zIndex = "-10";
  cartlogo.style.opacity = "0";
};

loginapibutton.addEventListener("click", () => {
  if (email_login.value.trim() !== "" && password_login.value !== "") {
    api_login();
  } else {
    notfound.style.top = "0";
    notfound.style.opacity = "1";
    setTimeout(() => {
      notfound.style.top = "";
      notfound.style.opacity = "";
    }, 3000);
  }
});

logoutbutton.addEventListener("click", api_logout);
