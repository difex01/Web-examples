// Obtener referencias a los elementos HTML necesarios
const video = document.getElementById('my-video');
const playPauseBtn = document.getElementById('play-pause');
const progressBar = document.getElementById('progress');
const volumeControl = document.getElementById('volume');

let progressBarSelected = false;

progressBar.value = 0;

// * * PLAY BUTTON * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
// Evento al pausar/renaudar el video
playPauseBtn.addEventListener('click', () => {
  if (video.paused) {
    video.play();
    playPauseBtn.textContent = 'Pause';
  } else {
    video.pause();
    playPauseBtn.textContent = 'Play';
  }
});

// * * VOLUME CONTROL * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
// Evento al cambiar el volumne
volumeControl.addEventListener('change', () => {
  video.volume = volumeControl.value;
});

// Evento para cambiar el volumen al arrastrar el input
volumeControl.addEventListener('mousemove', () => {
    video.volume = volumeControl.value;
});

// * * PROGRESS BAR * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
// Evento al mover la barra de progreso
progressBar.addEventListener('change', () => {
  // Calcular el tiempo en segundos en el que se debe posicionar el vídeo
  const tiempo = video.duration * (progressBar.value / 100);
  // Posicionar el vídeo en el tiempo especificado
  video.currentTime = tiempo;

});

// Evento al seleccionar la barra de progreso
progressBar.addEventListener('mousedown', () => {
  progressBarSelected = true;
})

// Evento al soltar la barra de progreso
progressBar.addEventListener('mouseup', () => {
  progressBarSelected = false;
})

// * * PLAYER * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
// Actualizar la barra de progreso a medida que avanza el tiempo del vídeo
video.addEventListener('timeupdate', () => {
  // Calcular el porcentaje de tiempo transcurrido
  const porcentaje = (video.currentTime / video.duration) * 100;
  // Actualizar el valor de la barra de progreso
  // 0 cuando recién cargue el video
  if (!progressBarSelected) progressBar.value = porcentaje || 0;
});

// * * LOAD VIDEO * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
function loadVideo() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://localhost:3000/video', true);
  // El encabezado Accept-Ranges indica al servidor que se espera que soporte la
  // descarga por fragmentos. Esto permite al servidor enviar sólo una parte del
  // archivo en lugar de enviar todo el archivo de una vez.
  xhr.setRequestHeader('Accept-Ranges', 'bytes');
  // IndicaMOS al navegador que se espera una respuesta en formato Blob
  xhr.responseType = 'blob';
  xhr.send();

  xhr.addEventListener('load', () => {
    console.log('Video loaded');

    const videoBlob = xhr.response;
    // Creamos una URL para el vídeo Blob
    const videoUrl = URL.createObjectURL(videoBlob);

    video.src = videoUrl;
  });

  xhr.addEventListener('error', () => {
    console.log('Error');
  });

  xhr.addEventListener('progress', (event) => {
    console.log(`${event.loaded} bytes downloaded from ${event.total}`);
  });
}

loadVideo();