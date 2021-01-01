import data from "./data.js";
import { createTableElements } from "./main.js";

const checkPopulation = document.querySelector("#populationBigger");
const checkLandArea = document.querySelector("#landAreaLess");
const populationQuestion = document.querySelector("#isPopulationLess");
const landAreaQuestion = document.querySelector("#isLandBigger");
const selectCity = document.querySelector("#inputGroupSelect01");
const resetButton = document.querySelector("#reset");


/* RESET ACTION */
resetButton.addEventListener("click", () => {
  createTableElements(data, "allcities");
  createTableElements([], "singlecity");
  selectCity.value = "Choose...";
});

/* CHECK POPULATION BIGGER THAN 500.000 */
checkPopulation.addEventListener("click", () => {
  const populationResult = data.filter((city) => city.population > 500000);
  createTableElements(populationResult, "allcities");
});

/* CHECK LAND AREA LESS THAN 1000 */
checkLandArea.addEventListener("click", () => {
  const landAreaResult = data.filter((city) => city.landArea < 1000);
  createTableElements(landAreaResult, "allcities");
});

/* CHECK ANY CITY HAS POPULATION LESS THAN 100.000 */
populationQuestion.addEventListener("click", () => {
  const isPopulationLess = data.some((city) => city.population < 100000);
  isPopulationLess ? alert("Yes") : alert("No");
});

/* CHECK EVERY CITY HAS LAND AREA BIGGER THAN 100 */
landAreaQuestion.addEventListener("click", () => {
  const isLandArea = data.every((city) => city.landArea > 100);
  isLandArea ? alert("Yes") : alert("No");
});

/* SELECT CITY */

const selectOptions = (data) => {
  const selectOptionElement = document.querySelector("#inputGroupSelect01");
  data.forEach((city) => {
    const cityOption = document.createElement("option");
    cityOption.text = city.name;
    cityOption.value = city.name;
    selectOptionElement.appendChild(cityOption);
  });
};

selectOptions(data);

/* FOUND ITEM */
selectCity.addEventListener("change", (event) => {
  let selectedCityName = event.target.value;
  const selectedCity = data.find((city) => selectedCityName === city.name);
  createTableElements([selectedCity], "singlecity");
});
