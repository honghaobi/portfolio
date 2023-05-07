var G = {
  rotating: false,
  rotateNum: {
    x: 0,
    y: 0,
    z: 0
  }
};

function cubeRotate() {
  Math.range = function(min, max) {
    return min + (Math.random() * (max - min));
  };
  var randNumbX = Math.range(-0.01, 0.01);
  var randNumbY = Math.range(-0.01, 0.01);
  var randNumbZ = Math.range(-0.01, 0.01);
  G.rotating = true;
  setTimeout(function() {
    G.rotating = false;
    G.rotateNum = {
      x: randNumbX,
      y: randNumbY,
      z: randNumbZ
    };
  }, 1000);
}

$(window).load(function() {
  $('.loader-page').addClass('animated fadeOut').hide();
  lazyload();
  showHomePage();
});

$('#sidebar ul li').on('click', function(event) {
  $('#cube').attr('class', $(this).children('span').children('div').attr('class'));
  if ($('#cube').attr('class') === 'show-bottom') {
    showHomePage();
  } else if ($('#cube').attr('class') === 'show-left') {
    showWorkPage();
  } else if ($('#cube').attr('class') === 'show-top') {
    showAboutPage();
  } else if ($('#cube').attr('class') === 'show-back') {
    showSkillPage();
  } else if ($('#cube').attr('class') === 'show-right') {
    showContactPage();
  }
});

$('#cube .bottom').on('click', function(event) {
  $('#cube').attr('class', 'show-left');
  showWorkPage();
});

$('#cube .left').on('click', function(event) {
  $('#cube').attr('class', 'show-top');
  showAboutPage();
});

$('#cube .top').on('click', function(event) {
  $('#cube').attr('class', 'show-back');
  showSkillPage();
});

$('#cube .back').on('click', function(event) {
  $('#cube').attr('class', 'show-right');
  showContactPage();
});

$('#cube .right').on('click', function(event) {
  $('#cube').attr('class', 'show-front');
  showHomePage();
});

$('#cube .front').on('click', function(event) {
  $('#cube').attr('class', 'show-bottom');
  showHomePage();
});

function showHomePage() {
  cubeRotate();
  $('.work-page, .about-page, .skills-page, .contact-page').hide();
}

function showWorkPage() {
  cubeRotate();
  $('.about-page, .skills-page, .contact-page, .cv-show, .ripld-show, .riplw-show, .up-show, .wedding-show, .epac-show, .ymsw-show').hide();
  $('.work-page').show();
  $('.work-page-menu ul li').siblings().removeClass().first().addClass('cv-title');
  $('.cv').siblings().hide();
  $('.cv').removeClass('fadeOutDown').addClass('animated fadeInDown').show();
  $('.work-page-menu').addClass('animated fadeInUp');
}

function showAboutPage() {
  cubeRotate();
  $('.work-page, .skills-page, .contact-page').hide();
  $('.about-page').show();
  $('.about-page-img').addClass('animated fadeInLeft');
  $('.about-page-text').addClass('animated fadeInRight');
}

function showSkillPage() {
  cubeRotate();
  $('.work-page, .about-page, .contact-page').hide();
  $('.skills-page').show();
  $('.d-skill, .p-skill').addClass('animated zoomIn');
}

function showContactPage() {
  cubeRotate();
  $('.work-page, .about-page, .skills-page').hide();
  $('.contact-page').show();
  $('.sl, .st, .sr, .sb').addClass('animated fadeIn');
  Contact();
}

$('.work-page-menu ul li').on('mouseenter', function(event) {
  $(this).addClass('work-menu-hover');
});

$('.work-page-menu ul li').on('mouseleave', function(event) {
  $(this).removeClass('work-menu-hover');
});

