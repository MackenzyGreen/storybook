import Lozenge from "../components/CookBook/Lozenge";

/**Lozenge to display quick info on top level recipe card */
export default {
    title: "Cookbook/Lozenge",
    component: Lozenge,
    tags: ['autodocs'],
};

/**Used to show prep time */
export const PrepTime = {
    args: {
        type: "prep",
        value: "8 min",
    },
};

/**Used to show cook time */
export const CookTime = {
    args: {
        type: "time",
        value: "15 min",
    },
};

/**Used to show grams of protein per serving */
export const ProteinTime = {
    args: {
        type: "protein",
        value: "26g",
    },
};

/**Used to link to full recipe */
export const SourceLink = {
    args: {
        type: "link",
        value: "https://google.com",
    },
};