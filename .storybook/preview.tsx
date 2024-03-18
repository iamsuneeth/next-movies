import type { Preview } from '@storybook/react';
import '../src/app/globals.css';
import { ThemeProvider } from 'next-themes';
import React from 'react';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;
