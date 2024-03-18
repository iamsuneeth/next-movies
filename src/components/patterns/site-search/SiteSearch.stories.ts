import type { Meta, StoryObj } from '@storybook/react';
import { SiteSearch } from './SiteSearch';

const meta = {
  title: 'patterns/SiteSearch',
  component: SiteSearch,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],
} satisfies Meta<typeof SiteSearch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
