
function wakeDog(dogName, dogBreed) {

    console.log(`Wake ${dogName} the ${dogBreed}`)
    let message = `Wake ${dogName} the ${dogBreed}`
    return message;

}

function leashDog(dogName, dogBreed) {
  console.log(`Leash ${dogName} the ${dogBreed}`);
  let message = `Leash ${dogName} the ${dogBreed}`
  return message;
}
function walkToPark(dogName, dogBreed) {
  console.log(`Walk to the park with ${dogName} the ${dogBreed}`);
  let message = `Walk to the park with ${dogName} the ${dogBreed}`
  return message;
}
function throwFrisbee(dogName, dogBreed) {
  console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
  let message = `Throw the frisbee for ${dogName} the ${dogBreed}`
  return message;
}
function walkHome(dogName, dogBreed) {
  console.log(`Walk home with ${dogName} the ${dogBreed}`);
  let message = `Walk home with ${dogName} the ${dogBreed}`
  return message;
}
function unleashDog(dogName, dogBreed) {
  console.log(`Unleash ${dogName} the ${dogBreed}`);
  let message = `Unleash ${dogName} the ${dogBreed}`
  return message;
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]
console.log(routine.length);
let arry = []

function exerciseDog(dogName,dogBreed) {

  console.log(routine.length);
  for (let i = 0: i<routine.length; i++){
    arry += routine[i](dogName, dogBreed);
      }
      return arry
}
exerciseDog ("Bryon" , "poodle")
