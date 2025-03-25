import moment from 'moment/moment';
import CheckUserAuth from './pages/auth/check-user-auth';
import Story from './network/story';
import './components/loading-indicator';

const Home = {
  async init() {
    CheckUserAuth.checkLoginState();
    await this._initialData();
  },

  async _initialData() {
    this._showLoading();

    try {
      const response = await Story.getAll();
      this._userStories = response.data.listStory;

      // Tambahkan delay sebelum menampilkan cerita (misalnya, 1 detik)
      setTimeout(() => {
        this._populateStoriesToCard(this._userStories);
        this._hideLoading();
      }, 5000); // 1000 milidetik = 1 detik
    } catch (error) {
      console.error(error);
      alert('Gagal memuat cerita. Silakan coba lagi.');
      this._hideLoading();
    }
  },
  _showLoading() {
    console.log('Fungsi _showLoading() dipanggil.');
    const loading = document.createElement('loading-indicator');
    document.body.appendChild(loading);
  },

  _hideLoading() {
    console.log('Fungsi _hideLoading() dipanggil.');
    const loading = document.querySelector('loading-indicator');
    if (loading) {
      loading.remove();
    }
  },

  _populateStoriesToCard(stories = null) {
    if (!(typeof stories === 'object')) {
      throw new Error('Parameter stories should be an object.');
    }

    if (!Array.isArray(stories)) {
      throw new Error('Parameter stories should be an array.');
    }

    const storyCardsContainer = document.getElementById('storyCards');
    storyCardsContainer.innerHTML = '';

    stories.forEach((story) => {
      const formattedDate = moment(story.createdAt).format('DD MMMM YYYY, HH:mm');

      const card = document.createElement('div');
      card.className = 'col-sm row-sm d-flex py-4';
      card.innerHTML = `
        <div class="card flex-fill column" style="width: 18rem">
          <img 
              src="${story.photoUrl}" 
              class="card-img-top" 
              alt="${story.name}" 
              style="object-fit: cover; height: 200px; width: 100%;" 
          />
          <div class="card-body">
            <h5 class="card-title">${story.name}</h5>
            <p class="card-text" style="
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 5; 
              -webkit-box-orient: vertical;
            ">${story.description}</p>
            <a href="#" class="btn btn-warning">Lihat Detail</a>
          </div>
          <div class="card-footer">
            <small class="text-muted">Update ${formattedDate}</small>
          </div>
        </div>
      `;
      storyCardsContainer.appendChild(card);
    });
  },
};

export default Home;
