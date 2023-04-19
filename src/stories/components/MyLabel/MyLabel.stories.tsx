import { Meta, StoryObj } from '@storybook/react';
import MyLabel from '../../../components/MyLabel';
import { Basic, Normal, AllCaps } from './';

const meta = {
  title: 'UI/My Label',
  component: MyLabel,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'radio',
    },
  },
} satisfies Meta<typeof MyLabel>;

export default meta;
export type Story = StoryObj<typeof meta>;

export { Basic, Normal, AllCaps };
