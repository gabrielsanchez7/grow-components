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
  
  customizeStyle() {
    const styles = []

    if(this.thickness) {
      styles.push(`border-width: ${this.thickness}px;`)
    }

    if(this.size) {
      styles.push(`height: ${this.size}px;`)
      styles.push(`width: ${this.size}px;`)
    }

    if(this.color) {
      styles.push(`border-color: ${this.color}4D;`)
      styles.push(`border-top-color: ${this.color};`)
    }

    return styles.join(' ')
  }

  

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