import cuisineOptionsArray from "./cuisineOptionsArray";
import excludeCuisinesArray from "./excludedCuisinesArray";
import { useState } from 'react';

// Function to display form
function Form({ submitForm }) {

    // store user's selections in state, which is added to an already existing array of excluded cuisines
    const [userSelection, setUserSelection] = useState(excludeCuisinesArray);

    // event listener for selected cuisines
    const handleChange = (event) => {
        // store target element (checkbox) into variable
        const addCuisine = event.target.value;
        // store checked value of target element
        const checked = event.target.checked;

        // if checked value is true, add cuisine type to userSelection array, if checked value is false remove cuisine type from userSelection array
        if(checked === true) {
            setUserSelection([
                ...userSelection,
                addCuisine
            ]);
        } else if(checked === false) {
            setUserSelection(
                userSelection.filter(c => 
                    c !== addCuisine
                )
            )
        };
    }

    // event handler for form submission
    const handleSubmit = (event) => {
        // prevent page reload on submit
        event.preventDefault();

        // if at least one selection is made, form can be submitted
        if(userSelection.length !== 14) {
            submitForm(userSelection);
        }
    }

    return (
        <form
            name="form"
            onSubmit={
                (event) => {
                    handleSubmit(event);
                }
            }
        >
            <fieldset>
                <legend>Pick the cuisines you'd like to EXCLUDE from your recipe search (minimum: 1):</legend>
                {
                    cuisineOptionsArray.map((option, index) => {
                        return (
                            <div key={index} onChange={handleChange}>
                                <input type="checkbox" name="cuisineOption" value={option.cuisineType}></input>
                                <label htmlFor="cuisineOption">{option.cuisineType}</label>
                            </div>
                        )
                    })
                }
            </fieldset>

            {/* <label htmlFor="inputText">Ingredients to exclude (Optional; Maximum: 5):</label>
            <input type="text" name="inputText" placeholder="ex. egg, beef, tofu"></input>

            <button className="add">Add to List</button>
            <button className="remove">Clear List</button> */}

            {/* <ul className="ingredientsList"></ul> */}

            <button type="submit" className="submitBtn">Submit</button>
        </form>
    )
}

export default Form;