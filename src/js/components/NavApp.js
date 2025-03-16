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
            三
          </button>
          <h5 id="offcanvasTopLabel" class="navbar-brand">${this.brandName}</h5>
          <div
            class="offcanvas offcanvas-top bg-dark"
            tabindex="-1"
            id="offcanvasTop"
            aria-labelledby="offcanvasTopLabel"
          >
            <div class="offcanvas-header">
              <div class="offcanvas-body"><nav-links></nav-links></div>
            </div>
          </div>
        </div>
      </nav>
    `;
  }
}

customElements.define('nav-app', NavApp);
