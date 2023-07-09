import { LitElement, html, unsafeCSS } from "lit"
import { customElement, property, query } from "lit/decorators.js"
import styles from "./gr-button.css?inline"
import { modifiersToBem } from "../../utilities/functions"
import '../loader/gr-loader'

export type ButtonType = 'boxed' | 'outline' | 'negative' | 'inline'
export type ButtonSize = 'small' | 'medium' | 'large'
export type ButtonPriority = 'primary' | 'secondary' | 'tertiary'
export type ButtonState = 'loading' | 'disabled'
export type ButtonIconPosition = 'leading' | 'trailing'
export type ButtonHrefTarget = '_blank' | '_parent' | '_self' | '_top'

@customElement('gr-button')
export class GrButton extends LitElement {

  static styles = [unsafeCSS(styles)]

  @property({type: String, reflect: true})
  label?: string

  @property({type: String, reflect: true})
  type: ButtonType = 'boxed'

  @property({type: String, reflect: true})
  size: ButtonSize = 'medium'

  @property({type: String, reflect: true})
  priority: ButtonPriority = 'primary'

  @property({type: String, reflect: true})
  state?: ButtonState

  @property({attribute: 'icon-position', type: String, reflect: true})
  iconPosition?: ButtonIconPosition

  @property({type: Boolean, reflect: true})
  full = false
  
  @property({type: String, reflect: true})
  href?: URL

  @property({type: String, reflect: true})
  target?: ButtonHrefTarget = '_self'
  
  @query('.gr-button')
  host?: HTMLElement
  
  configClassName() {
    return modifiersToBem('button', [
      this.type,
      this.size,
      this.priority,
      this.state,
      this.iconPosition,
      this.full ? 'full' : ''
    ])
  }
  
  _handleClick(e: MouseEvent) {
    const event = new CustomEvent('gr-click', {bubbles: true, composed: true, detail: e})
    this.dispatchEvent(event)
  }

  shouldUpdate(changed: any) {
    if(changed.has('state') && this.state == 'loading' && this.host) {
      const sizes = this.host.getBoundingClientRect()
      const width = sizes.width
      this.host.style.width = `${width}px`
    } else {
      this.host?.style.removeProperty('width')
    }

    return true
  }
  
  render() {
    if(this.full) {
      Object.assign(this.style, {
        display: 'block',
        width: '100%'
      })
    }
    
    const label = (this.label && this.state != 'loading') ? html`<span class="gr-button__label">${this.label}</span>` : ''
    const loaderColor = this.type != 'boxed' ? '#2BBCBC' : '#FFFFFF'
    const load = this.state == 'loading' ? html`<gr-loader color="${loaderColor}"></gr-loader>` : ''

    if(this.href) {
      return html`
        <a href="${this.href}" target="${this.target}" class="${this.configClassName()}">
          <span class="gr-button__background"></span>
          ${load}
          ${label}
        </a>
      `
    } else {
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
  
}

declare global {
  interface HTMLElementTagNameMap {
    'gr-button': GrButton
  }
}