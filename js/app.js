var container;
var camera, scene, renderer;

var geometry, group;

var mouseX = 0,
    mouseY = 0;

var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;

document.addEventListener('mousemove', onDocumentMouseMove, false);

init();
animate();

function init() {

    container = document.createElement('div');
    $("#canvas").html(container);

    var theme = {
        name: "cubes",
        geometry: new THREE.CubeGeometry(40, 40, 40),
        color: 0x3f3f3f,
        lightColor: 0xffffff,
        cameraZ: 800,
        createObjects: function() {
            for (var i = 0; i < 2000; i++) {
                var mesh = new THREE.Mesh(theme.geometry, material);
                mesh.position.x = Math.random() * 2000 - 1000;
                mesh.position.y = Math.random() * 2000 - 1000;
                mesh.position.z = Math.random() * 2000 - 1000;

                mesh.rotation.x = Math.random() * 2 * Math.PI;
                mesh.rotation.y = Math.random() * 2 * Math.PI;

                mesh.matrixAutoUpdate = false;
                mesh.updateMatrix();

                group.add(mesh);
            }
        }
    };

    scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0xF5F5F5, 1, 10000);

    // Set Material
    var material = new THREE.MeshLambertMaterial({
        emissive: theme.color
    });

    // Create the group to place the objects
    group = new THREE.Group();

    // Create the objects
    theme.createObjects();

    // Add Group to scene
    scene.add(group);

    ////////////////////////////////////
    // Setup Camera
    ////////////////////////////////////
    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.z = theme.cameraZ;

    ////////////////////////////////////
    // Lighting
    ////////////////////////////////////

    // create a point light
    var pointLight = new THREE.DirectionalLight(theme.lightColor);

    // set its position
    pointLight.position.x = 20;
    pointLight.position.y = 120;
    pointLight.position.z = 0;

    // add to the scene
    scene.add(pointLight);

    ////////////////////////////////////
    // Rendering
    ////////////////////////////////////

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

/////////////////////////////////
// Feel free to resize that windah, Y'all!
// We all know a good pen should resize when you be adjustin' that little screen dat errythang renders into, knah mean?
////////////////////////////////////
function onWindowResize() {
    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
}

function onDocumentMouseMove(event) {
    mouseX = (event.clientX - windowHalfX) * 1;
    mouseY = (event.clientY - windowHalfY) * 1;
}

function animate() {
    requestAnimationFrame(animate);

    render();
}

function render() {

    var time = Date.now() * 0.001;

    var rx = Math.sin(time * 0.3) * 0.5,
        ry = Math.sin(time * 0.3) * 0.5,
        rz = Math.sin(time * 0.3) * 0.5;

    camera.position.x += (mouseX * 0.1 - camera.position.x) * .05;
    camera.position.y += (mouseY * 0.2 - camera.position.y) * .05;


    camera.lookAt(scene.position);

    group.rotation.x = rx / 5;
    group.rotation.y = ry / 5;
    group.rotation.z = rz / 5;

    renderer.render(scene, camera);
}
