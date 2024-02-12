import './App.css';
import Header from './Header.js'

function App() {

  // function to make api calls
  const getApiData = async () => {
    // stored url endpoint for recipes API
    const urlRecipes = new URL('https://proxy.junocollege.com/https://api.spoonacular.com/recipes/complexSearch');

    // parameters for recipes API
    urlRecipes.search = new URLSearchParams({
      apiKey: 'c8f1c1da6fe84ef6b510afbd3ad28f27',
      // excludeCuisine: query1,
      // excludeIngredients: query2,
      type: [
          'lunch',
          'main course',
          'main dish',
          'dinner'
      ],
      addRecipeInformation: true,
      sort: 'random',
      number: 3
    })

    const recipes = await fetch(urlRecipes);

    const data = await recipes.json();
    console.log(data);
  }

  getApiData();

  return (
    <div className="App">
      <header>
        <Header />
      </header>
    </div>
  );
}

export default App;

// Components:

  // 1. Header
  // 2. Form - interactive form with questions for user to answer
  // 3. Recipe Cards
  // 4. Button??
  // 5. optionsArray
  // 6. DisplayResults - api call separate component from App.js??
  // 7. Error Message
  // 8. Footer

//   app.getRecipes = (query1, query2) => {
//     const url = new URL(app.apiUrl);
//     // add search parameters to url
//     url.search = new URLSearchParams({
//         apiKey: app.apiKey,
//         excludeCuisine: query1,
//         excludeIngredients: query2,
//         type: [
//             'lunch',
//             'main course',
//             'main dish',
//             'dinner'
//         ],
//         addRecipeInformation: true,
//         sort: 'random',
//         number: 3
//     })
//     fetch(url)
//         .then(response => {
//             return response.json();
//         })
//         .then(jsonResult => {
//             app.displayRecipe(jsonResult);
//         });
// }

// Define Global Variables:
// app.apiKey = 'c8f1c1da6fe84ef6b510afbd3ad28f27';
// // app.apiKey = "20a367ef2c2e4d4380d95b890faae49b";

// // recipe complex search endpoint
// app.apiUrl = "https://proxy.junocollege.com/https://api.spoonacular.com/recipes/complexSearch";
// // api endpoint to search if ingredient exists
// app.apiUrlIng = "https://api.spoonacular.com/food/ingredients/search";

// // global array of cuisines already excluded from user choices
// app.excludedCuisines = [
//     'African',
//     'British',
//     'Cajun',
//     'Caribbean',
//     'Eastern European',
//     'European',
//     'German',
//     'Irish',
//     'Jewish',
//     'Latin American',
//     'Mediterranean',
//     'Nordic',
//     'Southern',
//     'Vietnamese'
// ];