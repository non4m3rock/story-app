const Home = {
  async init() {
    await this._initialData();
  },

  async _initialData() {
    const fetchRecords = await fetch('/src/public/data/DATA.json');
    const responseRecords = await fetchRecords.json();
    this._userStories = responseRecords.results.stories;
    this._populateStoriesToTable(this._userStories);
    this._populateStoriesToCard(this._userStories);
  },

  _populateStoriesToCard(stories = null) {
    if (!(typeof stories === 'object')) {
      throw new Error(`Parameter stories should be an object.`);
    }

    if (!Array.isArray(stories)) {
      throw new Error('Parameter stories should be an array.');
    }

    let totalStories = stories.length;

    document.querySelector('#numberOfStories').innerText = totalStories;
  },

  _populateStoriesToTable(stories = null) {
    if (!(typeof stories === 'object')) {
      throw new Error(`Parameter stories should be an object. The value is ${stories}`);
    }

    if (!Array.isArray(stories)) {
      throw new Error(`Parameter stories should be an array. The value is ${stories}`);
    }

    const recordBodyTable = document.querySelector('#recordsTable tbody');

    recordBodyTable.innerHTML = '';
    if (stories.length <= 0) {
      recordBodyTable.innerHTML = this._templateEmptyBodyTable();
      return;
    }

    stories.forEach((item, idx) => {
      recordBodyTable.innerHTML += this._templateBodyTable(idx, stories[idx]);
    });
  },

  _templateBodyTable(index, story) {
    return `
      
    `;
  },

  _templateEmptyBodyTable() {
    const recordHeadTable = document.querySelector('#recordsTable thead');

    return `
      <tr>
        <td colspan="${recordHeadTable.querySelectorAll('td,th').length}">
          <div class="text-center">Tidak ada catatan cerita</div>
        </td>
      </tr>
    `;
  },
};

export default Home;
