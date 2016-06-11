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
}

function showWorkPage() {
  $('.work-page').show();
  $('.work-page-display').children('div').hide();
  $('.ng').addClass('animated fadeInDown').show();
  $('.work-page-menu').addClass('animated fadeInUp');
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

  // $('.work-page-display').children('div').hide();

  if (selected.html() === 'NEIGHBORGOOD') {
    selected.addClass('ng-title');

  } else if (selected.html() === 'EPAC') {
    selected.addClass('epac-title');
  }

});
