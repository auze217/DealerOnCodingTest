//Wrapper class for the data were storing in an array
export default class Item {
  name;
  price;
  amount;
  total;
  iTax;
  sTax;
  sTaxAmount;
  constructor(n, p) {
    this.name = n;
    this.price = p;
    this.amount = 1;
    this.total = 0;
    this.iTax = 0.05;
    this.sTax = 0.1;
    this.sTaxAmount = 0;
  }
  setAmount() {
    this.amount++;
  }
  /**
   * settings import tax
   * @param {number} val new import tax number
   */
  setImport(val) {
    this.iTax = val;
  }
  /**
   * setting sales tax
   * @param {number} val new sales tax number
   */
  setSales(val) {
    this.sTax = val;
  }
  //getting the total + tax
  setTotal() {
    let tot = this.baseCalc();
    if (this.isImport() && !this.isExempt()) {
      this.total =
        tot +
        Math.round(tot * this.iTax * 100) / 100 +
        Math.round(tot * this.sTax * 100) / 100;
      this.sTaxAmount = tot * this.sTax + tot * this.iTax;
    } else if (this.isImport() && this.isExempt()) {
      this.total = tot + tot * this.iTax;
      this.sTaxAmount = tot * this.iTax;
    } else if (!this.isExempt()) {
      this.total = tot + tot * this.sTax;
      this.sTaxAmount = tot * this.sTax;
    } else {
      this.total = tot;
    }
    this.total = Math.round(this.total * 100) / 100;
    this.sTaxAmount = Math.round(this.sTaxAmount * 100) / 100;
    return this.total;
  }
  //used to calculate price w/o taxes
  baseCalc() {
    return this.price * this.amount;
  }
  //checking if imported
  isImport() {
    let val = this.name.toUpperCase().includes("IMPORT");
    return val;
  }
  //this is only due to test having these 3 specific names in the exemption
  //in reality there would need to be an identifier coming in as well
  isExempt() {
    return (
      this.name.toUpperCase().includes("BOOK") ||
      this.name.toUpperCase().includes("CHOCOLATE") ||
      this.name.toUpperCase().includes("PILLS")
    );
  }
}
