// import CheckUserAuth from './pages/auth/check-user-auth';

const AddStory = {
  async init() {
    // CheckUserAuth.checkLoginState();
    // this._setupForm();
    this._setupBootstrapValidation(); // Tambahkan ini
  },

  // _setupForm() {
  //   document.getElementById('addStoryForm').addEventListener('submit', (event) => {
  //     event.preventDefault();
  //     if (document.getElementById('addStoryForm').checkValidity()) {
  //       // Hanya panggil _addStory jika formulir valid
  //       this._addStory();
  //     }
  //   });
  // },

  // async _addStory() {
  //   const description = document.getElementById('description').value;
  //   const photo = document.getElementById('photo').files[0];

  //   if (photo) {
  //     const reader = new FileReader();

  //     reader.onload = async (e) => {
  //       const photoBase64 = e.target.result;
  //       try {
  //         const response = await fetch('/data/DATA.json', {
  //           method: 'POST',
  //           headers: {
  //             'Content-Type': 'application/json',
  //           },
  //           body: JSON.stringify({ description: description, photo: photoBase64 }),
  //         });

  //         if (!response.ok) {
  //           throw new Error(`HTTP error! status: ${response.status}`);
  //         }

  //         const data = await response.json();
  //         console.log('Sukses:', data);
  //         alert('Cerita berhasil ditambahkan!');
  //         document.getElementById('addStoryForm').reset(); // Reset form setelah sukses
  //       } catch (error) {
  //         console.error('Error:', error);
  //         alert('Gagal menambahkan cerita. Silakan coba lagi.');
  //       }
  //     };

  //     reader.readAsDataURL(photo);
  //   } else {
  //     alert('Mohon pilih foto.');
  //   }
  // },

  _setupBootstrapValidation() {
    (function () {
      'use strict';
      const forms = document.querySelectorAll('.needs-validation');
      Array.prototype.slice.call(forms).forEach(function (form) {
        form.addEventListener(
          'submit',
          function (event) {
            if (!form.checkValidity()) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add('was-validated');
          },
          false,
        );
      });
    })();
  },
};

AddStory.init();
