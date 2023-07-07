import { LitElement, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import styles from './gr-loader.css?inline';

@customElement('gr-loader')
export class GrLoader extends LitElement {
  
  static styles = [unsafeCSS(styles)]

  @property()
  thickness: Number | undefined

  @property()
  size: Number | undefined

  @property()
  color: String | undefined
  
  customizeStyle = () => [
    `border-width: ${this.thickness ?? 3}px;`,
    `height: ${this.size ?? 20}px;`,
    `width: ${this.size ?? 20}px;`,
    
  ].join(' ')

  render() {
    return html`
      <div class="gr-loader">
        <div class="gr-loader__indicator" style="${this.customizeStyle()}"></div>
      </div>
    `
  }
  
}

declare global {
  interface HTMLElementTagNameMap {
    'gr-loader': GrLoader
  }
}