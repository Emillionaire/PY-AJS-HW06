const objectOne = {name: "мечник", health: 10, level: 2, attack: 80, defence: 40};
const objectTwo = {name: "лучник", health: 5, level: 3, attack: 100, defence: 20};
const sortOne = ["name", "level"];
const sortTwo = ["level", "health", "defence"];

function sorter(object, sort) {
    let result = [];

    let otherSort = Object.keys(object).sort();

    let clearSort = [...new Set(sort.concat(otherSort))];

    clearSort.forEach(prop => {
        result.push({
            'key': prop,
            'value': object[prop],
        })
    })

    return result
}

// Calling function
console.log(sorter(objectOne, sortOne));
console.log(sorter(objectOne, sortTwo));
console.log(sorter(objectTwo, sortOne));
console.log(sorter(objectTwo, sortTwo));