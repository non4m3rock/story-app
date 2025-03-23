// Import our custom CSS
import '../sass/main.scss';

// Import components
import './components/index';

// Import javascript file as needed
import Home from './home';
import AddStory from './addstory';
import Profil from './profil';
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import * as bootstrap from 'bootstrap';

const routes = {
  '/': Home,
  '/addstory.html': AddStory,
  '/profil.html': Profil,

  '/auth/login.html': Login,
  '/auth/register.html': Register,
};

const detectRoute = () => routes[window.location.pathname];

const initPages = () => {
  const header = document.querySelector('header');
  const main = document.querySelector('main');
  const footer = document.querySelector('footer');

  if (header && main && footer) {
    main.style.minHeight = `calc(100vh - ${header.clientHeight + footer.clientHeight}px)`;
  }
};

window.addEventListener('DOMContentLoaded', async () => {
  initPages();

  const route = detectRoute();
  route.init();
});
