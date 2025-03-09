const Dashboard = {
  async init() {
    await this._initialData();
  },

  async _initialData() {
    const fetchRecords = await fetch('/data/DATA.json');
    const responseRecords = await fetchRecords.json();
    this._userTransactionsHistory = responseRecords.results.transactionsHistory;
    this._populateTransactionsRecordToTable(this._userTransactionsHistory);
    this._populateTransactionsDataToCard(this._userTransactionsHistory);
  },
};

export default Dashboard;
