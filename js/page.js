showHomePage();

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
  } else if ($('#cube').attr('class')==='show-front') {
    showContactPage();
  }
});
function showHomePage() {
  $('.work-page').hide();
  $('.about-page').hide();
  $('.skills-page').hide();
}

function showWorkPage() {
  $('.about-page').hide();
  $('.skills-page').hide();
  $('.work-page').show();
  $('.work-page-display').children('div').hide();
  $('.ng').addClass('animated fadeInDown').show();
  $('.work-page-menu').addClass('animated fadeInUp');
}

function showAboutPage() {
  $('.work-page').hide();
  $('.skills-page').hide();
  $('.about-page').show();
  $('.about-page-img').addClass('animated fadeInLeft');
  $('.about-page-text').addClass('animated fadeInRight');
}

function showSkillPage() {
  $('.work-page').hide();
  $('.about-page').hide();
  $('.skills-page').show();

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

  if (selected.html() === 'NEIGHBORGOOD') {
    selected.addClass('ng-title');
    $('.ng').siblings().removeClass('fadeInDown').addClass('fadeOutDown');
    $('.ng').removeClass('fadeOutDown').addClass('animated fadeInDown').show();
  } else if (selected.html() === 'LEAF IT') {
    selected.addClass('leaf-title');
    $('.leaf').siblings().removeClass('fadeInDown').addClass('fadeOutDown');
    $('.leaf').removeClass('fadeOutDown').addClass('animated fadeInDown').show();
  } else if (selected.html() === 'EPAC') {
    selected.addClass('epac-title');
    $('.epac').siblings().removeClass('fadeInDown').addClass('fadeOutDown');
    $('.epac').removeClass('fadeOutDown').addClass('animated fadeInDown').show();
  } else if (selected.html() === 'VOLUNTOLD') {
    selected.addClass('vol-title');
    $('.vol').siblings().removeClass('fadeInDown').addClass('fadeOutDown');
    $('.vol').removeClass('fadeOutDown').addClass('animated fadeInDown').show();
  } else if (selected.html() === 'YMSW') {
    selected.addClass('ymsw-title');
    $('.ymsw').siblings().removeClass('fadeInDown').addClass('fadeOutDown');
    $('.ymsw').removeClass('fadeOutDown').addClass('animated fadeInDown').show();
  }

});
