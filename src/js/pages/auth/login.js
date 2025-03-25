import Auth from '../../network/auth';
import Config from '../../config/config';
import Utils from '../../utils/utils';
import CheckUserAuth from '../auth/check-user-auth';

const Login = {
  async init() {
    CheckUserAuth.checkLoginState();
    this._initialListener();
    this._addShowPasswordToggle();
  },

  _initialListener() {
    const loginForm = document.querySelector('#loginForm');
    loginForm.addEventListener(
      'submit',
      async (event) => {
        event.preventDefault();
        event.stopPropagation();

        loginForm.classList.add('was-validated');
        await this._getLogged();
      },
      false,
    );
  },

  async _getLogged() {
    const formData = this._getFormData();
    const loginError = document.querySelector('#loginError');

    if (loginError) {
      loginError.textContent = '';
    }

    if (this._validateFormData({ ...formData })) {
      console.log('formData');
      console.log(formData);

      try {
        const response = await Auth.login({
          email: formData.email,
          password: formData.password,
        });
        console.log('Login response:', response);
        if (
          response &&
          response.data &&
          response.data.loginResult &&
          response.data.loginResult.token
        ) {
          // Sesuaikan dengan struktur respons
          Utils.setUserToken(Config.USER_TOKEN_KEY, response.data.loginResult.token); // Sesuaikan dengan struktur respons
          window.alert('Signed user in detected');
          this._goToDashboardPage();
        } else {
          console.error('Token not found in response:', response);
          if (loginError) {
            loginError.textContent =
              'Login berhasil, tetapi token tidak ditemukan. Silakan coba lagi.';
          }
        }
      } catch (error) {
        console.error('Login failed:', error);
        if (loginError) {
          if (error.response && error.response.data && error.response.data.message) {
            loginError.textContent = error.response.data.message;
          } else {
            loginError.textContent = 'Login gagal. Periksa email dan password Anda.';
          }
        }
      }
    }
  },

  _getFormData() {
    const email = document.querySelector('#validationCustomRecordEmail');
    const password = document.querySelector('#validationCustomPassword');

    if (password.value.length < 8) {
      window.alert('Password harus minimal 8 karakter.');
      return null;
    }

    return {
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

  _goToDashboardPage() {
    window.location.href = '/';
  },
};

export default Login;
