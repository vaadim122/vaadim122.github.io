var socialMediaOne = {
  twitter: 'https://twitter.com/?lang=ru',
  youtube: 'https://www.youtube.com/',
  facebook : 'http://facebook.com'
};

var socialList = function() {
  var output = '<ul>',
  myList = document.querySelectorAll('.menu__social');

  for (var key in arguments[0]) {
    output += '<li><a target="_blank" href="' + socialMediaOne[key] + '">' +
      '<i class="fa fa-' + key + '"></i></a></li>';
  }
  output += '</ul>';
  
  for (var i = myList.length - 1; i >= 0; i--) {
    myList[i].innerHTML = output;
  };
}(socialMediaOne);