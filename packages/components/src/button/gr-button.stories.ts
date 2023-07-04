import { StoryFn } from "@storybook/web-components";
import "./gr-button";

export default {
  title: 'Grow/Button',
}

export const Default: StoryFn<Partial<any>> = (args: Partial<any>) => {
  return `<gr-button label="Whereas!"></gr-button>`
}