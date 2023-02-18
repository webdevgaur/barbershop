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

// modal window for book appointment
const modal = document.querySelector('.modal');
const modalWindow = document.querySelector('.modal-window');
const bookAppointmentBtn = document.querySelector('.book-appointment');
const getStartedtBtn = document.querySelector('.get-started');

const modalContent = `<h1>Great Decision!</h1><p>You're one click away from experiencing the best grooming service in town!</p><a href="tel:+911234567898">Book it!</a>`;

const toggleModal = () => {
    modal.style.display = 'flex';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
    modalWindow.insertAdjacentHTML('afterbegin', modalContent);
    modalWindow.style.color = 'tomato';
}

bookAppointmentBtn.addEventListener('click', toggleModal, false);

// temporary fix. Do remove
// modal.addEventListener('click', () => {
//     modal.style.display = 'none';
//     modal.style.removeProperty('justify-content');
//     modal.style.removeProperty('align-items');
//     modalWindow.innerHTML = '';
// });