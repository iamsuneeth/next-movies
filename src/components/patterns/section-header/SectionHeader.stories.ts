import type { Meta, StoryObj } from '@storybook/react';
import { SectionHeader } from './SectionHeader';

const meta = {
  title: 'patterns/SectionHeader',
  component: SectionHeader,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],
} satisfies Meta<typeof SectionHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Title',
    subTitle: 'SubTitle',
  },
};
