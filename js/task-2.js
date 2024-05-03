class Storage {
  #items;

  constructor(items) {
    this.#items = items;
  }
  getItems() {
    return this.#items;
  }
  addItem(newItem) {
    this.#items.push(newItem);
  }
  removeItem(item) {
    const idx = this.#items.indexOf(item);
    if (idx === -1) return;

    this.#items.splice(idx, 1);
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
