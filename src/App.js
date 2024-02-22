import './App.css';
import Header from './components/Header.js'
import Form from './components/Form.js'
import Footer from './components/Footer.js'

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
      <Header />
      <main>
        <Form />
      </main>
      <Footer />
    </div>
  );
}

export default App;


// Define Global Variables:
// app.apiKey = 'c8f1c1da6fe84ef6b510afbd3ad28f27';
// // app.apiKey = "20a367ef2c2e4d4380d95b890faae49b";

// // recipe complex search endpoint
// app.apiUrl = "https://proxy.junocollege.com/https://api.spoonacular.com/recipes/complexSearch";
// // api endpoint to search if ingredient exists
// app.apiUrlIng = "https://api.spoonacular.com/food/ingredients/search";
