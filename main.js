const navLink = document.querySelectorAll('nav li');
const windows = document.querySelectorAll('.window');
const home = document.querySelector('.home');
const displayWindow = () => {
  windows.forEach((window) => window.classList.remove('active'));
};

navLink.forEach((link) => {
  link.addEventListener('click', () => {
    if (link.classList.contains('add-new-book')) {
      displayWindow(link);
      const newContact = document.querySelector('.form');
      home.style.display = 'none';
      newContact.classList.add('active');
      document.querySelector('h2').addNewBook = 'Add new Contact';
    } else if (link.classList.contains('contact')) {
      displayWindow(link);
      const aboutMe = document.querySelector('.about-me');
      home.style.display = 'none';
      aboutMe.classList.add('active');
      document.querySelector('h2').textContent = 'Contact me';
    } else {
      displayWindow(link);
      home.style.display = 'block';
      document.querySelector('h2').textContent = 'All Awesome Book';
    }
  });
});