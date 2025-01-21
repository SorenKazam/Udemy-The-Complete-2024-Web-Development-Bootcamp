import generateName from "sillyname";
import { randomSuperhero } from "superheroes";

var sillyName = generateName();
var superHeroeName = randomSuperhero();

console.log(`I am ${sillyName} and my superhero name is ${superHeroeName}.`);
