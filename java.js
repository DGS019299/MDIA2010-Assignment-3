//This function swaps out the heading for this new text

function changeHeading() {


    document.getElementById('heading1').innerHTML = "Lets get this done";


}






function changeHeading2() {


    document.getElementById('Heading2').innerHTML = "Cooked";

}

//These functions play audio and video - you will need these and you may implement them in your work 

function playAudio() {

    var Audio = document.getElementById("Audio");
    if (Audio.paused) {
        Audio.play();
        Audio.volume = 1;
    } else {
        Audio.pause();
    }
}


function playAudio2() {

    var Audio = document.getElementById("Audio2");

    if (Audio.paused) {
        Audio.play();
        Audio.volume = 0.4;
    } else {
        Audio.pause();
    }
}


function playVid() {

let vid = document.getElementById("myVideo");

    if (vid.paused) {
        vid.play();

    } else {
        vid.pause();

}}

    



// Open modal when any TV screen is clicked - AI was used//
document.addEventListener('DOMContentLoaded', function() {
    const tvScreens = document.querySelectorAll('.TV-screen, .TV-screen-off');
    const modal = document.getElementById('zoomModal');
    const modalClose = document.getElementById('closeModal');
    const modalText = document.getElementById('modalText');

    tvScreens.forEach(screen => {
        screen.addEventListener('click', function() {
            // Use data-html for rich content, fallback to data-text
            const html = screen.getAttribute('data-html');
            if (html) {
                modalText.innerHTML = html;
            } else {
                const text = screen.getAttribute('data-text') || 'Click the close button or outside the modal to close.';
                const fontClass = screen.getAttribute('data-font') || '';
                const fontSize = screen.getAttribute('data-size') || '';
                modalText.className = fontClass;
                modalText.style.fontSize = fontSize;
                modalText.textContent = text;
            }
            modal.style.display = 'block';
        });
    });

    modalClose.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});




//These functions play audio and video - you will need these and you may implement them in your work 

function playAudio() {

    var Audio = document.getElementById("Audio");
    if (Audio.paused) {
        Audio.play();
        Audio.volume = 1;
    } else {
        Audio.pause();
    }
}




//This function opens a pop up window, think about how you could use this in your work - perhaps your whole world is a series of popups.. 


function mypopup() {
    mywindow = window.open("popup.html", "mywindow", "location=1,status=1,scrollbars=1,  width=600,height=700");
    mywindow.moveTo(0, 0);
}


