import PreviousSearches from "../components/PreviousSearches"
import RecipeCard from "../components/RecipeCard"

export default function Recipes(){
    const recipes = [
        {
            title: "Chicken Pan Pizza",
            image: "/img/gallery/img_11.jpg",
            authorImg: "/img/gallery/cf-1.jpg",
        }, 
        {
            title: "Spaghetti and Meatballs",
            image: "/img/gallery/img_19.jpeg",
            authorImg: "/img/gallery/img_20.jpeg",
        },
        {
            title: "Cheese Burger",
            image: "/img/gallery/img_17.jpeg",
            authorImg: "/img/gallery/img_15.jpeg",
        },
        {
            title: "Mutton Biriyani",
            image: "/img/gallery/img_12.jpg",
            authorImg: "/img/gallery/cf-1.jpg",
        },
        {
            title: "Sushi",
            image: "/img/gallery/img_14.jpeg",
            authorImg: "/img/gallery/img_13.jpg",
        },
        {
            title: "Chicken Pan Pizza",
            image: "/img/gallery/img_18.jpeg",
            authorImg: "/img/gallery/img_13.jpg",
        }, 
        {
            title: "Spaghetti and Meatballs",
            image: "/img/gallery/img_19.jpeg",
            authorImg: "/img/gallery/img_20.jpeg",
        },
        {
            title: "American Cheese Burger",
            image: "/img/gallery/img_17.jpeg",
            authorImg: "/img/gallery/img_16.jpg",
        },
        {
            title: "Mutton Biriyani",
            image: "/img/gallery/img_12.jpg",
            authorImg: "/img/gallery/cf-1.jpg",
        },
        {
            title: "Japanese Sushi",
            image: "/img/gallery/img_14.jpeg",
            authorImg: "/img/gallery/img_15.jpeg",
        },
        {
            title: "American Cheese Burger",
            image: "/img/gallery/img_17.jpeg",
            authorImg: "/img/gallery/img_15.jpeg",
        },
        {
            title: "Mutton Biriyani",
            image: "/img/gallery/img_12.jpg",
            authorImg: "/img/gallery/cf-1.jpg",
        }
    ].sort(() => Math.random() - 0.5)

    return (
        <div>
            <PreviousSearches />
            <div className="recipes-container">
                {/* <RecipeCard /> */}
                {recipes.map((recipe, index) => (
                    <RecipeCard key={index} recipe={recipe} />
                ))}
            </div>
        </div>
    )
}

