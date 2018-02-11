$(function() {
  $('.moon-slider').children('div').addClass('moon-child');
  $('.moon-child').first().addClass('moon-active');
  $('.moon-child').first().addClass('moon-first');
  $('.moon-child').last().addClass('moon-last');

  $('.moon-next').on('click', function() {
    if($('.moon-active').hasClass('moon-last')) {
      $('.moon-child').first().addClass('moon-active');
      $('.moon-child').last().removeClass('moon-active');
    } else {
      $('.moon-active').next().addClass('moon-active');
      $('.moon-active').prev().removeClass('moon-active');
    }
  });


  $('.moon-prev').on('click', function() {
    if($('.moon-active').hasClass('moon-first')) {
      $('.moon-child').last().addClass('moon-active');
      $('.moon-child').first().removeClass('moon-active');
    } else {
      $('.moon-active').prev().addClass('moon-active');
      $('.moon-active').next().removeClass('moon-active');
    }
  });


});
