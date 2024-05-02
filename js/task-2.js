class Storage {
  constructor(items) {
    this.items = items;
  }
  getItems() {
    return this.items;
  }
  addItem(newItem) {
    this.items.push(newItem);
  }
  removeItem(item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}

const testTask2 = () => {
  document.getElementById('result').innerHTML = '';

  const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);

  let tt = storage.getItems(); // ["Nanitoids", "Prolonger", "Antigravitator"]
  console.log(tt);
  logWindow.log(tt);

  storage.addItem('Droid');
  tt = storage.getItems(); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
  console.log(tt);
  logWindow.log(tt);

  storage.removeItem('Prolonger');
  tt = storage.getItems(); // ["Nanitoids", "Antigravitator", "Droid"]
  console.log(tt);
  logWindow.log(tt);
};
