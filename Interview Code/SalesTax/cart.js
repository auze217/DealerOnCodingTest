import Item from "./item.js";
//wrapper class for the array thats storing items
export default class Cart {
  sCart;
  total;
  sTaxTotal;
  constructor() {
    this.sCart = [];
    this.total = 0;
    this.sTaxTotal = 0;
  }
  /**
   * adding item to array if its not in there, if it is
   * then increment that items amount variable
   * @param {Item} i shopping item
   */
  add(i) {
    if (typeof i == "object") {
      if (!this.includes(i)) {
          this.sCart.push(i);
      }
      return true;
    }
    return false;
  }
  /**
   * checking to see if the item is already in the array
   * @param {Item} i item 
   * arrays own includes method wasnt distinguishing the 2 books so
   * I made my own method.
   */
  includes(i) {
      let check = this.sCart.filter(item => item.name.toUpperCase() === i.name.toUpperCase());
      if(check.length > 0) 
        check[0].setAmount(); // incrementing the amount variable
      return check.length > 0;
  }
  //gets the total of each 
  calculate() {
    this.total = 0;
    this.sTaxTotal = 0;
    this.sCart.map(item => {
        this.total += item.setTotal();
        this.sTaxTotal += item.sTaxAmount;
    })
    this.total = Math.round(this.total * 100) / 100;
    this.sTaxTotal = Math.round(this.sTaxTotal * 100) / 100;

  }
  //setting the output to look as the specs demand
  toString() {
      var output = '';
      this.sCart.map(item => {
        let sub = `${item.name}: ${Math.round(item.total * 100)/ 100}`;
        if ( item.amount > 1) {
            sub += " (" + `${item.amount} @ ${item.price})`;
        }
        sub += "\n";
        output += sub;
      })
      output += `Sales Tax: ${this.sTaxTotal}\nTotal: ${this.total}\n`
      return output;
  }
}
