document.addEventListener('DOMContentLoaded', function() {
    // Get all elements
    const playBtn = document.getElementById('play-btn');
    const stopBtn = document.getElementById('stop-btn');
    const styleBtn = document.getElementById('style-btn');
    const elementBtn = document.getElementById('element-btn');
    const statusText = document.getElementById('status-text');
    const playlistContainer = document.getElementById('playlist-container');
    
    // 1. Change text content dynamically
    playBtn.addEventListener('click', function() {
        statusText.textContent = "▶ Now Playing - Song Title";
        document.title = "▶ Now Playing";
    });
    
    stopBtn.addEventListener('click', function() {
        statusText.textContent = "Playback Stopped";
        document.title = "Media Player";
    });
    
    // 2. Modify CSS styles via JavaScript
    styleBtn.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
        statusText.textContent = document.body.classList.contains('dark-theme') 
            ? "Dark Theme Enabled" 
            : "Light Theme Enabled";
    });
    
    // 3. Add or remove an element when clicked
    elementBtn.addEventListener('click', function() {
        if (playlistContainer.innerHTML === '') {
            const playlist = document.createElement('ul');
            playlist.id = 'playlist';
            playlist.innerHTML = `
                <li>Song 1</li>
                <li>Song 2</li>
                <li>Song 3</li>
            `;
            playlistContainer.appendChild(playlist);
            elementBtn.textContent = "Hide Playlist";
        } else {
            playlistContainer.innerHTML = '';
            elementBtn.textContent = "Show Playlist";
        }
    });
});