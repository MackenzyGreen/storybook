import ExampleStack from "../components/ExampleStack/ExampleStack"

export default {
  title: "Examples/Stack",
  component: ExampleStack,
  argTypes: {
    numberOfChildren: { type: "number" },
  },
}

const Template = ({ numberOfChildren = 4, ...args }) => (
  <ExampleStack {...args}>
    {[...Array(numberOfChildren).keys()].map(n => (
      <div
        style={{
          width: "50px",
          height: "50px",
          backgroundColor: "red",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {n + 1}
      </div>
    ))}
  </ExampleStack>
)

export const Horizontal = Template.bind({})
Horizontal.args = {
  direction: "row",
  spacing: 2,
  wrap: false,
  numberOfChildren: 4
}