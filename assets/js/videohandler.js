const contentVideos = Array.from(document.querySelectorAll(".playable-video"))
const bgVideo = document.querySelector('.hero-video');
const heroVideo = document.querySelector(".hero-video-middle")

contentVideos.forEach(video => {
    video.addEventListener('play', () => {
        bgVideo.style.display = 'none';
        heroVideo.style.display = 'none';
    });
    
    video.addEventListener('pause', () => {
        bgVideo.style.display = 'block';
        heroVideo.style.display = 'block';
    });
});