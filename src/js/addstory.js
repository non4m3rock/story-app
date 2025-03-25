import CheckUserAuth from './pages/auth/check-user-auth';
import Story from './network/story';

const AddStory = {
  async init() {
    CheckUserAuth.checkLoginState();
    this._initialUI();
    this._initialListener();
  },

  _initialUI() {
    // Inisialisasi input tanggal dan waktu dengan tanggal dan waktu saat ini
    const dateInput = document.querySelector('#date');
    const now = new Date();
    const formattedDate = now.toISOString().slice(0, 16); // Format: YYYY-MM-DDTHH:mm
    dateInput.value = formattedDate;

    // Anda bisa menambahkan inisialisasi lainnya di sini jika diperlukan
  },

  _initialListener() {
    const addStoryForm = document.querySelector('#addStoryForm');
    addStoryForm.addEventListener(
      'submit',
      (event) => {
        event.preventDefault();
        event.stopPropagation();

        addStoryForm.classList.add('was-validated');
        this._sendPost();
      },
      false,
    );
  },

  async _sendPost() {
    const formData = this._getFormData();

    if (this._validateFormData({ ...formData })) {
      console.log('formData');
      console.log(formData);

      try {
        const response = await Story.store(formData);
        window.alert('Cerita baru berhasil ditambahkan');
        this._goToDashboardPage();
      } catch (error) {
        console.error(error);
        alert('Gagal menambahkan cerita. Silakan coba lagi.');
      }
    }
  },

  _getFormData() {
    const nameInput = document.querySelector('#name');
    const descriptionInput = document.querySelector('#description');
    const photoInput = document.querySelector('#photo');
    const dateInput = document.querySelector('#date');

    return {
      name: nameInput.value,
      description: descriptionInput.value,
      photo: photoInput.files[0],
      date: new Date(dateInput.value),
    };
  },

  _validateFormData(formData) {
    const formDataFiltered = Object.values(formData).filter((item) => item === '');
    return formDataFiltered.length === 0;
  },

  _goToDashboardPage() {
    window.location.href = '/';
  },
};

export default AddStory;
