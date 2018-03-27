var container, stats;
var camera, scene, renderer;
var mouse = new THREE.Vector2(), INTERSECTED;
var timer;
var timeStart = Date.now() * 0.001;
var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;
var mouseX = 0,
    mouseY = 0;
var group;

document.addEventListener('mousemove', onDocumentMouseMove, false);

init();
animate();

function init() {
  container = document.createElement( 'div' );
  document.body.appendChild( container );

  var theme = {
      name: "cubes",
      geometry: new THREE.BoxBufferGeometry(40, 40, 40),
      color: 0x3f3f3f,
      lightColor: 0xffffff,
      createObjects: function() {
          for (var i = 0; i < 2000; i++) {
              var mesh = new THREE.Mesh(theme.geometry, material);
              mesh.position.x = Math.random() * 2000 - 1000;
              mesh.position.y = Math.random() * 2000 - 1000;
              mesh.position.z = Math.random() * 2000 - 1000;

              // mesh.rotation.x = Math.random() * 0.1 * Math.PI;
              // mesh.rotation.y = Math.random() * 0.1 * Math.PI;

              mesh.matrixAutoUpdate = true;
              mesh.updateMatrix();

              group.add(mesh);
          }
      }
  };

  scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0xF5F5F5, 1, 10000);

  var material = new THREE.MeshLambertMaterial({
      emissive: theme.color
  });

  group = new THREE.Group();

  theme.createObjects();
  scene.add(group);

  camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 10000);
  camera.position.x = 8000;

  var pointLight = new THREE.DirectionalLight(theme.lightColor);
  pointLight.position.x = 20;
  pointLight.position.y = 120;
  pointLight.position.z = 0;
  scene.add(pointLight);

  renderer = new THREE.WebGLRenderer({
      antialias: true
  });
  renderer.setClearColor(0xF5F5F5);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.sortObjects = false;

  container.appendChild(renderer.domElement);
  window.addEventListener('resize', onWindowResize, false);
}

function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize( window.innerWidth, window.innerHeight );
}

function onDocumentMouseMove( event ) {
	event.preventDefault();
  mouseX = (event.clientX - windowHalfX) * 1;
  mouseY = (event.clientY - windowHalfY) * 1;
}

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

function zoom(aTimer) {
  if (camera.position.x > 1000) {
    camera.position.x = easeInOut(aTimer, 8000, -8000, 6);
  }
}

function render() {
  timer = Date.now() * 0.001 - timeStart;
  zoom(timer);
  if (G.rotating) {
    group.rotation.x += G.rotateNum.x || 0;
    group.rotation.y += G.rotateNum.y || 0;
    group.rotation.z += G.rotateNum.z || 0;
  }
  camera.position.z += (mouseX * 0.1 - camera.position.z) * .02;
  camera.position.y += (mouseY * 0.2 - camera.position.y) * .02;

  camera.lookAt(scene.position);
  camera.updateMatrixWorld();

  renderer.render(scene, camera);
}
