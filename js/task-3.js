class StringBuilder {
  constructor(baseValue) {
    this.value = baseValue;
  }
  padStart(value) {
    this.value = value + this.value;
  }
  padEnd(value) {
    this.value = this.value + value;
  }
  padBoth(value) {
    this.padStart(value);
    this.padEnd(value);
  }
  getValue() {
    return this.value;
  }
}

const builder = new StringBuilder('.');

console.log(builder.getValue()); // "."
builder.padStart('^');
console.log(builder.getValue()); // "^."
builder.padEnd('^');
console.log(builder.getValue()); // "^.^"
builder.padBoth('=');
console.log(builder.getValue()); // "=^.^="
