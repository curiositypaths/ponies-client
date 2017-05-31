class PoniesList {
  constructor(ponies) {
    this.poniesObjs = ponies;
  }

  render() {
    let ponies = this.poniesObjs.map( (pony) => {return pony.render()} )
    return `<div class='pony-cotainer'>${ ponies }</div>`
  }
}
