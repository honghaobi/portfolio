var height = 12, width = 12, SIZE = 50, deg = 0;
var tilearray = [];

var imagearray = ["url(../img/about1.jpg)",
                  "url(../img/about2.jpg)",
                  "url(../img/about3.jpg)"
                 ];

function setup(){
  var flippers = document.getElementById("flippers");
  flippers.style.height = SIZE*height+'px';
  flippers.style.width = SIZE*width+'px';

  for(var y=0; y<height; y++){
    for(var x=0; x<width; x++){

      var tile = document.createElement('div');
      tile.id = 'tile';
      //tile.id = 'tile'+y+'-'+x;
      tile.style.width = SIZE+'px';
      tile.style.height = SIZE+'px';
      flippers.appendChild(tile);

      var entity = {
        element: tile,
        x: x * SIZE,
        y: y * SIZE
      }

      tile.style.left = entity.x + 'px';
      tile.style.top = entity.y + 'px';
      tile.addEventListener( 'click', this.fliptiles.bind( this, entity ) );

      tilearray.push( entity );

      tile.style.backgroundPosition = '-' + x*SIZE + 'px -' + y*SIZE + 'px';
    }
  }
}

setup();
var i = 0;

function fliptiles( targetEntity ) {
  var background = imagearray[i];
  i++;
  if(i == imagearray.length) i = 0;

  tilearray.forEach( function( curtile ) {

    var dx = targetEntity.x - curtile.x;
    var dy = targetEntity.y - curtile.y;
    var distance = Math.sqrt( dx * dx + dy * dy );

    setTimeout( function() {
      // re-run the animation, reading offsetWidth forces reflow
      curtile.element.className = '';
      curtile.element.offsetWidth;
      curtile.element.className = 'flip';

      //curtile.element.style.webkitTransform = "rotateY("+deg+"deg)"; //play flipping anim
      curtile.element.style.transition = "0s";
      curtile.element.style.transitionDelay = "0.5s";
      curtile.element.style.backgroundImage = background;
    }, Math.round( distance * 2 ) );
  } );

}

function flip(request){
  fliptiles( tilearray[ request ] );
}

setTimeout( function() {
  flip(44);
}, 1000);
