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

// modal window basic setup
const modal = document.querySelector('.modal');
const modalWindowContent = document.querySelector('.modal-window-content');
const modalCloser = document.querySelector('.close-modal');

let modalContent;

function setModalContent(modal) {
  if(modal === 'getStarted') {
    const partyHorn = document.createElement('p');
    partyHorn.setAttribute('id', 'party-horn');
    partyHorn.innerText = '🎉';
    const congratulateHeading = document.createElement('h1');
    congratulateHeading.setAttribute('class', 'heading-secondary congratulate-heading');
    congratulateHeading.innerText = 'Great Decision!';
    const description = document.createElement('p'); 
    description.setAttribute('class', 'description');
    description.innerText = 'You\'re one click away from experiencing the best grooming service in town!';
    const bookNowLink = document.createElement('a');
    bookNowLink.setAttribute('class', 'book-now-link primary-button');
    bookNowLink.setAttribute('href', 'tel:+911234567898');
    bookNowLink.innerText = 'Book it!';
    modalWindowContent.appendChild(partyHorn);
    modalWindowContent.appendChild(congratulateHeading);
    modalWindowContent.appendChild(description);
    modalWindowContent.appendChild(bookNowLink);
  }
  if(modal === 'viewPrices') {
    let gridContainer = document.createElement('div');
    gridContainer.setAttribute('class', 'grid-container');
    modalWindowContent.appendChild(gridContainer);
    servicesOffered.forEach((service) => {
      let offering = document.createElement('div');
      offering.setAttribute('class', 'grid-item-service');
      offering.innerText = service.name;
      gridContainer.appendChild(offering);
      let price = document.createElement('div');
      price.setAttribute('class', 'grid-item-price');
      price.innerText = service.price;
      gridContainer.appendChild(price);
    });
  }
}

const toggleModal = (buttonID, e) => {
    modal.style.display = 'flex';
    setModalContent(buttonID);
    // modalWindowContent.insertAdjacentHTML('afterbegin', modalContent);
}

modalCloser.addEventListener('click', () => {
  modal.style.display = 'none';
  modalWindowContent.innerHTML = '';
});

// modal window for get started/book appointment
const bookAppointmentBtn = document.querySelector('.book-appointment');
const getStartedtBtn = document.querySelector('.get-started');

bookAppointmentBtn.addEventListener('click',(e)=> toggleModal('getStarted', e), false);
getStartedtBtn.addEventListener('click',(e)=> toggleModal('getStarted', e), false);


// modal window for service price list
const viewServicesBtn = document.querySelector('#service-list');
viewServicesBtn.addEventListener('click',(e)=> toggleModal('viewPrices', e), false);

const servicesOffered = [
  {
    name: 'Modern Haircut',
    price: '₹150',
  },
  {
    name: 'Classic Haircut',
    price: '₹100',
  },
  {
    name: 'Beard Grooming',
    price: '₹150',
  },
  {
    name: 'Kid\'s Haircut',
    price: '₹80',
  },
  {
    name: 'Hair Color',
    price: '₹200',
  },
  {
    name: 'Straight Shave',
    price: '₹80',
  },
  {
    name: 'Hair Styling',
    price: '₹300',
  },
  {
    name: 'Facials',
    price: '₹300',
  },
  {
    name: 'Scalp Massage and Conditioning',
    price: '₹100',
  },
  {
    name: 'Waxing and Hair Removal',
    price: '₹500',
  },
];


