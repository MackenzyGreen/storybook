import Card from "../components/CookBook/Card";

export default {
    title: "Cookbook/Recipe Card",
    component: Card,
    tags: ['autodocs']
};

export const defaultCard = {
    args: {
        title: "Recipe Name",
        ingredientsList: ["Salmon", "Rice", "Oil", "Lemon", "Salmon", "Rice", "Oil", "Lemon", "Salmon", "Rice", "Oil", "Lemon", "Salmon", "Rice", "Oil", "Lemon", "Salmon", "Rice", "Oil", "Lemon", ],
        quickInfo: [
            { type: "prep", value: "8 min" },
            { type: "time", value: "15 min" },
            { type: "protein", value: "26g" },
            { type: "link", value: "https://google.com" }
        ]
    }
}