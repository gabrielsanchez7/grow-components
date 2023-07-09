import { Meta, StoryObj } from "@storybook/web-components"
import { ifDefined } from 'lit/directives/if-defined.js'
import { unsafeHTML } from 'lit/directives/unsafe-html.js'
import { html } from "lit"
import './gr-button'

export default {
  title: 'Grow/Button',
  argTypes: {
    label: {
      control: { type: 'text' }
    },
    size: {
      options: ['small', 'medium', 'large'],
      default: 'medium',
      control: { type: 'select' }
    },
    type: {
      options: ['boxed', 'outline', 'negative', 'inline'],
      default: 'boxed',
      control: { type: 'select' }
    },
    priority: {
      options: ['primary', 'secondary', 'tertiary'],
      default: 'primary',
      control: { type: 'select' }
    },
    icon: {
      control: { type: 'text' }
    },
    iconPosition: {
      options: ['leading', 'trailing', 'center'],
      default: 'center',
      control: 'select'
    },
    state: {
      options: ['loading', 'disabled'],
      control: 'select'
    },
    href: {
      control: { type: 'text' }
    },
    target: {
      options: ['_blank', '_parent', '_self', '_top'],
      default: '_blank',
      control: { type: 'select' }
    },
    full: {
      control: { type: 'boolean' }
    }
  }
} as Meta

const ButtonTemplate = (args) => html`<gr-button
  id="${ifDefined(args.id)}"
  label="${ifDefined(args.label)}"
  size="${ifDefined(args.size)}"
  type="${ifDefined(args.type)}"
  priority="${ifDefined(args.priority)}"
  state="${ifDefined(args.state)}"
  icon-position="${ifDefined(args.iconPosition)}"
  href="${ifDefined(args.href)}"
  target="${ifDefined(args.target)}"
  ?full=${args.full}
>${ifDefined(unsafeHTML(args.icon))}</gr-button>`

export const Default: StoryObj = {
  name: 'Default',
  render: (args) => html`
    ${ButtonTemplate({label: 'Default button', ...args})}
  `
}

export const ButtonSize: StoryObj = {
  name: 'Sizes',
  render: (args) => html`
${ButtonTemplate({label: 'Large button', size: 'large', ...args})}
${ButtonTemplate({label: 'Medium button', size: 'medium', ...args})}
${ButtonTemplate({label: 'Small button', size: 'small', ...args})}
  `
}

export const ButtonStyles: StoryObj = {
  name: 'Styles',
  render: (args) => html`
${ButtonTemplate({label: 'Boxed button', type: 'boxed', ...args})}
${ButtonTemplate({label: 'Outline button', type: 'outline', ...args})}
${ButtonTemplate({label: 'Negative button', type: 'negative', ...args})}
${ButtonTemplate({label: 'Inline button', type: 'inline', ...args})}
  `
}

export const ButtonIcons: StoryObj = {
  name: 'With icons',
  render: (args) => html`
${ButtonTemplate({label: 'Leading icon', iconPosition: 'leading', icon:'<i slot="icon" class="fa-solid fa-gear"></i>', ...args})}
${ButtonTemplate({label: 'Trailing icon', iconPosition: 'trailing', icon:'<i slot="icon" class="fa-solid fa-gear"></i>', ...args})}
${ButtonTemplate({iconPosition: 'center', icon:'<i slot="icon" class="fa-solid fa-gear"></i>', ...args})}
  `
}

export const ButtonStates: StoryObj = {
  name: 'States',
  render: (args) => html`
${ButtonTemplate({label: 'Loading button', state: 'loading', ...args})}
${ButtonTemplate({label: 'Disabled button', state: 'disabled', ...args})}
  `
}

export const ButtonClick: StoryObj = {
  name: 'Click to load',
  render: (args) => html`
    <script type="text/javascript">
      var btn = document.querySelector('#button-load')
      btn.addEventListener('click', e => {
        const target = e.target
        target.setAttribute('state', 'loading')

        setTimeout(() => target.removeAttribute('state'), 3000)
      })
    </script>
    ${ButtonTemplate({label: 'Click on me', id: 'button-load', ...args})}
  `
}

export const ButtonLink: StoryObj = {
  name: 'With link',
  render: (args) => html`
${ButtonTemplate({label: 'Open google.com', href: 'https://www.google.com/', target: "_blank", ...args})}
  `
}

export const ButtonFull: StoryObj = {
  name: 'Full width',
  render: (args) => html`
${ButtonTemplate({label: 'Full width', full: true, ...args})}
  `
}