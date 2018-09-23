$("#send").on("submit", (event) => {
  event.preventDefault();
  $("#loadMe").modal({
    backdrop: "static",
    keyboard: false,
    show: true
  });
  var data = $('#send').serializeArray();
  var values = [];
  for(i=0;i<data.length;i++){
    values.push(parseInt(data[i].value));
  }
  $.post('/api/pokemon', {sent:values}, (response) => {
    $(".loader-txt").hide();
    var name = response.name;
    var photo = response.photo;
    $('#name').html(name);
    var img = $("<img>").attr({'src':photo,'height': 200, 'width': 180});
    $('#img').empty().append(img);
  })
});