$(window).load(function() {
  $('.loader-page').addClass('animated fadeOut').hide();
  showHomePage();
});

$('#sidebar ul li').on('click', function(event){

  $('#cube').attr('class',$(this).children('span').children('div').attr('class'));

  if ($('#cube').attr('class')==='show-bottom') {
    showHomePage();
  } else if ($('#cube').attr('class')==='show-left') {
    showWorkPage();
  } else if ($('#cube').attr('class')==='show-top') {
    showAboutPage();
  } else if ($('#cube').attr('class')==='show-back') {
    showSkillPage();
  } else if ($('#cube').attr('class')==='show-right') {
    showContactPage();
  }
});

$('#cube .bottom').on('click', function(event) {
  $('#cube').attr('class','show-left');
  showWorkPage();
});

$('#cube .left').on('click', function(event) {
  $('#cube').attr('class','show-top');
  showAboutPage();
});

$('#cube .top').on('click', function(event) {
  $('#cube').attr('class','show-back');
  showSkillPage();
});

$('#cube .back').on('click', function(event) {
  $('#cube').attr('class','show-right');
  showContactPage();
});

$('#cube .right').on('click', function(event) {
  $('#cube').attr('class','show-front');
  showHomePage();
});

$('#cube .front').on('click', function(event) {
  $('#cube').attr('class','show-bottom');
  showHomePage();
});

function showHomePage() {
  $('.work-page, .about-page, .skills-page, .contact-page').hide();
}

function showWorkPage() {
  $('.about-page, .skills-page, .contact-page, .up-show, .ng-show, .epac-show, .vol-show, .ymsw-show').hide();
  $('.work-page').show();
  $('.work-page-menu ul li').siblings().removeClass().first().addClass('up-title');
  $('.up').siblings().hide();
  $('.up').removeClass('fadeOutDown').addClass('animated fadeInDown').show();
  $('.work-page-menu').addClass('animated fadeInUp');
}

function showAboutPage() {
  $('.work-page, .skills-page, .contact-page').hide();
  $('.about-page').show();
  $('.about-page-img').addClass('animated fadeInLeft');
  $('.about-page-text').addClass('animated fadeInRight');
}

function showSkillPage() {
  $('.work-page, .about-page, .contact-page').hide();
  $('.skills-page').show();
  $('.d-skill, .p-skill').addClass('animated zoomIn');
}

function showContactPage() {
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
  if (selected.html() === 'UP UP &amp; AWAY') {
    selected.addClass('up-title');
    $('.up').siblings().removeClass('fadeInDown').addClass('fadeOutDown');
    $('.up').removeClass('fadeOutDown').addClass('animated fadeInDown').show();
  } else if (selected.html() === 'NEIGHBORGOOD') {
    selected.addClass('ng-title');
    $('.ng').siblings().removeClass('fadeInDown').addClass('fadeOutDown');
    $('.ng').removeClass('fadeOutDown').addClass('animated fadeInDown').show();
  } else if (selected.html() === 'EPAC') {
    selected.addClass('epac-title');
    $('.epac').siblings().removeClass('fadeInDown').addClass('fadeOutDown');
    $('.epac').removeClass('fadeOutDown').addClass('animated fadeInDown').show();
  } else if (selected.html() === 'VOLUNTOLD') {
    selected.addClass('vol-title');
    $('.vol').siblings().removeClass('fadeInDown').addClass('fadeOutDown');
    $('.vol').removeClass('fadeOutDown').addClass('animated fadeInDown').show();
  } else if (selected.html() === 'NERDFLIRT') {
    selected.addClass('nf-title');
    $('.nf').siblings().removeClass('fadeInDown').addClass('fadeOutDown');
    $('.nf').removeClass('fadeOutDown').addClass('animated fadeInDown').show();
  } else if (selected.html() === 'YMSW') {
    selected.addClass('ymsw-title');
    $('.ymsw').siblings().removeClass('fadeInDown').addClass('fadeOutDown');
    $('.ymsw').removeClass('fadeOutDown').addClass('animated fadeInDown').show();
  }
});

$('.arrow').on('click', function(event) {
  $('.work-page').children().animate({ scrollTop: 0 }, 'slow');
});

$('.up').on('click', function(event) {
  $('.up-show').removeClass('animated slideOutLeft').addClass('animated slideInRight').show();
  $('.up-close, .arrow').insertBefore('.work-page').addClass('animated slideInUp');
});
$('.up-close').on('click', function(event) {
  $('.up-show').removeClass('animated slideInRight').addClass('animated slideOutLeft');
  $('.up-close, .arrow').appendTo('.up-show');
});
$('.ng').on('click', function(event) {
  $('.ng-show').removeClass('animated slideOutLeft').addClass('animated slideInRight').show();
  $('.ng-close, .arrow').insertBefore('.work-page').addClass('animated slideInUp');
});
$('.ng-close').on('click', function(event) {
  $('.ng-show').removeClass('animated slideInRight').addClass('animated slideOutLeft');
  $('.ng-close, .arrow').appendTo('.ng-show');
});
$('.epac').on('click', function(event) {
  $('.epac-show').removeClass('animated slideOutLeft').addClass('animated slideInRight').show();
  $('.epac-close, .arrow').insertBefore('.work-page').addClass('animated slideInUp');
});
$('.epac-close').on('click', function(event) {
  $('.epac-show').removeClass('animated slideInRight').addClass('animated slideOutLeft');
  $('.epac-close, .arrow').appendTo('.ng-show');
});
$('.vol').on('click', function(event) {
  $('.vol-show').removeClass('animated slideOutLeft').addClass('animated slideInRight').show();
  $('.vol-close, .arrow').insertBefore('.work-page').addClass('animated slideInUp');
});
$('.vol-close').on('click', function(event) {
  $('.vol-show').removeClass('animated slideInRight').addClass('animated slideOutLeft');
  $('.vol-close, .arrow').appendTo('.ng-show');
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
