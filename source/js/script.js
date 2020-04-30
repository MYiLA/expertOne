'use strict';
(function () {
// кастомные селекты

var choiceLang = new Choices('.expert-one .menu__lang', {
  searchChoices: false,
  shouldSort: false,
  sorter: function() {
   return false
 }
});

//открыть/закрыть меню

$('.expert-one .header__burger').on('click', function () {
  $('.expert-one .header').toggleClass('active');
  $('.expert-one').toggleClass('no-scroll');
})

})();