import './style.css'
import * as THREE from 'three';

// https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene
// setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// cube
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

// render
function animate() {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
	renderer.render( scene, camera );
}
renderer.setAnimationLoop( animate );




// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

// // setup //
// const renderer = new THREE.WebGLRenderer({ alpha: true });
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// const scene = new THREE.Scene();
// renderer.setPixelRatio(window.devicePixelRatio);
// renderer.setSize(window.innerWidth, window.innerHeight);
// const camera = new THREE.PerspectiveCamera(
//     45,
//     window.innerWidth / window.innerHeight,
//     1,
//     10000
// );

// camera.position.set(500, 500, 500);
// const controls = new OrbitControls(camera, renderer.domElement);
// controls.update();
// renderer.render(scene, camera);

// /// lighting ///

// const light = new THREE.AmbientLight(0xffaaff);
// light.position.set(10, 10, 10);
// scene.add(light);

// /// geometry ///

// const boxGeometry = new THREE.Mesh(
//     new THREE.BoxGeometry(100, 100, 100),
//     new THREE.MeshBasicMaterial({ color: 0xff0000 })
// );
// scene.add(boxGeometry);

// console.log(scene);
// animate();

// function animate() {
//     requestAnimationFrame(animate);
//     renderer.render(scene, camera);
// }