const cocktails = 
[
    {
        name: "Screwdriver",
        ingredients:
        [
            "6 Fluid Oz Orange Juice",
            "1 1/2 Fluid Oz Vodka",
            "1 1/2 Cups Ice Cubes"
        ],
        recipe:
        [
            "Gather all ingredients.",
            "Mix vodka and orange juice in a highball glass.",
            "Add Ice. Enjoy!"
        ],
        Calories: 180,
        imgSrc: "./lib/screwdriver.jpg",
        originalRecipe: "https://www.allrecipes.com/recipe/222410/screwdriver-cocktail/"
    },

     {
        name: "Rum Rum Rudolph",
        ingredients:
        [
            "1 Rosemary Sprig",
            "1 Maraschino Cherry",
            "Ice",
            "4 Oz. Coca Colar",
            "2 Oz. Dark or White Rum",
            "1 1/2 Oz. Tart Cherry Juice"
        ],
        recipe:
        [
            "Cut the rosemary spring into two 2 inch pieces.",
            "Poke holes in top of the cherry with a toothpick",
            "Put the cut rosemary springs into the toothpick holes",
            "Poke toothpick thru the marachino cherry",
            "FIll a collins class with Ice then add colar, rum, and cherry juice",
            "Gentrly stir the mixture to combine and garnish with the cherry and rosemary."
        ],
        Calories: 211,
        imgSrc: "./lib/rumrumrudolph.jpg",
        originalRecipe: "https://www.delish.com/cooking/recipe-ideas/a62188057/rum-rum-rudolph-recipe/"
    },

     {
        name: "Champagne Cocktail",
        ingredients:
        [
            "4 Sugar Cubes",
            "1 Bottle Angostura Bitters",
            "1 Bottle Champagne, Very Cold",
            "Lemon Twists for Garnish (optional)"
        ],
        recipe:
        [
            "Soak the sugar cubes in bitters",
            "Drop the sugar cubes in chilled champagne flutes (glasses)",
            "Fill glass with champagne and garnish"
        ],
        Calories: 582,
        imgSrc: "./lib/champagnecocktail.jpg",
        originalRecipe: "https://www.foodnetwork.com/recipes/bobby-flay/champagne-cocktail-recipe-1945798"
    },

     {
        name: "Cosmopolitans",
        ingredients:
        [
            "1 Cup Vodka",
            "1/2 Cup Triple Sec",
            "1/2 Cup Cranberry Juice",
            "1/4 Freshly Squeezed Lime Juice"
        ],
        recipe:
        [
            "Pour all ingredients into a cocktail shaker with ice.",
            "Shake the mixture well & pour thru strainer into four martini glasses.",
        ],
        Calories: 256,
        imgSrc: "./lib/cosmopolitan.jpg",
        originalRecipe: "https://www.foodnetwork.com/recipes/ina-garten/cosmopolitans-recipe-1940698"
    },

     {
        name: "Negroni",
        ingredients:
        [
            "1 Oz Gin",
            "1 Oz Sweet Vermouth",
            "1 Oz Campari",
            "Orange Twist for Garnish (optional)"
        ],
        recipe:
        [
            "Fill a glass with ice.",
            "Mix the gin, sweet vermouth, and campari in the glass.",
            "Garnish with orange twist."
        ],
        Calories: 220,
        imgSrc: "./lib/negroni.jpg",
        originalRecipe: "https://www.foodnetwork.com/recipes/food-network-kitchen/negroni-recipe-2105738"
    }
];

const initDoc = function()
{
    //body
    let body = $("body");

    //build header
    let header = $("<header></header>").appendTo(body);
    $("<h1>Virtual Cocktail Cart</h1>").appendTo(header);

    //build each card
    let cards = $("<div id = 'cards' ></div>").appendTo(body);
    let count = 1;

    cocktails.forEach(drink =>
    {
        //build each part of the card
        let newCard = $(`<div class = "card" num = ${count} alt = "${drink["name"]}"></div>`).appendTo(cards);
        $(`<img src = ${drink["imgSrc"]}/>`).appendTo(newCard);
        let contents = $(`<div class = "cardContents"></div>`).appendTo(newCard);
        $(`<h3>${drink["name"]}</h3>`).appendTo(contents);
        let ingredientsList = $(`<ul>Ingredients:</ul>`).appendTo(contents);
        $(`<li>${drink["ingredients"].join("</li><li>")}</li>`).appendTo(ingredientsList);


        //functions

        //revert to showing the ingredients list
        newCard.on("mouseout", function()
        {
            contents.empty();
            let cardHeader = $(`<h3>${drink["name"]}</h3>`).appendTo(contents);
            cardHeader.css("text-align", "center");
            let ingredientsList = $(`<ul>Ingredients:</ul>`).appendTo(contents);
            $(`<li>${drink["ingredients"].join("</li><li>")}</li>`).appendTo(ingredientsList);
        });

        //show the recipe on mouseover
        newCard.on("mouseover", function()
        {
            contents.empty();
            let cardHeader = $(`<h3>${drink["name"]}</h3>`).appendTo(contents);
            cardHeader.css("text-align", "center");
            let recipe = $("<ol>Recipe:</ol>").appendTo(contents);
            $(`<li>${drink["recipe"].join("</li><li>")}</li>`).appendTo(recipe);
        });

        //show calories when clicked
        newCard.on("click", function()
        {
            contents.empty();
            let cardContentsInner = $(`<h3>${drink["name"]}</h3><p>Calories: ${drink["Calories"]}</p>`).appendTo(contents);
            cardContentsInner.css("text-align", "center");
        });
    });
}

//instead of using inline styling, style tags, or a seperate style.css, I decided to use jQuery to entirely style the document.
const setStyle = function()
{
    //get tags
    let body = $("body");
    let header = $("h1");
    let cards = $("#cards");
    let card = $(".card");
    let cardImg = $(".card img");
    let cardContents = $(".card .cardContents");
    let header3 = $("h3");

    //set style
    body.css
    ({
        "font-family": "Verdana, Geneva, Tahoma, sans-serif",
        "margin": "0 auto"
    });

    header.css
    ({
        "box-sizing": "border-box",
        "background-color": "springgreen",
        "text-align": "center",
        "color": "white",
        "position": "fixed",
        "top": "0",
        "left": "0",
        "text-decoration": "underline",
        "width": "100%",
        "height": "50px",
        "margin": "0 auto",
        "border-bottom": "2px solid crimson"
    });

    cards.css
    ({
        "display": "flex",
        "flex-wrap": "wrap",
        "flex-direction": "row",
        "justify-content": "space-evenly",
        "margin-top": "80px",
        "width" : "100%",
    });

    card.css
    ({
        "width": "200px",
        "height": "400px",
        "background-color": "springgreen",
        "color": "white",
        "margin": "10px"
    });

    cardImg.css
    ({
        "box-sizing": "border-box",
        "width": "180px",
        "height": "180px",
        "margin": "10px",  
        "border": "2px solid crimson"  
    });

    cardContents.css
    ({
        "width": "180px",
        "height": "180px",
        "margin": "10px",
        "margin-top": "0px",
        "overflow-y": "scroll"
    }),

    header3.css("text-align", "center");
};

$(document).ready
(
    (function()
    {
        console.log("INIT DOCUMENT");

        initDoc();

        setStyle();
    })
);