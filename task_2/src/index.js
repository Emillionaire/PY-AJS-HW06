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

function destructor(attackId) {
    let specialAttacks = character.special;

    result = {};

    let res = specialAttacks.some(attr => attr.id == attackId);

    return specialAttacks.find(element => {
        if (element.id == attackId) {
            let {id, name, icon, description} = element;

            if (description == undefined) {
                element.description = 'Описание недоступно!';
            }

            return element
        }
    })
    
}


// Calling function
console.log(destructor(8));
console.log(destructor(9));
