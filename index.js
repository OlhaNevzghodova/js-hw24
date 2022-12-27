const images = ['rat1.jpg', 'rat2.jpg', 'rat3.jpg', 'rat4.jpg', 'rat5.jpg', 'rat6.jpg', 'rat7.jpg', 'rat8.jpg', 'rat9.jpg'];

let count = images.length;
let random = Math.floor(Math.random() * count);
document.write('<img src="./images/' + images[random] + '" alt="image"/>');