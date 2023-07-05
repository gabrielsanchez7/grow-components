import { LitElement, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import styles from "./gr-button.css?inline";
import { modifiersToBem } from "../../utilities/functions";

@customElement('gr-button')
export class GrButton extends LitElement {

  static styles = [unsafeCSS(styles)]

  @property()
  label: String | undefined

  @property()
  type: 'boxed' | 'outline' | 'negative' | 'inline' = 'boxed'

  @property()
  size: 'small' | 'medium' | 'large' = 'medium'

  @property()
  priority: 'primary' | 'secondary' | 'tertiary' = 'primary'

  @property()
  status: 'loading' | 'disabled' | undefined

  configClassName() {
    return modifiersToBem('button', [
      this.type,
      this.size,
      this.priority,
      this.status
    ])
  }
  
  render() {
    return html`
      <button type="button" class="${this.configClassName()}">
        <span class="gr-button__background"></span>
        <span class="gr-button__label">${this.label}</span>
      </button>
    `
  }
  
}

declare global {
  interface HTMLElementTagNameMap {
    'gr-button': GrButton
  }
}