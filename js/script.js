$(function(){
  $('#menu_button').on('click', function(){
    $('.nav_container').toggleClass('active')
    $('header').toggleClass('active')
    $('main').toggleClass('active')
  });

  $('.nav_container li').on('click', function(){
    var nav = $(this).attr('rel');
    $('.section.active').fadeOut(1000, function(){
      $(this).removeClass('active');
      $('.'+ nav + '.section').fadeIn(1000, function(){
        $(this).addClass('active');
      });
    });
  });
});
