var container, stats;
var camera, scene, raycaster, renderer;
var mouse = new THREE.Vector2(), INTERSECTED;
var radius = 100, theta = 0;
var timer;
var timeStart = Date.now() * 0.001;

init();
animate();

function init() {
	container = document.createElement( 'div' );
	document.body.appendChild( container );

	camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 10000 );
  camera.position.x = 8000;

	scene = new THREE.Scene();
	scene.background = new THREE.Color( 0xf0f0f0 );

	var light = new THREE.DirectionalLight( 0xffffff, 1 );
	light.position.set( 1, 1, 1 ).normalize();
	scene.add( light );

  var pointLight = new THREE.DirectionalLight(0xffffff);
  pointLight.position.x = 20;
  pointLight.position.y = 120;
  pointLight.position.z = 0;
  scene.add(pointLight);

	var geometry = new THREE.BoxBufferGeometry( 40, 40, 40 );
	for ( var i = 0; i < 2000; i ++ ) {
		var object = new THREE.Mesh( geometry, new THREE.MeshLambertMaterial( { color: 0x3f3f3f } ) );
		object.position.x = Math.random() * 2000 - 1000;
		object.position.y = Math.random() * 2000 - 1000;
		object.position.z = Math.random() * 2000 - 1000;

		// object.rotation.x = Math.random() * 2 * Math.PI;
		// object.rotation.y = Math.random() * 2 * Math.PI;
		// object.rotation.z = Math.random() * 2 * Math.PI;

		scene.add( object );
	}
	raycaster = new THREE.Raycaster();
	renderer = new THREE.WebGLRenderer();

  renderer.setClearColor(0xF5F5F5);
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );
  renderer.sortObjects = false;

	container.appendChild(renderer.domElement);

	document.addEventListener( 'mousemove', onDocumentMouseMove, false );
	window.addEventListener( 'resize', onWindowResize, false );
}

function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize( window.innerWidth, window.innerHeight );
}

function onDocumentMouseMove( event ) {
	event.preventDefault();
	mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
}
//
function animate() {
	requestAnimationFrame( animate );
	render();
}

function easeInOut(t, b, c, d) {
  if((t /= d / 2) < 1){
    return c / 2 * t * t * t * t * t + b;
  }
  return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
}


function Zoom(aTimer) {
  if (camera.position.x > 500) {
    camera.position.x = easeInOut(aTimer, 8000, -8000, 6);
    console.log(easeInOut(aTimer, 8000, -8000, 6));
  }

}

function render() {
  timer = Date.now() * 0.001 - timeStart;
  // console.log(timer, camera.position.x);

    Zoom(timer);

  // camera.position.x -= (mouse.x * 0.1 - camera.position.x) * .05;
  // camera.position.y -= (mouse.y * 0.1 - camera.position.y) * .05;
  // camera.position.z -= (mouse.y * 0.1 - camera.position.y) * .05;

  // camera.position.x += (mouse.x * 0.1 - camera.position.x) * .05;
  camera.position.y += (mouse.y * 0.2 - camera.position.y) * .05;

  camera.lookAt(scene.position);
  camera.updateMatrixWorld();

	// find intersections
	raycaster.setFromCamera( mouse, camera );
	var intersects = raycaster.intersectObjects( scene.children );
	if ( intersects.length > 0 ) {
		if ( INTERSECTED != intersects[ 0 ].object ) {
			if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );
			INTERSECTED = intersects[ 0 ].object;
			INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex();
			INTERSECTED.material.emissive.setHex( 0xff6d2e );
		}
	} else {
		if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );
		INTERSECTED = null;
	}
	renderer.render( scene, camera );
}
