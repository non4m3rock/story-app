import { html } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';

class LoadingIndicator extends LitWithoutShadowDom {
  static properties = {
    loadingText: { type: String, reflect: true },
  };

  constructor() {
    super();
    this.loadingText = 'Harap menunggu...';
  }

  render() {
    return html`
      <div
        class="position-fixed top-50 start-50 translate-middle text-center"
        style="z-index: 9999;"
      >
        <div>
          <div class="spinner-grow text-primary" role="status">
            <span class="visually-hidden">${this.loadingText}</span>
          </div>
          <div class="spinner-grow text-secondary" role="status">
            <span class="visually-hidden">${this.loadingText}</span>
          </div>
          <div class="spinner-grow text-success" role="status">
            <span class="visually-hidden">${this.loadingText}</span>
          </div>
          <div class="spinner-grow text-danger" role="status">
            <span class="visually-hidden">${this.loadingText}</span>
          </div>
          <div class="spinner-grow text-warning" role="status">
            <span class="visually-hidden">${this.loadingText}</span>
          </div>
          <div class="spinner-grow text-info" role="status">
            <span class="visually-hidden">${this.loadingText}</span>
          </div>
          <div class="spinner-grow text-light" role="status">
            <span class="visually-hidden">${this.loadingText}</span>
          </div>
          <div class="spinner-grow text-dark" role="status">
            <span class="visually-hidden">${this.loadingText}</span>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('loading-indicator', LoadingIndicator);
