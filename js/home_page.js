console.log('Home Page JS loaded ');

var img = document.createElement('img');
img.style.height = "25%";
img.style.width = "25%";
img.src = require('../img/bg.jpg');

document.getElementById('img_container').appendChild(img);

require('../css/global.sass');