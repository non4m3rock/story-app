import { html } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';
import './NavLinks';

class NavApp extends LitWithoutShadowDom {
  static properties = {
    brandName: { type: String, reflect: true },
  };

  constructor() {
    super();
    this._checkAvailabilityProperty();
  }

  _checkAvailabilityProperty() {
    if (!this.hasAttribute('brandName')) {
      throw new Error(`Atribut "brandName" harus diterapkan pada elemen ${this.localName}`);
    }
  }

  render() {
    return html`
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <button
            class="btn btn-warning"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasTop"
            aria-controls="offcanvasTop"
          >
            ☰
          </button>
          <h5 class="navbar-brand">${this.brandName}</h5>
          <div
            class="offcanvas offcanvas-top bg-dark text-white"
            tabindex="-1"
            id="offcanvasTop"
            aria-labelledby="offcanvasTopLabel"
          >
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasTopLabel">Menu</h5>
              <button
                type="button"
                class="btn-close text-reset text-white"
                data-bs-dismiss="offcanvas"
                aria-label="Tutup"
              ></button>
            </div>
            <div class="offcanvas-body">
              <nav-links></nav-links>
            </div>
          </div>
        </div>
      </nav>
    `;
  }
}

customElements.define('nav-app', NavApp);
