import Auth from '../../network/auth';
import CheckUserAuth from '../auth/check-user-auth';

const Register = {
  async init() {
    CheckUserAuth.checkLoginState();
    this._initialListener();
    this._addShowPasswordToggle();
  },

  _initialListener() {
    const registerForm = document.querySelector('#registerForm');
    registerForm.addEventListener(
      'submit',
      async (event) => {
        event.preventDefault();
        event.stopPropagation();

        registerForm.classList.add('was-validated');
        await this._getRegistered();
      },
      false,
    );
  },

  async _getRegistered() {
    const formData = this._getFormData();
    const registerError = document.querySelector('#registerError');

    if (registerError) {
      registerError.textContent = '';
    }

    if (this._validateFormData({ ...formData })) {
      console.log('formData');
      console.log(formData);

      try {
        const response = await Auth.register({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        });

        window.alert('Registered a new user');
        this._goToLoginPage();
      } catch (error) {
        console.error('Registration failed:', error);
        if (registerError) {
          if (error.response && error.response.data && error.response.data.message) {
            registerError.textContent = error.response.data.message;
          } else {
            registerError.textContent = 'Registrasi gagal. Silakan coba lagi.';
          }
        }
      }
    }
  },

  _getFormData() {
    const name = document.querySelector('#validationCustomRecordName');
    const email = document.querySelector('#validationCustomEmail');
    const password = document.querySelector('#validationCustomPassword');

    if (password.value.length < 8) {
      window.alert('Password harus minimal 8 karakter.');
      return null;
    }

    return {
      name: name.value,
      email: email.value,
      password: password.value,
    };
  },

  _validateFormData(formData) {
    if (!formData) {
      return false;
    }
    const formDataFiltered = Object.values(formData).filter((item) => item === '');
    return formDataFiltered.length === 0;
  },

  _addShowPasswordToggle() {
    const showPasswordCheckbox = document.querySelector('#showPassword');
    const passwordInput = document.querySelector('#validationCustomPassword');

    showPasswordCheckbox.addEventListener('change', function () {
      if (this.checked) {
        passwordInput.type = 'text';
      } else {
        passwordInput.type = 'password';
      }
    });
  },

  _goToLoginPage() {
    window.location.href = '/';
  },
};

export default Register;
