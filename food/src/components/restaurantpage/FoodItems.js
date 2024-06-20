import DishCard from "./DishCard";

// Component to display the list of food categories
const FoodItems = ({ foodCategories }) => {
    return foodCategories.map((category) => (
        <DisplayCategory key={category.card.card.title} category={category} />
    ));
};



// Component to display a single food category
const DisplayCategory = ({ category }) => {
    const { card } = category?.card;

    // Check if the card type is ItemCategory
    if (card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory") {
        const title = card?.title;
        const items = card?.itemCards;

        return (
            <div className="mx-10 my-2 text-primary-content">
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="checkbox" name="my-accordion-1" />
                    <div className="collapse-title text-xl font-medium">
                        {title}
                    </div>
                    <div className="collapse-content">
                        {items.map((dish) => (
                            <DishCard key={dish.card.info.id} dish={dish} />
                        ))}
                    </div>
                </div>
            </div>
        );
    } else {
        return null;
    }
};

export default FoodItems;
