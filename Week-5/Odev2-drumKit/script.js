document.addEventListener('DOMContentLoaded', function() {
    const drumButtons = document.querySelectorAll('.drum');

    drumButtons.forEach(button => {
        button.addEventListener('click', function() {
            playSound(this.getAttribute('data-sound'));
            buttonAnimation(this);
        });
    });

    document.addEventListener('keydown', function(event) {
        const key = event.key.toUpperCase();
        const button = Array.from(drumButtons).find(b => b.textContent === key);
        if (button) {
            playSound(button.getAttribute('data-sound'));
            buttonAnimation(button);
        }
    });

    function playSound(sound) {
        const audio = new Audio(`img_sound/${sound}.wav`);
        audio.play();
    }

    function buttonAnimation(button) {
        button.classList.add('pressed');
        setTimeout(() => {
            button.classList.remove('pressed');
        }, 100);
    }
});
