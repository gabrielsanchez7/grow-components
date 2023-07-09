import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { Meta, StoryObj } from '@storybook/web-components';
import "./gr-loader";

export default {
  title: 'Grow/Loader',
  argTypes: {
    thickness: {
      control: { type: 'number' },
    },
    size: {
      control: { type: 'number' },
    },
    color: {
      control: { type: 'color' }
    }
  },
  args: {
    thickness: 3,
    size: 20
  }
} as Meta

const LoaderTemplate = (args) => html`<gr-loader
thickness=${ifDefined(args.thickness)}
size=${ifDefined(args.size)}
color=${ifDefined(args.color)}
></gr-loader>`

export const LoaderDefault: StoryObj = {
  name: 'Default',
  render: (args) => html`
${LoaderTemplate({thickness: args.thickness, size: args.size, color: args.color})}
  `
}