import type { Meta, StoryObj } from '@storybook/react';
import { ProfileButton } from './ProfileButton';

const meta = {
  title: 'patterns/ProfileButton',
  component: ProfileButton,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],
} satisfies Meta<typeof ProfileButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
