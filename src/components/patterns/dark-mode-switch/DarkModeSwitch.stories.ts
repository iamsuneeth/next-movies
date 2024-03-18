import type { Meta, StoryObj } from '@storybook/react';
import { DarkModeSwitch } from './DarkModeSwitch';

const meta = {
  title: 'patterns/DarkModeSwitch',
  component: DarkModeSwitch,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],
} satisfies Meta<typeof DarkModeSwitch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
