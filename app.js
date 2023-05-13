/**
 * @description Constructor represents a Dinosaur
 * @constructor
 * @param {string} species - Species of the Dinosaur
 * @param {number} weight - Dinosaur weight
 * @param {number} height - Dinosaur height
 * @param {string} diet - Dinosaur diet
 * @param {string} where - The place where Dinosaurs appeared
 * @param {string} when - Dinosaur time period
 * @param {string} fact - Fact about Dinosaur
 * @param {string} image - Dinosaur image
 */
function Dino(species, weight, height, diet, where, when, fact, image) {
  this.species = species;
  this.weight = weight;
  this.height = height;
  this.diet = diet;
  this.where = where;
  this.when = when;
  this.fact = fact;
  this.image = image;
}

/**
 * @description Create dino objects
 * @returns Dino data object list
 */
function getDinoDataList() {
  const triceratops = new Dino(
    "Triceratops",
    13000,
    114,
    "herbavor",
    "North America",
    "Late Cretaceous",
    "First discovered in 1889 by Othniel Charles Marsh",
    "./images/triceratops.png"
  );
  const tyrannosaurusRex = new Dino(
    "Tyrannosaurus Rex",
    11905,
    144,
    "carnivor",
    "North America",
    "Late Cretaceous",
    "The largest known skull measures in at 5 feet long.",
    "./images/tyrannosaurus rex.png"
  );
  const anklyosaurus = new Dino(
    "Anklyosaurus",
    10500,
    55,
    "herbavor",
    "North America",
    "Late Cretaceous",
    "The largest known skull measures in at 5 feet long.",
    "./images/anklyosaurus.png"
  );
  const brachiosaurus = new Dino(
    "Brachiosaurus",
    70000,
    372,
    "herbavor",
    "North America",
    "Late Jurasic",
    "An asteroid was named 9954 Brachiosaurus in 1991.",
    "./images/brachiosaurus.png"
  );
  const stegosaurus = new Dino(
    "Stegosaurus",
    11600,
    79,
    "herbavor",
    "North America, Europe, Asia",
    "Late Jurasic to Early Cretaceous",
    "The Stegosaurus had between 17 and 22 seperate places and flat spines.",
    "./images/stegosaurus.png"
  );
  const elasmosaurus = new Dino(
    "Elasmosaurus",
    16000,
    59,
    "carnivor",
    "North America",
    "Late Cretaceous",
    "Elasmosaurus was a marine reptile first discovered in Kansas.",
    "./images/elasmosaurus.png"
  );
  const pteranodon = new Dino(
    "Pteranodon",
    44,
    20,
    "carnivor",
    "North America",
    "Late Cretaceous",
    "Actually a flying reptile, the Pteranodon is not a dinosaur.",
    "./images/pteranodon.png"
  );
  const pigeon = new Dino(
    "Pigeon",
    0.5,
    9,
    "carnivor",
    "World Wide",
    "Holocene",
    "All birds are living dinosaurs.",
    "./images/pigeon.png"
  );

  const dinoList = [
    triceratops,
    tyrannosaurusRex,
    anklyosaurus,
    brachiosaurus,
    stegosaurus,
    elasmosaurus,
    pteranodon,
    pigeon,
  ];
  return dinoList;
}

/**
 * @description Constructor represents a human
 * @constructor
 * @param {string} name - The name of a human
 * @param {number} height - The height of a human
 * @param {number} weight - The weight of a human
 * @param {string} diet - The diet of a human
 * @param {string} image - Human image
 * @param {string} unit
 */
function Human(name, height, weight, diet, image, unit) {
  this.name = name;
  this.height = height;
  this.weight = weight;
  this.diet = diet;
  this.image = image;
  this.unit = unit;
}

/**
 * @description Create prototype with helpful functions
 */
const protoObject = {
  getMetricWeight: function () {
    return Math.round(this.weight / 2.21);
  },
  getMetricHeight: function () {
    return Math.round(this.height * 2.54);
  },
  getImperialWeight: function () {
    return this.weight;
  },
  getImperialHeight: function () {
    return this.height;
  },
};
Dino.prototype = protoObject;

/**
 * @description Get human weight and height from form
 * @returns Size data
 */
function getHumanSizeValue() {
  const bigHeight = Number(document.getElementById("big-height").value);
  const smallHeight = Number(document.getElementById("small-height").value);
  const weight = Number(document.getElementById("weight").value);
  return { bigHeight, smallHeight, weight };
}

/**
 * @description Get human data from form
 * @returns Human object
 */
function getHumanData() {
  const name = document.getElementById("name").value;
  let { bigHeight, smallHeight, weight } = getHumanSizeValue();
  const unit = document.getElementById("unit").value;
  let height;
  if (unit === "Metric") {
    height = bigHeight * 100 + smallHeight;
  } else {
    height = bigHeight * 12 + smallHeight;
  }
  const diet = document.getElementById("diet").value;
  return new Human(name, height, weight, diet, "./images/human.png", unit);
}

/**
 * @description Create human tile HTML element
 * @param {Object} human
 * @returns HTML element
 */
function createHumanTile(human) {
  return `<div class="grid-item"><h3>${human.name}</h3><img src="${human.image}" alt="${human.name}"></div>`;
}

// Create Dino Compare Method 1
/**
 * @description Compare weight
 * @param {Object} dino
 * @param {Object} human
 * @returns Compare message
 */
