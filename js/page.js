showHomePage();

$('#sidebar ul li span div').on('click', function(event){
  $('#cube').attr('class',$(this).attr('class'));

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
