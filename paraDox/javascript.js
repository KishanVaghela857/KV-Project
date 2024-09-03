document.querySelector('#shareBtn').addEventListener('click', () => {
    if (navigator.share) {
        navigator.share({
            title: 'Check this out!',
            text: 'I found this awesome content. You should take a look!',
            url: window.location.href
        }).then(() => {
            console.log('Thanks for sharing!');
        }).catch((error) => {
            console.error('Error sharing:', error);
        });
    } else {
        alert('Web Share API not supported in this browser.');
    }
});

document.getElementById("home").addEventListener("click" , () => {
    location.reload();
});
