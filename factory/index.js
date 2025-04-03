const factory = require("./gadgetFactory");

const myLaptop = factory.createGadget("laptop", {
  ram: 8,
  ssd: 256,
  name: "MacBook Air"
});

const myTablet = factory.createGadget("tablet", {
  ram: 4,
  hdd: 128,
  network: "WiFi",
  name: "iPad"
});

console.log(myLaptop);
console.log(myTablet);