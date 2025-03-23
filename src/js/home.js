import moment from 'moment/moment';
import CheckUserAuth from './pages/auth/check-user-auth';

const Home = {
  async init() {
    CheckUserAuth.checkLoginState();

    await this._initialData();
  },

  async _initialData() {
    const fetchRecords = await fetch('/data/DATA.json');
    const responseRecords = await fetchRecords.json();
    this._userStories = responseRecords.listStory; // Sesuaikan dengan struktur data
    this._populateStoriesToCard(this._userStories);
  },

  _populateStoriesToCard(stories = null) {
    if (!(typeof stories === 'object')) {
      throw new Error(`Parameter stories should be an object.`);
    }

    if (!Array.isArray(stories)) {
      throw new Error('Parameter stories should be an array.');
    }

    const storyCardsContainer = document.getElementById('storyCards');
    storyCardsContainer.innerHTML = ''; // Clear existing cards

    stories.forEach((story) => {
      const formattedDate = moment(story.createdAt).format('MMMM Do YYYY, h:mm:ss a');

      const card = document.createElement('div');
      card.className = 'col-sm row-sm d-flex py-4';
      card.innerHTML = `
        <div class="card flex-fill" style="width: 18rem">
          <img src="${story.photoUrl}" class="card-img-top" alt="${story.name}" />
          <div class="card-body">
            <h5 class="card-title">${story.name}</h5>
            <p class="card-dates">${formattedDate}</p>
            <p class="card-text">${story.description}</p>
            <a href="#" class="btn btn-warning">Lihat Detail</a>
          </div>
        </div>
      `;
      storyCardsContainer.appendChild(card);
    });
  },
};

export default Home;
