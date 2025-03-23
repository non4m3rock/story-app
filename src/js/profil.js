// import CheckUserAuth from './pages/auth/check-user-auth';

const Profile = {
  async init() {
    // CheckUserAuth.checkLoginState();

    this._loadProfileData();
  },

  async _loadProfileData() {
    try {
      const response = await fetch('/data/profil.json');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const profileData = await response.json();
      this._displayProfile(profileData);
    } catch (error) {
      console.error('Error loading profile data:', error);
      this._displayError('Gagal memuat data profil. Silakan coba lagi.');
    }
  },

  _displayProfile(profileData) {
    document.querySelector('.profile-name').textContent = profileData.name;
    document.querySelector('.profile-description').textContent = profileData.description;
    document.querySelector('.profile-location').textContent = `Lokasi: ${profileData.location}`;
    document.querySelector('.profile-email').textContent = `Email: ${profileData.email}`;
    document.querySelector('.profile-website').innerHTML =
      `Situs Web: <a href="${profileData.website}">${profileData.website}</a>`;
    document.querySelector('.profile-image').src = profileData.image;

    const socialLinks = document.querySelector('.social-links');
    socialLinks.innerHTML = '';

    if (profileData.social) {
      profileData.social.forEach((social) => {
        const link = document.createElement('a');
        link.href = social.url;
        link.className = `btn btn-${social.type} social-link-item`;
        link.innerHTML = `<i class="fab fa-${social.icon}"></i> ${social.name}`;
        socialLinks.appendChild(link);
      });
    }
  },

  _displayError(errorMessage) {
    const errorMessageElement = document.getElementById('error-message');
    if (errorMessageElement) {
      errorMessageElement.textContent = errorMessage;
    } else {
      console.error('Error message element not found.');
    }
  },
};

Profile.init();
