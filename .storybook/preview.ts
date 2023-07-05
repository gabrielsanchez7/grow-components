import type { Preview } from "@storybook/web-components";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    viewMode: 'docs',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      transformSource: source =>
        source
          .replace(/<!--\?lit\$[0-9]+\$-->|<!--\??-->/g, '')
          // Clean empty boolean attribute values
          .replace(/=\"\"/g, '')
          // Clean hover hack classes
          .replace(/ class=\"__ONLY_FOR_STORYBOOK_DEMONSTRATION_HOVER__\"/g, ''),
    },
    options: {
      storySort: {
        method: 'alphabetical',
        order: ['Documentation', ['Welcome', '*'], 'Frameworks', 'Components', 'Design System'],
        locales: 'en-US',
      },
    },
  },
};

export default preview;
