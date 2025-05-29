video.addEventListener('click', toggle_video);
document.querySelector('#v-play').addEventListener('click', toggle_video);
document.querySelector('#v-expand').addEventListener('click', toggle_expand);

function toggle_video() {
    document.querySelector('#v-controls').classList.add('visible');

    const play_i = document.querySelector('#v-play i');
    const center_i = document.querySelector('#v-icon');
    video.controls = false;

    if (video.muted == true) {
        document.querySelector('#v-muted').style.display = "none";
        video.currentTime = 0;
        video.muted = false;

        video.play();
        play_i.classList.remove('icon-play');
        play_i.classList.add('icon-pause');

        window.dataLayer.push({
            event: `video_start`
        });
        console.log(`Video iniciado`);
        return
    }

    if (video.paused == false) {
        video.pause();
        play_i.classList.remove('icon-pause');
        play_i.classList.add('icon-play');
        center_i.classList.add('paused');
        
    } else {
        video.play();
        play_i.classList.remove('icon-play');
        play_i.classList.add('icon-pause');
        center_i.classList.remove('paused');
    }
}
function toggle_expand() {
    const player = document.querySelector('#v-player');
    const expand_i = document.querySelector('#v-expand i');

    const isFullscreen = document.fullscreenElement || 
                        document.webkitFullscreenElement || 
                        document.msFullscreenElement;

    if (isFullscreen) {
        const exit = document.exitFullscreen || 
                    document.webkitExitFullscreen || 
                    document.msExitFullscreen;

        if (exit) {
            exit.call(document).then(() => {
                player.scrollIntoView({ behavior: 'smooth', block: 'center' });
            });
        }

        expand_i.classList.remove('icon-compress');
        expand_i.classList.add('icon-expand');

    } else {
        const request = player.requestFullscreen || 
                        player.webkitRequestFullscreen || 
                        player.msRequestFullscreen;

        if (request) {
            request.call(player).then(() => {
                try {
                    if (screen.orientation && screen.orientation.lock) {
                        screen.orientation.lock('landscape');
                    }
                } catch (err) {
                    console.warn('No se pudo bloquear la orientación:', err);
                }
            });
        }

        expand_i.classList.remove('icon-expand');
        expand_i.classList.add('icon-compress');
    }
}