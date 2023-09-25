const modal = document.getElementById('myModal')
const btn = document.querySelector('.dow__link')
const span = document.querySelector(".close");

btn.onclick = function () {
    modal.style.display = 'block'
}
span.addEventListener('click', function () {
    modal.style.display = "none"
})
// span.onclick() = function () {
//     modal.style.display = "none"
// }

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = 'none'
    }
}


const a = document.querySelector('.links')


const links = document.querySelector('.close2')




const links2 = document.querySelector('.links2')
const links3 = document.querySelector('.links3')
const links4 = document.querySelector('.links4')
const span2 = document.querySelector('.span')
const span3 = document.querySelector('.span2')
const span4 = document.querySelector('.span3')
const span5 = document.querySelector('.span4')
const panoImg = document.getElementById('panorama')
const panoImg2 = document.getElementById('panorama2')
const panoImg3 = document.getElementById('panorama3')
const panoImg4 = document.getElementById('panorama4')
// const path = './img/2.png'    

// const panorama = new PANOLENS.ImagePanorama(path);
// const viewer = new PANOLENS.Viewer({
//     container: panoImg,
//     autoRotate: true,
//     autoRotateSpeed: 0.4,
//     autoLoad: true,
//     controlBar: false
// }); 

// viewer.add(panorama);



pannellum.viewer('panorama', {
    "type": "equirectangular",
    "panorama": "./img/2.png",
    // 'autoLoad': true,
    'autoRotate': true,
    "showControls": false
});
pannellum.viewer('panorama2', {
    "type": "equirectangular",
    "panorama": "./img/3.png",
    "autoRotate": true,
    "showControls": false
});
pannellum.viewer('panorama3', {
    "type": "equirectangular",
    "panorama": "./img/4.png",
    'autoRotate': true,
    "showControls": false,
    "pitch": -40
});
pannellum.viewer('panorama4', {
    "type": "equirectangular",
    "panorama": "./img/1.png",
    'autoRotate': true,
    "showControls": false
});



a.addEventListener('click', () => {
    panoImg.style.display = 'block'
})
links2.addEventListener('click', () => {
    panoImg2.style.display = 'block'
})
links3.addEventListener('click', () => {
    panoImg3.style.display = 'block'
})
links4.addEventListener('click', () => {
    panoImg4.style.display = 'block'
})
span2.addEventListener('click',()=>{
    panoImg.style.display = 'none'
})
span3.addEventListener('click',()=>{
    panoImg2.style.display = 'none'
})
span4.addEventListener('click',()=>{
    panoImg3.style.display = 'none'
})
span5.addEventListener('click',()=>{
    panoImg4.style.display = 'none'
})
