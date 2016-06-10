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
}
