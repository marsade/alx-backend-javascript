export default class Airport {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  get [Symbol.toStringTag]() {
    return this._code;
  }
}
