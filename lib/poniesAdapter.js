let PonyAdapter = {
  ponies_url: 'http://localhost:3000/api/v1/ponies',

  handlePonyCreateRequest: function(event) {
      event.preventDefault()
      let ponyName = $(' #pony-name ').val()
      let ponyImage = $(' #pony-image ').val()
      let pony = {
        pony: {
          name: ponyName,
          image:  ponyImage
        }
      }
      PonyAdapter.createNewPony(pony)
    },

  createNewPony: function (pony) {
    var data = pony
    $.ajax({
    url: this.ponies_url,
    method:'POST',
    data: data
  }).done(function(data) {
    let pony = new Pony(data.name, data.image)
    $(' #pony-name ').val("")
    $(' #pony-image ').val("")
    $('.pony-frame').append(pony.render())
  });
  },

  requestAllPonies: function () {
    $.ajax({
      url: this.ponies_url
    }).done(function(data) {
      let ponies = data.map( (p) => {return new Pony(p.name,p.image)} )
      let ponies_view = new PoniesList(ponies)
      $('.pony-frame').append(ponies_view.render())
    });
  }
}
