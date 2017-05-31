$( document ).ready(function() {
    $('#pony-form').on('submit',PonyAdapter.handlePonyCreateRequest)
    PonyAdapter.requestAllPonies()
});
