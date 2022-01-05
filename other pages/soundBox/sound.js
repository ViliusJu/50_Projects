const sounds = ['applause', 'boo','gasp', 'tada','victory', 'wrong'];

sounds.forEach(sound => {
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.innerText = sound;

    btn.addEventListener('click', ()=>{
        stopNoise();
        document.getElementById(sound).play();
    })
    
    document.getElementById('buttons').appendChild(btn);

});


function stopNoise() {

    sounds.forEach(sound => {
        const noise = document.getElementById(sound)

        noise.pause();
        noise.currentTime = 0;
        
    })
}