import ExampleButton from "../components/ExampleButton/ExampleButton";

/**A versatile button for destuctive and confirming actions */
export default {
    title: "Examples/Button",
    component: ExampleButton,
    argTypes: { handleClick: { action: "handleClick" } },
    tags: ['autodocs'],
}

/**Used for destruction */
export const Red = {
    args: {
        backgroundColor: 'red',
        label: 'Press Me',
        size: 'md'
    },
};

/**Used for confirmation */
export const Green = {
    args: {
        backgroundColor: 'green',
        label: 'Press Me',
        size: 'md'
    },
};

export const Small = {
    args: {
        backgroundColor: 'red',
        label: 'Press Me',
        size: 'sm'
    }
};

export const Large = {
    args: {
        backgroundColor: 'red',
        label: 'Press Me',
        size: 'lg'
    }
};

export const LongLabel = {
    args: {
        backgroundColor: 'red',
        label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        size: 'md'
    }
};