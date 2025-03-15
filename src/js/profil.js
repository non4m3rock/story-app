const Profile = {
  async init() {
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
      // Anda dapat menambahkan logika penanganan error lainnya di sini, seperti menampilkan pesan error di halaman.
      this._displayError('Gagal memuat data profil. Silakan coba lagi.'); // Contoh: menampilkan pesan error di halaman
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
    socialLinks.innerHTML = ''; // Clear existing social links

    if (profileData.social) {
      profileData.social.forEach((social) => {
        const link = document.createElement('a');
        link.href = social.url;
        link.className = 'btn btn-' + social.type; // Assuming social.type is 'primary', 'info', etc.
        link.innerHTML = `<i class="fab fa-${social.icon}"></i> ${social.name}`;
        socialLinks.appendChild(link);
      });
    }
  },
};

Profile.init();
