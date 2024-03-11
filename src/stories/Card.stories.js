import Card from "../components/CookBook/Card";

export default {
    title: "Cookbook/Recipe Card",
    component: Card,
    tags: ['autodocs']
};

export const defaultCard = {
    args: {
        title: "Recipe Name",
        ingredientsList: ["Salmon", "Rice", "Oil", "Lemon"],
        quickInfo: [{ type: "prep", value: "8 min" }]
    }
}