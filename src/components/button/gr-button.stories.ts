import { Meta } from "@storybook/web-components";
import "./gr-button";

export default {
  title: 'Grow/Button',
  argTypes: {
    label: { type: 'string' }
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

const flexStyles = `
  display: flex;
  align-items: center;
  gap: 15px
`