import { Basic } from "../Basic";
import { Story } from "../MyLabel.stories";

export const AllCaps: Story = {
  args: {
    ...Basic.args,
    allCaps: true,
  },
  name: "All Caps"
};