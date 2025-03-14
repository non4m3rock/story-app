const AddStory = {
  async init() {
    this._setupForm();
  },

  _setupForm() {
    document.getElementById('addStoryForm').addEventListener('submit', (event) => {
      event.preventDefault();
      this._addStory();
    });
  },

  async _addStory() {
    const description = document.getElementById('description').value;
    const photo = document.getElementById('photo').files[0];

    if (photo) {
      const reader = new FileReader();

      reader.onload = async (e) => {
        const photoBase64 = e.target.result;
        try {
          const response = await fetch('/data/DATA.json', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ description: description, photo: photoBase64 }),
          });

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          const data = await response.json();
          console.log('Sukses:', data);
          alert('Cerita berhasil ditambahkan!');
          document.getElementById('addStoryForm').reset(); // Reset form setelah sukses
        } catch (error) {
          console.error('Error:', error);
          alert('Gagal menambahkan cerita. Silakan coba lagi.');
        }
      };

      reader.readAsDataURL(photo);
    } else {
      alert('Mohon pilih foto.');
    }
  },
};

AddStory.init();
