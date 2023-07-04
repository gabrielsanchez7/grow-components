import { LitElement, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import defaultStyles from "../assets/default.css?inline";
import styles from "./gr-button.css?inline";

@customElement('gr-button')
export class GrButton extends LitElement {

  static styles = [unsafeCSS(defaultStyles), unsafeCSS(styles)]
  
  @property()
  label: String | undefined
  
  render() {
    return html`
      <button type="button">${this.label}</button>
    `
  }
  
}

declare global {
  interface HTMLElementTagNameMap {
    'gr-button': GrButton
  }
}