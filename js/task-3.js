class StringBuilder {
  #value;

  constructor(baseValue) {
    this.#value = baseValue;
  }
  padStart(value) {
    this.#value = value + this.#value;
  }
  padEnd(value) {
    this.#value = this.#value + value;
  }
  padBoth(value) {
    this.padStart(value);
    this.padEnd(value);
  }
  getValue() {
    return this.#value;
  }
}

const testTask3 = () => {
  document.getElementById('result').innerHTML = '';
  const builder = new StringBuilder('.');

  let tt = builder.getValue(); // "."
  console.log(tt);
  logWindow.log(tt);
  builder.padStart('^');

  tt = builder.getValue(); // "^."
  console.log(tt);
  logWindow.log(tt);
  builder.padEnd('^');

  tt = builder.getValue(); // "^.^"
  console.log(tt);
  logWindow.log(tt);
  builder.padBoth('=');

  tt = builder.getValue(); // "=^.^="
  console.log(tt);
  logWindow.log(tt);
};
