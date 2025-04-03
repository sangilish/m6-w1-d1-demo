const Laptop = require("./laptop");
const Tablet = require("./tablet");

const gadget = {
  laptop: Laptop,
  tablet: Tablet
};

module.exports = {
  createGadget(type, attributes) {
    const GadgetType = gadget[type];
    return new GadgetType(attributes);
  }
};