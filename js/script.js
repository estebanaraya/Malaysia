$('a').on('click', jump);

function jump(event) {
  event.preventDefault();

  // GET THE LINK WE CLICKED ON
  var $currentTarget = $(event.currentTarget);

  // GOT THE NAME OF THE ID SPECIFIC TO THE TARGET
  var targetId = $currentTarget.attr('href');

  // MEASURE DISTANCE FROM ID TO TOP OF DOCUMENT
  var offsetTop = $(targetId).offset().top;

  // ANIMATE PAGE TO SCROLLTOP PROPERTY
  $('html, body').animate({
    scrollTop: offsetTop
  }, 500);
}
/*----Scroll to----*/
var viewportHeight = $(window).height();
$(function() {
  //caches a jQuery object containing the header element
  var header = $("#nav");
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= viewportHeight) {
      header.removeClass('nav').addClass("navScroll");
    } else {
      header.removeClass("navScroll").addClass('nav');
    }
  });
});
/*---ArrowNav---*/
var viewportHeight = $(window).height();
$(function() {
  //caches a jQuery object containing the header element
  var header = $("#arrowTop");
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= viewportHeight) {
      header.removeClass('arrow-top').addClass("arrow-topH");
    } else {
      header.removeClass("arrow-topH").addClass('arrow-top');
    }
  });
});
/*var previousScroll = 0;
$(window).scroll(function(event) {
  var scroll = $(this).scrollTop();
  if (scroll > previousScroll) {
    header.removeClass('nav').addClass("navScroll");
    header.removeClass('arrow-top').addClass("arrow-topH");
  } else {
    header.removeClass("navScroll").addClass('nav');
    header.removeClass("arrow-topH").addClass('arrow-top');
  }
  previousScroll = scroll;
});*/
