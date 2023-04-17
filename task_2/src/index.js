const character = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
        {
            id: 8,
            name: 'Двойной выстрел',
            icon: 'http://...',
            description: 'Двойной выстрел наносит двойной урон'
        }, 
        {
            id: 9,
            name: 'Нокаутирующий удар',
            icon: 'http://...'
            // <- обратите внимание, описание "засекречено"
        }
    ]	
};

const character2 = {
    name: 'Воин',
    type: 'Bowman',
    special: [
        {
            id: 1,
            name: 'Рубить',
            icon: 'http://...',
            // description: 'Разрубает пополам',
        },
        {
            id: 2,
            name: 'Крушить',
            icon: 'http://...',
            description: 'Крушит!',
        },
        {
            id: 3,
            name: 'Ломать',
            icon: 'http://...',
            // description: 'Ломает',
        },
    ]
}

function destructor(char) {
    let attacks = char.special;

    result = [];

    attacks.forEach(element => {

        if (element.description == undefined) {
            element.description = 'Описание недоступно!';
        }

        let {id, name, icon, description} = element;

        result.push({
            'id': id,
            'name': name,
            'icon': icon,
            'description': description,
        });
    })

    return result;
}


// Calling function
console.log(destructor(character));
console.log(destructor(character2));



// function destructor(attackId) {
//     let specialAttacks = character.special;

//     result = {};

//     let res = specialAttacks.some(attr => attr.id == attackId);

//     return specialAttacks.find(element => {
//         if (element.id == attackId) {
//             let {id, name, icon, description} = element;

//             if (description == undefined) {
//                 element.description = 'Описание недоступно!';
//             }

//             return element
//         }
//     })
    
// }


// // Calling function
// console.log(destructor(8));
// console.log(destructor(9));