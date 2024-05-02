const customer = {
  username: 'Mango',
  balance: 24000,
  discount: 0.1,
  orders: ['Burger', 'Pizza', 'Salad'],
  // Change code below this line
  getBalance() {
    return this.balance;
  },
  getDiscount() {
    return this.discount;
  },
  setDiscount(value) {
    this.discount = value;
  },
  getOrders() {
    return this.orders;
  },
  addOrder(cost, order) {
    this.balance -= cost - cost * this.discount;
    this.orders.push(order);
  },
  // Change code above this line
};

const testTask1 = () => {
  document.getElementById('result').innerHTML = '';

  customer.setDiscount(0.15);

  let tt = customer.getDiscount(); // 0.15
  console.log(tt);
  logWindow.log(tt);

  customer.addOrder(5000, 'Steak');

  tt = customer.getBalance(); // 19750
  console.log(tt);
  logWindow.log(tt);

  tt = customer.getOrders(); // ["Burger", "Pizza", "Salad", "Steak"]
  console.log(tt);
  logWindow.log(tt);
};
