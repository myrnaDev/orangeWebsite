jQuery(document).ready(function ($) {

  // HAMBURGER MENU ANIMATION
  $('#toggle').click(function () {
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
  });

  $(".fullsmenu").click(function () {

    if ($('#overlay').hasClass('open')) {
      $('#overlay').removeClass('open');
      $('#toggle').removeClass('active')
    }
  });

  // SCROLL FUNCTION
  var sectionIds = {};

  $(".row-nav").each(function () {
    var $this = $(this);
    sectionIds[$this.attr("id")] = $this.first().offset().top - 120;
  });

  var count2 = 0;
  $(window).scroll(function (event) {

    var scrolled = $(this).scrollTop();

    //If it reaches the top of the row, add an active class to it
    $(".row-nav").each(function () {

      var $this = $(this);

      if (scrolled >= $this.first().offset().top - 120) {
        $(".row-nav").removeClass("active");
        $this.addClass("active");

        $(".animation").removeClass('animationActive');
        $this.find(".animation").addClass('animationActive');

      }
    });

    //when reaches the row, also add a class to the navigation
    for (key in sectionIds) {
      if (scrolled >= sectionIds[key]) {
        $(".nav-btn").removeClass("active");
        var c = $("[data-row-id=" + key + "]");
        c.addClass("active");

        var i = c.index();
        $('#nav-indicator').css('left', i * 100 + 'px');
      }
    }

    if (scrolled > count2) { count2++; }
    else { count2--; }

    count2 = scrolled;
  });

  // NAVIGATION
  $(".nav-btn").click(function () {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");

    var i = $(this).index();
    $('#nav-indicator').css('left', i * 100 + 'px');

    var name = $(this).attr("data-row-id");
    var id = "#" + name;
    var top = $(id).first().offset().top - 60;
    $('html, body').animate({ scrollTop: top + 'px' }, 300);

  });

  // TOP
  $('#top').click(function () {
    $('html, body').animate({ scrollTop: '0px' }, 300);
  });

  // PORTFOLIO
  var Shuffle = window.Shuffle;
  var element = document.querySelector('.my-shuffle-container');
  var sizer = element.querySelector('.my-sizer-element');

  var shuffleInstance = new Shuffle(element, {
    itemSelector: '.picture-item',
    sizer: sizer
  });
  $("#all").on("click", function (e) {
    $('.orangetext').removeClass('orangebuttonactive');
    $(this).addClass('orangebuttonactive');
    e.preventDefault();
    shuffleInstance.filter();
  });
  $("#btn-laser").on("click", function (e) {
    $('.orangetext').removeClass('orangebuttonactive');
    $(this).addClass('orangebuttonactive');
    e.preventDefault();
    shuffleInstance.filter('laser');
  });
  $("#btn-router").on("click", function (e) {
    $('.orangetext').removeClass('orangebuttonactive');
    $(this).addClass('orangebuttonactive');
    e.preventDefault();
    shuffleInstance.filter('router');
  });

  // HOVER PORTFOLIO ORANGE INFO 
  $('.aspect').mouseenter(function () {
    $(this).find("span").fadeIn(300);
  }).mouseleave(function () {
    $(this).find("span").fadeOut(300);
  })

  // FANCYBOX
  $('[data-fancybox]').fancybox({
    animationEffect: "fade"
  });
  $("a.fancybox").fancybox();

  // FORM RADIO BUTTON
  $("#rut").hide();
  $(".customform").addClass('customcheck');
  $("input[type='radio']").click(function () {
    var radioValue = $("input#radio2:checked").val();
    if (radioValue) {
      $("#rut").show();
      $(".customform").removeClass('customcheck');
    } else {
      $("#rut").hide();
      $(".customform").addClass('customcheck');
    }
  });

});