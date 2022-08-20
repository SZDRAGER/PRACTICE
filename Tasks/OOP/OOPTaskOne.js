const make = (numer,denom) => ({
  numer: numer,
  denom: denom,
  setNumer(newNumer) {
    return this.numer = newNumer;
  },
  setDenom(newDenom) {
    return this.denom = newDenom;
  },
  getNumer() {
    return this.numer;
  },
  getDenom() {
    return this.denom;
  },
  toString() {
    return `${this.numer}/${this.denom}`;
  },
  add(anotherRat) {
    const newNumer = this.numer * anotherRat.getDenom() + this.denom * anotherRat.getNumer();
    const newDenom = this.denom * anotherRat.getDenom();
    return make(newNumer, newDenom);
  }
});

export default make;