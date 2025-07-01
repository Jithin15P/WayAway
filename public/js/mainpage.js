const subHeaders = [
      "Let’s connect professionally",
      "Discover the story behind WayAway",
      "Explore the code that powers experiences.",
      "We’re just a message away from your journey"
    ];

    const items = document.querySelectorAll('#item-1, #item-2, #item-3, #item-4');
    const placeholder = document.querySelector('.placeholder');
    const subheader = document.querySelector('#subheader');

    function changeColors() {
      gsap.to('.container', { backgroundColor: '#000', duration: 0.5 });
    gsap.to('.placeholder, nav, footer, .container p', { color: '#fff' });

     gsap.to(["#go-home-btn", "#learn-more-btn"], {
                borderColor: '#fff',
                color: '#fff',
                duration: 0.5
                });

    }

    function revertColors() {
      gsap.to('.container', { backgroundColor: '#e3e3e3', duration: 0.5 });
   gsap.to('.placeholder, nav, footer, .container p', { color: '#000' });

      gsap.to(["#go-home-btn", "#learn-more-btn"], {
        borderColor: '#000',
        color: '#fff'
      });
    }

    items.forEach((item) => {
      item.addEventListener('mouseover', changeColors);
      item.addEventListener('mouseout', revertColors);
    });

    function animateScale(element, scaleValue) {
      gsap.fromTo(element, { scale: 1 }, { scale: scaleValue, duration: 2, ease: 'power1.out' });
    }

    function wrapLetters(text) {
      placeholder.innerHTML = '';
      [...text].forEach(letter => {
        const span = document.createElement('span');
        span.style.filter = 'blur(8px)';
        span.textContent = letter;
        placeholder.appendChild(span);
      });
    }

    function animateBlurEffect() {
      const letters = placeholder.children;
      let index = 0;

      function clearNextLetter() {
        if (index < letters.length) {
          gsap.to(letters[index], { filter: 'blur(0px)', duration: 0.5 });
          index++;
          if (index < letters.length) {
            setTimeout(clearNextLetter, 100);
          }
        }
      }

      setTimeout(clearNextLetter, 0);
    }

    function shuffleLetters(finalText) {
      wrapLetters(finalText.replace(/./g, ' '));

      let textArray = finalText.split('');
      let shufflingCounter = 0;
      let intervalHandles = [];

      function shuffle(index) {
        if (shufflingCounter < 30) {
          textArray[index] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[Math.floor(Math.random() * 26)];
          placeholder.children[index].textContent = textArray[index];
        } else {
          placeholder.children[index].textContent = finalText.charAt(index);
          clearInterval(intervalHandles[index]);
        }
      }

      for (let i = 0; i < finalText.length; i++) {
        intervalHandles[i] = setInterval(shuffle, 80, i);
      }

      setTimeout(() => {
        shufflingCounter = 30;
        for (let i = 0; i < finalText.length; i++) {
          placeholder.children[i].textContent = finalText.charAt(i);
          clearInterval(intervalHandles[i]);
        }
        animateBlurEffect();
      }, 1000);
    }

    function updatePlaceholderText(event) {
      const newText = event.target.textContent.toUpperCase();
      const itemIndex = Array.from(items).indexOf(event.target);
      const newSubHeaderText = subHeaders[itemIndex].toUpperCase();

      subheader.textContent = newSubHeaderText;
      animateScale(placeholder, 1.25);
      shuffleLetters(newText);
    }

    function resetPlaceholderText() {
      const defaultText = 'WayAway';
      const defaultSubHeaderText = 'Whats your next Destination';

      subheader.textContent = defaultSubHeaderText;
      animateScale(placeholder, 1.25);
      shuffleLetters(defaultText);
    }

    items.forEach((item) => {
      item.addEventListener('mouseover', updatePlaceholderText);
      item.addEventListener('mouseout', resetPlaceholderText);
    });

    document.getElementById('go-home-btn').addEventListener('click', () => {
      window.location.href = '/listings';  
    });

    document.getElementById('learn-more-btn').addEventListener('click', () => {
      document.querySelector('#page2').scrollIntoView({ behavior: 'smooth' });
    });

   gsap.from(["#go-home-btn", "#learn-more-btn"], {
  opacity: 0,
  y: 20,
  delay: 1.5,
  duration: 1,
  ease: "power2.out"
});


    window.addEventListener("DOMContentLoaded", () => {
      const defaultText = "WAYAWAY";
      shuffleLetters(defaultText);
    });

 
gsap.registerPlugin(ScrollTrigger);

 
let allp = document.querySelectorAll('#page2 .content p');

allp.forEach(function(elem) {
  let clutter = '';
  let ptext = elem.textContent;
  let splittedText = ptext.split('');  

  splittedText.forEach(function(e) {
    clutter += `<span>${e}</span>`;
  });

  elem.innerHTML = clutter;
});

  // #page2
gsap.to("#page2 .content p span", {
  color: "rgb(255, 251, 0)",
  stagger: 0.05,
  scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    start: "top 40%",
    end: "top 10%",
    scrub: 2,
    // markers: true   
  }
});


//page-3
     const cards = document.querySelectorAll(".card");

  function loopCards() {
    let index = 0;

    function showCard() {
      cards.forEach((card, i) => {
        card.style.opacity = 0;
        card.style.zIndex = 0;
      });

      const currentCard = cards[index];
      const img = currentCard.querySelector(".card-img");

      currentCard.style.zIndex = 1;
      gsap.fromTo(currentCard, { opacity: 0 }, { opacity: 1, duration: 0.6 });
      gsap.fromTo(img, { width: "25vw", height: "25vw" }, { width: "100vw", height: "100vh", duration: 1.2, ease: "power2.out" });

      setTimeout(() => {
        gsap.to(currentCard, { opacity: 0, duration: 0.4 });
        index = (index + 1) % cards.length;
        setTimeout(showCard, 500);
      }, 2000);
    }

    showCard();
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        loopCards();
        observer.disconnect();
      }
    });
  }, { threshold: 0.5 });

  observer.observe(document.querySelector("#page3"));

   function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Show button only after page1
  const scrollBtn = document.getElementById('scrollTopBtn');
  window.addEventListener('scroll', () => {
    if (window.scrollY > window.innerHeight * 0.9) {
      scrollBtn.style.display = 'block';
    } else {
      scrollBtn.style.display = 'none';
    }
  });