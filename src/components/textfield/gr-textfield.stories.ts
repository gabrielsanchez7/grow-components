import { Meta, StoryObj } from "@storybook/web-components"
import { html } from "lit"
import './gr-textfield'

export default {
  title: 'Grow/Textfield'
} as Meta

export const Default: StoryObj = {
  name: 'Default',
  render: () => html`<gr-textfield></gr-textfield>`
}