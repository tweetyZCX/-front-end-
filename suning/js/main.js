//动态调整像素比并且不让用户缩放
let pixrate = 1/window.devicePixelRatio;
console.log(window.devicePixelRatio);
document.write(
    '<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale='+ pixrate +', minimum-scale='+ pixrate +', maximum-scale='+ pixrate +'">'
);

//动态调整HTML字体大小
let html = document.getElementsByTagName('html')[0];
let pageWidth = html.getBoundingClientRect().width;
html.style.fontSize = pageWidth/16 + 'px';