import { html } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';

class CardHome extends LitWithoutShadowDom {
  static properties = {
    content: { type: String, reflect: true },
    description: { type: String, reflect: true },
    classes: { type: String, reflect: true },
  };

  constructor() {
    super();

    this.content = '';
    this.description = '';
    this.classes = '';
  }

  render() {
    return html`
      <div class="card ${this.classes}">
        <div class="row my-4">
          <div class="col">
            ${this.content}<br />
            <div class="container-fluid">
              <div id="storyCards" class="row row-cols-1 row-cols-md-2"></div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('card-home', CardHome);
