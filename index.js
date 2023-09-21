const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat (name) {
    cats.push(`${name}`);
    console.log(cats);
}    
destructivelyAppendCat(Mankulo);



function destructivelyPrependCat (name) {
    cats.unshift(`${name}`);
    console.log(cats);
}
destructivelyPrependCat(Khadar);

function destructivelyRemoveLastCat (name) {
    cats.pop(`${name}`);
    console.log(cats);
}
destructivelyRemoveLastCat(Mankulo);

function destructivelyRemoveFirstCat (name) {
    cats.shift(`${name}`);
    console.log(cats);
}
destructivelyRemoveFirstCat(Khadar);

function appendCat (name) {
   const copyCats = [...cats, `${name}`];
   return copyCats;
   }
const newCats = appendCat("Broom");

function prependCat (name) {
    const copyCats = [`${name}`, ...cats];
    return copyCats;
}
prependCat("Arnold");

function removeLastCat () {
   const copyCats = cats.slice(0, -1);
    return copyCats;
}
removeLastCat();

function removeFirstCat () {
    const copyCats = cats.slice(1)
    return copyCats;
}
removeFirstCat();

