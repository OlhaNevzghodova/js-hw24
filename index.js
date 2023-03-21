const images = document.querySelector('.images');
images.innerHTML = `<img src="./images/rat${Math.floor(Math.random() * (9 - 1) + 1)}.jpg" alt="image"/>`
