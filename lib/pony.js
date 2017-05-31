class Pony {
  constructor(name, image) {
    this.name = name;
    this.image = image;
  }

  render() {
    return `<div class='pony'><div class='pony-image-frame'><img class='pony-image' src='${this.image}'></div><h3 align='center'>${this.name}</h3></div>`
  }
}
