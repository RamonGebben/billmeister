
function toggle(){
$( "#clicker" ).click(function() {
  $( "#left-panel" ).animate({
    left: "+200px",
    width: "200px"
  }, 500, function() {
  });
});
};
function untoggle(){
$( "#left-panel" ).click(function() {
  $( "#left-panel" ).animate({
    left: "+200px",
    width: "0px"
  }, 500, function() {
  });
});
};
