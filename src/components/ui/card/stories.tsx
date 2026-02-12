import { fn } from "storybook/test";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from ".";

const meta = {
  title: "Components/Shadcn/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  args: {
    size: "default",
    onClick: fn(),
  },
  argTypes: {
    size: {
      options: ["default", "sm"],
      control: { type: "select" },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Card>;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: (args) => (
    <Card {...args} className="mx-auto w-full max-w-sm">
      <CardHeader>
        <CardTitle>Small Card</CardTitle>
        <CardDescription>
          This card uses the small size variant.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          The card component supports a size prop that can be set to
          &quot;sm&quot; for a more compact appearance.
        </p>
      </CardContent>
      <CardFooter>
        <Button variant="outline" size="sm" className="w-full">
          Action
        </Button>
      </CardFooter>
    </Card>
  ),
};

export default meta;
