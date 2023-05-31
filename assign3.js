const data = [
    {
        image: "https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg",
        title: "Chicken Biryani",
        rating: 5,
        review: "The chicken biryani I recently had was a delightful culinary experience. The aromatic blend of fragrant rice and tender chicken infused with a medley of spices was truly exceptional. Each grain of rice was perfectly cooked and bursting with flavors, while the succulent chicken pieces added a savory touch. The biryani had just the right balance of heat and complexity, leaving a satisfying lingering taste. The dish was beautifully garnished with caramelized onions, fresh coriander, and fried cashews, adding an extra layer of texture and visual appeal. Overall, the chicken biryani was a scrumptious treat that left me craving for more."
    },
    {
        image: "https://thumbs.dreamstime.com/b/paneer-lababdar-famous-indian-dish-served-over-rustic-wooden-background-selective-focus-224090191.jpg",
        title: "Paneer Lababdar",
        rating: 4.5,
        review: "The paneer lababdar I recently indulged in was a true delight for my taste buds. The creamy tomato-based gravy was rich and velvety, complementing the succulent paneer cubes perfectly. The dish was infused with a medley of aromatic spices that added depth and complexity to each bite. The paneer was incredibly tender and soaked up the flavors of the gravy beautifully. The balance of tanginess and subtle sweetness in the dish was spot on, creating a harmonious symphony of flavors. Paired with naan or rice, this paneer lababdar was a comforting and indulgent treat that I can't wait to savor again."
    },
    {
        image: "https://i.ytimg.com/vi/H3tW-UFSojU/maxresdefault.jpg",
        title: "Butter Naan",
        rating: 5,
        review: "The butter naan I had was simply divine. The soft and fluffy bread was perfectly cooked, with a slight char on the outside giving it a delightful smoky flavor. The generous slathering of melted butter on top added a rich and indulgent touch. Each bite was a heavenly experience, with the buttery goodness melting in my mouth. The naan had a perfect balance of chewiness and tenderness, making it an ideal accompaniment to curries and gravies. It was the epitome of comfort food, leaving me craving for more. The butter naan definitely elevated my dining experience to a new level of satisfaction."
    },
    {
        image: "https://www.yummytummyaarthi.com/wp-content/uploads/2011/09/100_2281.jpg",
        title: "Chicken Tikka Masala",
        rating: 5,
        review: "The chicken tikka masala I recently savored was a culinary masterpiece. The succulent chicken pieces were perfectly marinated and grilled to perfection, immersed in a luscious tomato-based gravy. The rich and creamy texture of the sauce, infused with a harmonious blend of spices, created an explosion of flavors. The dish struck a perfect balance between tanginess and a hint of warmth. Each bite was a delightful journey of tender chicken soaked in the aromatic sauce. Paired with fluffy naan or fragrant rice, this chicken tikka masala was an absolute delight that left me wanting more."
    },
    {
        image: "https://rakskitchen.net/wp-content/uploads/2021/11/paneer-do-pyaza-feat.jpg",
        title: "Paneer Do Pyaza",
        rating: 5,
        review: "The paneer do pyaza I recently relished was a true delight. The dish showcased tender cubes of paneer cooked with an abundance of onions, creating a beautiful symphony of flavors. The onions were caramelized to perfection, adding a subtle sweetness and depth to the dish. The paneer remained soft and luscious, absorbing the rich and aromatic spices. Each bite was a burst of savory goodness with a hint of sweetness from the onions. The dish had a perfect balance of textures and flavors, making it an absolute treat for the palate. Paneer do pyaza is definitely a must-try for any paneer lover."
    },
    {
        image: "https://www.licious.in/blog/wp-content/uploads/2020/12/Tandoori-Chicken-750x750.jpg",
        title: "Tandoori Chicken",
        rating: 5,
        review: "The tandoori chicken I recently indulged in was an absolute delight. The chicken was marinated with a blend of aromatic spices and yogurt, resulting in tender and flavorful meat. The tandoori cooking method imparted a smoky char and a beautiful reddish hue to the chicken. Each bite was a burst of succulent and juicy goodness, with the spices perfectly complementing the natural flavors of the meat. Served with a side of mint chutney, the tandoori chicken was a culinary adventure that left me craving for more. It's a classic dish that never fails to impress with its bold and mouthwatering flavors."
    },
    {
        image: "https://www.kannammacooks.com/wp-content/uploads/mixed-fried-rice-recipe-1-4.jpg",
        title: "Mix Veg Fried Rice",
        rating: 4.8,
        review: "The mix veg fried rice I recently tasted was a delightful blend of flavors and textures. The rice was cooked to perfection, with each grain distinct and fluffy. The medley of vegetables added a vibrant and refreshing element to the dish, providing a satisfying crunch with every bite. The flavors were well-balanced, with a hint of soy sauce and subtle spices enhancing the overall taste. The fried rice was light and not greasy, making it a satisfying and wholesome meal. It was a delightful fusion of vegetables and rice that left me thoroughly satisfied and craving for more."
    },
    {
        image: "https://recipethis.com/wp-content/uploads/3-Ingredient-Oreo-Cookies-Cream-Milkshake.jpg",
        title: "Chocolate Oreo Shake",
        rating: 5,
        review: "The chocolate Oreo shake I recently indulged in was a heavenly treat for my taste buds. The rich and velvety chocolate base was perfectly blended with crushed Oreo cookies, creating a decadent and indulgent concoction. Each sip was a delightful combination of creamy chocolate and the delightful crunch of Oreo crumbs. The shake had just the right amount of sweetness, leaving a lingering chocolaty aftertaste. It was refreshing and satisfying, offering a delightful balance between smoothness and texture. Whether as a dessert or a refreshing drink, the chocolate Oreo shake is a sinful delight that I would highly recommend."
    },
    {
        image: "https://cocktailswithclass.com/wp-content/uploads/2021/06/blue-mojito-2-720x540.jpg",
        title: "Blue Mojito",
        rating: 5,
        review: "The blue mojito I recently enjoyed was a refreshing and visually stunning drink. The vibrant blue hue instantly caught my eye and made for an appealing presentation. The combination of muddled mint leaves, lime juice, and blue curacao created a delightful burst of fresh flavors. The mojito had just the right amount of sweetness, balanced by a hint of tanginess from the lime. The carbonation added a pleasant fizz, making it a perfect choice for a hot day. The blue mojito was a tropical and invigorating drink that left me feeling refreshed and ready to savor every sip."
    }
];

const foodMenu = document.getElementById("menu");

data.map((el)=>{
    const div = document.createElement("div");

    const foodImage = document.createElement("img");
    foodImage.src=el.image;

    const foodName = document.createElement("h3");
    foodName.innerText=el.title;

    const rating = document.createElement("p");
    rating.innerText="Rating: "+el.rating+"⭐";

    const text = document.createElement("p");
    text.innerText=el.review;
    text.style.display="none";

    const button1=document.createElement("button");
    button1.innerText="Click to show review";

    const button2= document.createElement("button");
    button2.innerText="Click to hide review";
    
    button1.addEventListener("click",()=>{
        text.style.display= "block";
    });
    button2.addEventListener("click",()=>{
        text.style.display="none";
    });
    div.append(foodImage,foodName,rating,button1,button2,text);
    foodMenu.append(div);
})