function compareWeight(dino, human) {
  const dinoWeight =
    human.unit === "Metric" ? dino.getMetricWeight() : dino.getImperialWeight();
  if (dinoWeight > human.weight) {
    const times = Math.round(dinoWeight / human.weight);
    if (times === 1) {
      return `${dino.species} weighs almost as much as you`;
    }
    return `${dino.species} is ${times} times heavier than you.`;
  } else if (dinoWeight < human.weight) {
    const times = Math.round(human.weight / dinoWeight);
    if (times === 1) {
      return `${dino.species} weighs almost as much as you`;
    }
    return `${dino.species} is ${times} times lighter than you.`;
  } else {
    return "Dino has the same weight as you";
  }
}

// Create Dino Compare Method 2
/**
 * @description Compare height
 * @param {dino} dino
 * @param {human} human
 * @returns Compare message
 */
function compareHeight(dino, human) {
  const dinoHeight =
    human.unit === "Metric" ? dino.getMetricHeight() : dino.getImperialHeight();
  if (dinoHeight > human.height) {
    const times = Math.round(dinoHeight / human.height);
    if (times === 1) {
      return `${dino.species} is about as tall as you`;
    }
    return `${dino.species} is ${times} times taller than you.`;
  } else if (dinoHeight < human.height) {
    const times = Math.round(human.height / dinoHeight);
    if (times === 1) {
      return `${dino.species} is about as tall as you`;
    }
    return `${dino.species} is ${times} times lower than you.`;
  } else {
    return "Dino has the same height as you";
  }
}

// Create Dino Compare Method 3
/**
 * @description Compare diet
 * @param {dino} dino
 * @param {human} human
 * @returns Compare message
 */
function compareDiet(dino, human) {
  const humanDiet = human.diet.toLowerCase();
  if (dino.diet === humanDiet) {
    return `${dino.species} has the same diet as you is ${humanDiet}`;
  } else {
    return `${dino.species} has a diet of ${dino.species}, but you have a diet of ${humanDiet}`;
  }
}

/**
 * @description Create random message
 * @param {Object} dino
 * @param {Object} human
 * @returns random message
 */
function createRandomFact(dino, human) {
  const randomNumber = Math.round(Math.random() * 5);
  if (dino.species === "Pigeon") {
    return dino.fact;
  } else {
    switch (randomNumber) {
      case 0:
        return dino.fact;
      case 1:
        return compareWeight(dino, human);
      case 2:
        return compareHeight(dino, human);
      case 3:
        return compareDiet(dino, human);
      case 4:
        return `${dino.species} used to live in ${dino.where}`;
      case 5:
        return `${dino.species} lived in the ${dino.where} period`;
      default:
        return dino.fact;
    }
  }
}

/**
 * @description Create dino tile HTML element
 * @param {Object} dino
 * @param {string} randomFact
 * @returns HTML element
 */
function createDinoTile(dino, randomFact) {
  return `<div class="grid-item"><h3>${dino.species}</h3><img src="${dino.image}" alt="${dino.species}"><p>${randomFact}</p></div>`;
}

/**
 * @description Add dino tiles and human tile to DOM
 */
function addTitles() {
  const human = getHumanData();
  const dinoList = getDinoDataList();
  const centerIndex = Math.floor(dinoList.length / 2);
  const stringTiles = dinoList
    .map((dino, index) => {
      const dinoTile = createDinoTile(dino, createRandomFact(dino, human));
      if (index === centerIndex) {
        // Add human in center
        const humanTile = createHumanTile(human);
        return `${humanTile}${dinoTile}`;
      }
      return dinoTile;
    })
    .join("");
  document.getElementById("grid").innerHTML = stringTiles;
}

/**
 * @description Remove form from the DOM
 */
function hideForm() {
  document.querySelector("form").style.display = "none";
}

/**
 * @description On button click, prepare and display infographic
 */
function clickEvent(e) {
  e.preventDefault();
  // Validate form
  let valid = true;

  const smallHeight = Number(document.getElementById("small-height").value);
  if (smallHeight <= 0) {
    document.getElementById("error-height").innerHTML =
      "Height must be greater than 0";
    valid = false;
  } else {
    document.getElementById("error-height").style.display = "none";
  }

  const weight = Number(document.getElementById("weight").value);
  if (weight <= 0) {
    document.getElementById("error-weight").innerHTML =
      "Weight must be greater than 0";
    valid = false;
  } else {
    document.getElementById("error-weight").style.display = "none";
  }

  if (valid) {
    hideForm();
    addTitles();
  }
}

function changeEvent() {
  const unit = document.getElementById("unit").value;
  if (unit === "Metric") {
    document.getElementById("label-big-height").innerHTML = "Meter: ";
    document.getElementById("label-small-height").innerHTML = "Centimeters: ";
    document.getElementById("label-weight").innerHTML = "Kilogram: ";
  } else {
    document.getElementById("label-big-height").innerHTML = "Feet: ";
    document.getElementById("label-small-height").innerHTML = "Inches: ";
    document.getElementById("label-weight").innerHTML = "Pound: ";
  }
}

/**
 * @description Use IIFE to add event listener to get human data from form
 */
(() => {
  document.getElementById("btn").addEventListener("click", clickEvent);
  document.getElementById("unit").addEventListener("change", changeEvent);
})();
