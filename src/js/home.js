const Home = {
  async init() {
    await this._initialData();
  },

  async _initialData() {
    const fetchRecords = await fetch('/src/public/data/DATA.json');
    const responseRecords = await fetchRecords.json();
  },
};

export default Home;
