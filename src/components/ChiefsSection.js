import ChiefCard from "./ChiefCard"

export default function ChiefsSection(){
    const chiefs = [
        {
            name: "Julie Carlos",
            img: "/img/gallery/img_16.jpg",
            recipesCount: "10",
            cuisine: "Mexican",
        },
        {
            name: "John Doe",
            img: "/img/gallery/img_15.jpeg",
            recipesCount: "05",
            cuisine: "Japanese",
        },
        {
            name: "Erich Maria",
            img: "/img/gallery/img_24.jpeg",
            recipesCount: "13",
            cuisine: "Italian",
        },
        {
            name: "Gordan Ramsey",
            img: "/img/gallery/img_22.jpeg",
            recipesCount: "08",
            cuisine: "American"
        },
        {
            name: "Blake Lively",
            img: "/img/gallery/img_21.jpeg",
            recipesCount: "09",
            cuisine: "French"
        },
        {
            name: "Ranveer Brar",
            img: "/img/gallery/img_23.jpg",
            recipesCount: "04",
            cuisine: "Indian"
        }
    ]
    return (
        <div className="section chiefs">
            <h1 className="title">Our Top Chiefs</h1>
            <div className="top-chiefs-container">
                {/* <ChiefCard />
                <ChiefCard />
                <ChiefCard />
                <ChiefCard />
                <ChiefCard />
                <ChiefCard /> */}
                { chiefs.map(chief => <ChiefCard key={chief.name} chief={chief} />) }
            </div>
        </div>
    )
}