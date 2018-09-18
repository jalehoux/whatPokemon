$("#send").on("submit", (event) => {
  event.preventDefault();
  $("#loadMe").modal({
    backdrop: "static",
    keyboard: false,
    show: true
  });
  var data = $('#send').serializeArray();
  $.post('/api/pokemon', data, (response) => {
    console.log(response);
  })
});