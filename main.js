// navigate to top button functionality
const navToTopBtn = document.querySelector('.home-navigation-button');
navToTopBtn.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    navToTopBtn.style.display = 'block';
  } else {
    navToTopBtn.style.display = 'none';
  }
}

// modal window for book appointment/get started
const modal = document.querySelector('.modal');
const modalWindowContent = document.querySelector('.modal-window-content');
modalWindowContent.innerHTML = '';  // Setting it to empty initially to avoid douible content showing up on page load
const bookAppointmentBtn = document.querySelector('.book-appointment');
const getStartedtBtn = document.querySelector('.get-started');
const modalCloser = document.querySelector('.close-modal');

const modalContent = `<p id="party-horn">🎉</p><h1 class="heading-secondary congratulate-heading">Great Decision!</h1><p class="description">You're one click away from experiencing the best grooming service in town!</p><a class="book-now-link primary-button" href="tel:+911234567898">Book it!</a>`;

const toggleModal = () => {
    modal.style.display = 'flex';
    modalWindowContent.insertAdjacentHTML('afterbegin', modalContent);
}

bookAppointmentBtn.addEventListener('click', toggleModal, false);
getStartedtBtn.addEventListener('click', toggleModal, false);

modalCloser.addEventListener('click', () => {
    modal.style.display = 'none';
    modalWindowContent.innerHTML = '';
});