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

  @property({attribute: 'icon-position'})
  iconPosition: 'center' | 'leading' | 'trailing' = 'center'

  configClassName() {
    return modifiersToBem('button', [
      this.type,
      this.size,
      this.priority,
      this.status,
      this.iconPosition
    ])
  }
  
  render() {
    const label = (this.label && this.status != 'loading') && html`<span class="gr-button__label">${this.label}</span>`
    
    return html`
      <button type="button" class="${this.configClassName()}">
        <span class="gr-button__background"></span>
        <slot name="icon"></slot>
        ${label}
      </button>
    `
  }
  
}

declare global {
  interface HTMLElementTagNameMap {
    'gr-button': GrButton
  }
}