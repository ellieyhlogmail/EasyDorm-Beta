
const params = new URLSearchParams(window.location.search);
const recipeId = params.get("id");

if (recipeId && recipes[recipeId]) {
    const recipe = recipes[recipeId];

    const recipeContainer = document.getElementById("recipe-container");
    if (recipeContainer && recipe.theme) {
        recipeContainer.setAttribute("data-theme", recipe.theme);
    }

    document.title = recipe.title;

    const recipeTitle = document.getElementById("recipe-title");
    const recipeTime = document.getElementById("recipe-time");
    const recipeTools = document.getElementById("recipe-tools");
    const recipeDifficulty = document.getElementById("recipe-difficulty");
    const recipeBudget = document.getElementById("recipe-budget");
    const mainImage = document.getElementById("main-image");
    const prepImage = document.getElementById("prep-image");
    const videoLink = document.getElementById("video-link");
    const ingredientsList = document.getElementById("ingredients");
    const recipeSteps = document.getElementById("recipe-steps");
    const categoryLink = document.getElementById("category-link");

    if (recipeTitle) recipeTitle.textContent = recipe.title;
    if (recipeTime) recipeTime.textContent = recipe.time;
    if (recipeTools) recipeTools.textContent = recipe.tools;
    if (recipeDifficulty) recipeDifficulty.textContent = recipe.difficultyLevel;
    if (recipeBudget) recipeBudget.textContent = recipe.budget;

    if (mainImage) {
        mainImage.src = recipe.mainImage;
        mainImage.alt = recipe.title;
    }

    if (prepImage) {
        if (recipe.prepImage) {
            prepImage.src = recipe.prepImage;
            prepImage.alt = recipe.title + " preparation";
        } else {
            prepImage.style.display = "none";
        }
    }

    if (videoLink) {
        if (recipe.video) {
            videoLink.href = recipe.video;
        } else {
            videoLink.style.display = "none";
        }
    }

    if (ingredientsList) {
        ingredientsList.innerHTML = "";
        recipe.ingredients.forEach(item => {
            const li = document.createElement("li");
            li.textContent = item;
            ingredientsList.appendChild(li);
        });
    }

    if (recipeSteps) {
        recipeSteps.innerHTML = "";
        recipe.steps.forEach(step => {
            const li = document.createElement("li");
            li.textContent = step;
            recipeSteps.appendChild(li);
        });
    }

    if (categoryLink) {
        categoryLink.href = recipe.categoryLink;
        categoryLink.textContent = recipe.categoryName;
    }


    //recipe steps gallery
    const stepImagesGallery = document.getElementById("step-images-gallery");
    if (recipe.stepImages && recipe.stepImages.length > 0) {
        recipe.stepImages.forEach((imgSrc, index) => {
            const img = document.createElement("img");
            img.src = imgSrc;
            img.alt = `${recipe.title} step ${index + 1}`;
            stepImagesGallery.appendChild(img);
        });
    } else{
        stepImagesGallery.innerHTML = "<p>No step images avaliable</p>"
    }

} 

else {
    const recipeTitle = document.getElementById("recipe-title");
    const ingredientsList = document.getElementById("ingredients");
    const recipeSteps = document.getElementById("recipe-steps");

    if (recipeTitle) recipeTitle.textContent = "Recipe Not Found";
    if (ingredientsList) ingredientsList.innerHTML = "<li>No recipe data available.</li>";
    if (recipeSteps) recipeSteps.innerHTML = "<li>Please return to the category page.</li>";
}
