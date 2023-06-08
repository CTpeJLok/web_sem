// 1
let user = {
  name: "Джон",
  age: 30,
};

user.sayHi = function () {
  console.log("1: Привет!");
};

user.sayHi();

// 2
let client = {
  name: "Вася",
  age: 20,
  phone: "+79999999999",
  card: "3672 **** **** 4372",
  address: "Moscow",
};

console.log("2: " + client.name + " " + client.age + " " + client.address);
console.log(client);
document.querySelector('.result').innerHTML = client.name;

// 3
function User(name, age) {
  this.name = name;
  this.age = age;
}

function Restaurant(name, location) {
  this.name = name;
  this.location = location;
}

function Order(id, user, price, restaurant) {
  this.id = id;
  this.user = user;
  this.price = price;
  this.restaurant = restaurant;
}

let user1 = new User("Андрей", 20);
let user2 = new User("Катя", 18);
let user3 = new User("Петя", 21);

let restaurant1 = new Restaurant("McDonalds", "USA");
let restaurant2 = new Restaurant("Burger King", "USA");
let restaurant3 = new Restaurant("KFC", "UK");

let order1 = new Order(1, user2, 10, restaurant1);
let order2 = new Order(2, user3, 20, restaurant2);
let order3 = new Order(3, user1, 30, restaurant3);

console.log('3:');
console.log(
  `Заказ #${order1.id} на сумму ${order1.price} долларов был сделан пользователем ${order1.user.name} в ресторане ${order1.restaurant.name}.`
);

order2.info = function () {
  console.log(
    `Заказ #${this.id} на сумму ${this.price} долларов был сделан пользователем ${this.user.name} в ресторане ${this.restaurant.name}.`
  );
};
order2.info();

// 4
let group = [
  new User("Андрей", 20),
  new User("Вася", 19),
  new User("Петя", 17),
  new User("Иван", 25),
];

console.log("4:");
group.forEach((item) => {
  console.log(item.name);
});

console.log(group);

// 5
let student = new (function () {
  this.name = "Федор";
  this.age = 18;
})();

console.log("5:");
console.log(student);
