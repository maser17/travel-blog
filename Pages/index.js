const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach((item) => {

    item.addEventListener('click', () => { 
        item.children[1].classList.toggle('faq-answer-hidden');
        item.children[1].classList.toggle('faq-answer-visible');
    }
    );      
});

/*darkmode*/

const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode")
});