const items  = document.querySelector(".items-for-mobile");

function openNav(e) {
    if(e === "open") {
      
        items.style.display = "block";
        items.style.width = "250px";
     
    }
    if(e === "close") {
        items.style.width = "0px";
        items.style.display = "none";
    }
}

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-bar');

    skillBars.forEach(skillBar => {
        const percentageElement = skillBar.querySelector('.skill-percentage');
        const percentage = percentageElement.getAttribute('data-percentage');

        if (isInViewport(skillBar)) {
            skillBar.classList.add('active');
            percentageElement.style.width = percentage + '%';

            let count = 0;
            const interval = setInterval(() => {
                if (count < percentage) {
                    count++;
                    percentageElement.innerText = count + '%';
                } else {
                    clearInterval(interval);
                }
            }, 20);
        } else {
            skillBar.classList.remove('active');
            percentageElement.style.width = '0%';
            percentageElement.innerText = '0%';
        }
    });
}

window.addEventListener('scroll', animateSkillBars);
window.addEventListener('load', animateSkillBars);

window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    const content = document.querySelector('.content');
    
    // Simulate loading delay (e.g., 3 seconds)
    setTimeout(() => {
        preloader.style.opacity = '0';
        preloader.style.transition = 'opacity 1s ease-out';
        setTimeout(() => {
            preloader.style.display = 'none';
            content.style.display = 'block';
        }, 1000);
    }, 500); // 3000 milliseconds = 3 seconds
});

var typed = new Typed('#element', {
    strings: ['<i>First</i> sentence.', '&amp; a second sentence.'],
    typeSpeed: 50,
  });
