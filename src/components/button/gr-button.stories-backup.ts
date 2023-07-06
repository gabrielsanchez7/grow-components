import { Meta } from "@storybook/web-components";
import "./gr-button";

export default {
  title: 'Grow/Button',
  argTypes: {
    label: { type: 'string' },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large']
      }
    }
  }
} as Meta

export const Sizes = (args) => {
  return `<div style="${flexStyles}">
    <gr-button size="large" label="${args.label ?? "Large button"}"></gr-button>
    <gr-button size="medium" label="${args.label ?? "Medium button"}"></gr-button>
    <gr-button size="small" label="${args.label ?? "Small button"}"></gr-button>
  </div>`
}

export const Types = (args) => {
  return `<div style="${flexStyles}">
    <gr-button type="boxed" label="${args.label ?? "Boxed button"}"></gr-button>
    <gr-button type="outline" label="${args.label ?? "Outline button"}"></gr-button>
    <gr-button type="negative" label="${args.label ?? "Negative button"}"></gr-button>
    <gr-button type="inline" label="${args.label ?? "Inline button"}"></gr-button>
  </div>`
}

export const WithIcons = (args) => {
  return `<div style="${flexStyles}">
    <gr-button label="${args.label ?? "Leading icon"}">
      <i slot="leading-icon" class="fa-solid fa-gear"></i>
    </gr-button>
    <gr-button label="${args.label ?? "Trailing icon"}">
      <i slot="trailing-icon" class="fa-solid fa-gear"></i>
    </gr-button>
    <gr-button>
      <i slot="icon" class="fa-solid fa-gear"></i>
    </gr-button>
  </div>`
}

const flexStyles = `
  display: flex;
  align-items: center;
  gap: 15px;
`