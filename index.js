import * as THREE from './build/three.module.js'
import  {GLTFLoader} from './jsm/loaders/GLTFLoader.js'
const canvas =document.querySelector('.webgl')
const scene=  new THREE.Scene()
const loader  = new GLTFLoader()
loader.load('./scene2.glb',function(glb){
    console.log(glb)
    const root =glb.scene;
    root.scale.set(0.47,0.47,0.47)
    scene.add(root);
},function(xhr){
    console.log((xhr.loaded/xhr.total *100)+"% loaded ");
},function(error){
    console.log("error ")
})
//LIGHT

const light =new THREE.DirectionalLight(0xffffff,1)
const light1 =new THREE.DirectionalLight(0xffffff,1)
const light2 =new THREE.DirectionalLight(0xffffff,1)
const light3 =new THREE.DirectionalLight(0xffffff,1)

light.position.set(2,3,5)
light1.position.set(7, 8, -7);
light2.position.set(7, 8, 7);
light3.position.set(-4, 6, -10);

scene.add(light)
scene.add(light1)
scene.add(light2)
scene.add(light3)

scene.background = new THREE.Color('lightblue');



//CAMERA
const sizes={

    width: window.innerWidth,
    height: window.innerHeight
}

const camera = new THREE.PerspectiveCamera(75,sizes.width/sizes.height,0.1,100)
camera.position.set(0,1,2)
camera.rotation.x = 0;
camera.rotation.y = 1.6;
camera.rotation.z = 0;
scene.add(camera) 

const renderer = new THREE.WebGL1Renderer( {
    canvas: canvas
})
renderer.setSize(sizes.width ,sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))
renderer.shadowMap.enabled = true
renderer.gammaOuput =true
renderer.physicallyCorrectLights = true;



function animate (){
    requestAnimationFrame(animate)
    renderer.render(scene,camera)

}
animate()