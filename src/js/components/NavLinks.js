import { html } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';

class NavLinks extends LitWithoutShadowDom {
  render() {
    return html`
      <ul class="nav nav-pills nav-fill">
        <li class="nav-item">
          <a class="nav-link text-white" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="addstory.html">Add Story</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="profil.html">Profil</a>
        </li>
      </ul>
    `;
  }
}

customElements.define('nav-links', NavLinks);
