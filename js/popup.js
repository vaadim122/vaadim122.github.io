$('form').submit(function(e) {
  var empty = $(this).parent().find("input").filter(function() {
    return this.value === "";
  });
  //  var empty_two = $(this).parent().find("select").filter(function() {
  //   return this.value === "";
  // });
  if (!empty.length) {
    //Если все графы заполнены, то показываем popup
    $('.popup').show();
    //очищаем все данные текстовых полей, кроме кнопок
    $('form input').not(':button, :submit').val('');
    $('form select').val('');
  }
  e.preventDefault();
});