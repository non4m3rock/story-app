import { html } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';

class NavLinks extends LitWithoutShadowDom {
  render() {
    return html`
      <ul class="nav nav-pills nav-fill">
        <li class="nav-item">
          <nav-link to="/" content="Home"></nav-link>
        </li>
        <li class="nav-item">
          <nav-link to="addstory.html" content="Add Story" "color-text"></nav-link>
        </li>
        <li class="nav-item">
          <nav-link to="profil.html" content="Profil"></nav-link>
        </li>
        <li class="nav-item">
          <nav-link-auth class="d-none" id="userLoggedMenu"></nav-link-auth>
        </li>
      </ul>
    `;
  }
}

customElements.define('nav-links', NavLinks);
