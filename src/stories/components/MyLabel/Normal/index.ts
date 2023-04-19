import {  Story } from "../MyLabel.stories";
import { Basic } from '../Basic';

export const Normal: Story = {
  args: {
    ...Basic.args,
    size: 'normal',
  },
};