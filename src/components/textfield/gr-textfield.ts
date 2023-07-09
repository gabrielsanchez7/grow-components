import { LitElement, html, unsafeCSS } from "lit"
import styles from "./gr-textfield.css?inline"
import { customElement, property } from "lit/decorators.js"
import { modifiersToBem } from "../../utilities/functions"

export type TextfieldSize = 'small' | 'medium' | 'large'

@customElement('gr-textfield')
export class GrTextfield extends LitElement {

  static styles = [unsafeCSS(styles)]
  
  @property({type: String, reflect: true})
  placeholder?: string
  
  @property({type: String, reflect: true})
  size: TextfieldSize = 'medium'
  
  configClassName() {
    return modifiersToBem('textfield', [
      this.size
    ])
  }
  
  render() {
    return html`
      <div class="${this.configClassName()}">Textfield</div>
    `
  }
  
}

declare global {
  interface HTMLElementTagNameMap {
    'gr-textfield': GrTextfield
  }
}