$('.work-page-menu ul li').on('click', function(event) {
  var selected = $(this);

  selected.siblings().removeClass();
  if (selected.html() === 'CLEARVOICE') {
    selected.addClass('cv-title');
    $('.cv').siblings().removeClass('fadeInDown').addClass('fadeOutDown');
    $('.cv').removeClass('fadeOutDown').addClass('animated fadeInDown').show();
  } else if (selected.html() === 'RIPL DESIGNS') {
    selected.addClass('ripld-title');
    $('.ripld').siblings().removeClass('fadeInDown').addClass('fadeOutDown');
    $('.ripld').removeClass('fadeOutDown').addClass('animated fadeInDown').show();
  } else if (selected.html() === 'RIPL WEB APP') {
    selected.addClass('riplw-title');
    $('.riplw').siblings().removeClass('fadeInDown').addClass('fadeOutDown');
    $('.riplw').removeClass('fadeOutDown').addClass('animated fadeInDown').show();
  } else if (selected.html() === 'WEDDING') {
    selected.addClass('wedding-title');
    $('.wedding').siblings().removeClass('fadeInDown').addClass('fadeOutDown');
    $('.wedding').removeClass('fadeOutDown').addClass('animated fadeInDown').show();
  } else if (selected.html() === 'UP UP &amp; AWAY') {
    selected.addClass('up-title');
    $('.up').siblings().removeClass('fadeInDown').addClass('fadeOutDown');
    $('.up').removeClass('fadeOutDown').addClass('animated fadeInDown').show();
  } else if (selected.html() === 'EPAC') {
    selected.addClass('epac-title');
    $('.epac').siblings().removeClass('fadeInDown').addClass('fadeOutDown');
    $('.epac').removeClass('fadeOutDown').addClass('animated fadeInDown').show();
  } else if (selected.html() === 'YMSW') {
    selected.addClass('ymsw-title');
    $('.ymsw').siblings().removeClass('fadeInDown').addClass('fadeOutDown');
    $('.ymsw').removeClass('fadeOutDown').addClass('animated fadeInDown').show();
  }
});

$('.arrow').on('click', function(event) {
  $('.work-page').children().animate({
    scrollTop: 0
  }, 'slow');
});

$('.cv').on('click', function(event) {
  $('.cv-show').removeClass('animated slideOutLeft').addClass('animated slideInRight').show();
  $('.cv-close, .arrow').insertBefore('.work-page').addClass('animated slideInUp');
});
$('.cv-close').on('click', function(event) {
  $('.cv-show').removeClass('animated slideInRight').addClass('animated slideOutLeft');
  $('.cv-close, .arrow').appendTo('.up-show');
});
$('.ripld').on('click', function(event) {
  $('.ripld-show').removeClass('animated slideOutLeft').addClass('animated slideInRight').show();
  $('.ripld-close, .arrow').insertBefore('.work-page').addClass('animated slideInUp');
});
$('.ripld-close').on('click', function(event) {
  $('.ripld-show').removeClass('animated slideInRight').addClass('animated slideOutLeft');
  $('.ripld-close, .arrow').appendTo('.up-show');
});
$('.riplw').on('click', function(event) {
  $('.riplw-show').removeClass('animated slideOutLeft').addClass('animated slideInRight').show();
  $('.riplw-close, .arrow').insertBefore('.work-page').addClass('animated slideInUp');
});
$('.riplw-close').on('click', function(event) {
  $('.riplw-show').removeClass('animated slideInRight').addClass('animated slideOutLeft');
  $('.riplw-close, .arrow').appendTo('.up-show');
});
$('.wedding').on('click', function(event) {
  $('.wedding-show').removeClass('animated slideOutLeft').addClass('animated slideInRight').show();
  $('.wedding-close, .arrow').insertBefore('.work-page').addClass('animated slideInUp');
});
$('.wedding-close').on('click', function(event) {
  $('.wedding-show').removeClass('animated slideInRight').addClass('animated slideOutLeft');
  $('.wedding-close, .arrow').appendTo('.up-show');
});
$('.up').on('click', function(event) {
  $('.up-show').removeClass('animated slideOutLeft').addClass('animated slideInRight').show();
  $('.up-close, .arrow').insertBefore('.work-page').addClass('animated slideInUp');
});
$('.up-close').on('click', function(event) {
  $('.up-show').removeClass('animated slideInRight').addClass('animated slideOutLeft');
  $('.up-close, .arrow').appendTo('.up-show');
});
$('.epac').on('click', function(event) {
  $('.epac-show').removeClass('animated slideOutLeft').addClass('animated slideInRight').show();
  $('.epac-close, .arrow').insertBefore('.work-page').addClass('animated slideInUp');
});
$('.epac-close').on('click', function(event) {
  $('.epac-show').removeClass('animated slideInRight').addClass('animated slideOutLeft');
  $('.epac-close, .arrow').appendTo('.ng-show');
});
$('.ymsw').on('click', function(event) {
  $('.ymsw-show').removeClass('animated slideOutLeft').addClass('animated slideInRight').show();
  $('.ymsw-close, .arrow').insertBefore('.work-page').addClass('animated slideInUp');
});
$('.ymsw-close').on('click', function(event) {
  $('.ymsw-show').removeClass('animated slideInRight').addClass('animated slideOutLeft');
  $('.ymsw-close, .arrow').appendTo('.ng-show');
});

$('.resume-link').on('click', function(event) {
  $('.resume-modal').addClass('resume-modal-show');
});

$('.resume-modal-close-button').on('click', function(event) {
  $('.resume-modal').removeClass('resume-modal-show');
})
