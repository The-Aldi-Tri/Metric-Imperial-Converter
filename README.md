# Metric-Imperial Converter

[![Run on Repl.it](https://replit.com/badge/github/The-Aldi-Tri/Metric-Imperial-Converter)](https://replit.com/new/github/The-Aldi-Tri/Metric-Imperial-Converter)

*You need an account on Replit


## FreeCodeCamp - Quality Assurance Certification Projects

Instructions for building the project can be found at https://www.freecodecamp.org/learn/quality-assurance/quality-assurance-projects/metric-imperial-converter.


## Assignment

Build a full stack JavaScript app that is functionally similar to this: [https://metric-imperial-converter.freecodecamp.rocks/](https://metric-imperial-converter.freecodecamp.rocks/). Working on this project will involve you writing your code using one of the following methods:

*   Clone [this GitHub repo](https://github.com/freeCodeCamp/boilerplate-project-metricimpconverter/) and complete your project locally.
*   Use [our Replit starter project](https://replit.com/github/freeCodeCamp/boilerplate-project-metricimpconverter) to complete your project.
*   Use a site builder of your choice to complete the project. Be sure to incorporate all the files from our GitHub repo.

If you use Replit, follow these steps to set up the project:

*   Start by importing the project on Replit.
*   Next, you will see a `.replit` window.
*   Select `Use run command` and click the `Done` button.

When you are done, make sure a working demo of your project is hosted somewhere public. Then submit the URL to it in the Solution Link field. Optionally, also submit a link to your project's source code in the GitHub Link field.

**Note:** This project's tests do not work when using `glitch.com`.

---

*   Complete the necessary conversion logic in `/controllers/convertHandler.js`
*   Complete the necessary routes in `/routes/api.js`
*   Copy the `sample.env` file to `.env` and set the variables appropriately
*   To run the tests uncomment `NODE_ENV=test` in your `.env` file
*   To run the tests in the console, use the command `npm run test`. To open the Replit console, press Ctrl+Shift+P (Cmd if on a Mac) and type "open shell"

Write the following tests in `tests/1_unit-tests.js`:

*   `convertHandler` should correctly read a whole number input.
*   `convertHandler` should correctly read a decimal number input.
*   `convertHandler` should correctly read a fractional input.
*   `convertHandler` should correctly read a fractional input with a decimal.
*   `convertHandler` should correctly return an error on a double-fraction (i.e. `3/2/3`).
*   `convertHandler` should correctly default to a numerical input of `1` when no numerical input is provided.
*   `convertHandler` should correctly read each valid input unit.
*   `convertHandler` should correctly return an error for an invalid input unit.
*   `convertHandler` should return the correct return unit for each valid input unit.
*   `convertHandler` should correctly return the spelled-out string unit for each valid input unit.
*   `convertHandler` should correctly convert `gal` to `L`.
*   `convertHandler` should correctly convert `L` to `gal`.
*   `convertHandler` should correctly convert `mi` to `km`.
*   `convertHandler` should correctly convert `km` to `mi`.
*   `convertHandler` should correctly convert `lbs` to `kg`.
*   `convertHandler` should correctly convert `kg` to `lbs`.

Write the following tests in `tests/2_functional-tests.js`:

*   Convert a valid input such as `10L`: `GET` request to `/api/convert`.
*   Convert an invalid input such as `32g`: `GET` request to `/api/convert`.
*   Convert an invalid number such as `3/7.2/4kg`: `GET` request to `/api/convert`.
*   Convert an invalid number AND unit such as `3/7.2/4kilomegagram`: `GET` request to `/api/convert`.
*   Convert with no number such as `kg`: `GET` request to `/api/convert`.
