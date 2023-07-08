import { LitElement, html, unsafeCSS } from "lit";
import { customElement, property, query } from "lit/decorators.js";
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

  @query('.gr-button')
  host: HTMLElement | undefined | null
  
  configClassName() {
    return modifiersToBem('button', [
      this.type,
      this.size,
      this.priority,
      this.status,
      this.iconPosition
    ])
  }

  _handleClick(e: MouseEvent) {
    const event = new CustomEvent('gr-click', {bubbles: true, composed: true, detail: e})
    this.dispatchEvent(event)
  }

  shouldUpdate(changed: any) {
    if(changed.has('status') && this.host) {
      const sizes = this.host.getBoundingClientRect()
      const width = sizes.width.toFixed(2)
      this.host.style.width = `${width}px`
    } else {
      this.host?.style.removeProperty('width')
    }

    return true
  }
  
  render() {
    const label = (this.label && this.status != 'loading') ? html`<span class="gr-button__label">${this.label}</span>` : ''
    const load = this.status == 'loading' ? html`<gr-loader color="#FFFFFF"></gr-loader>` : ''
    
    return html`
      <button type="button" class="${this.configClassName()}" @click=${(e: MouseEvent) => this._handleClick(e)}>
        <span class="gr-button__background"></span>
        <slot name="icon"></slot>
        ${load}
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