import fs from "fs";
import Cart from "./cart.js";
import Item from "./item.js";
function salesTest(iFile) {
  fs.readFile(iFile, (err, res) => {
    if (!err) {
      //remove \r escape characters and splitting string by \n characters
      const instructions = res.toString().replace(/\r|\r/g, "").split("\n");
      var cart = new Cart();
      instructions.map((ins) => {
        const tempI = ins.split(" "); // since at is always 2nd to last just going to ignore
        var name = tempI.filter((i) => isNaN(i)).join(" ");
        name = name.substring(0, name.length - 3); // removing numbers then removing at
        let item = new Item(name, parseFloat(tempI[tempI.length - 1]));
        cart.add(item);
      });
      cart.calculate();
      console.log(cart.toString());
    }
  });
}
//tests and original output
salesTest("./input.txt");
salesTest("./input2.txt");
salesTest("./input3.txt");
