/*- Знайти та вивести довижину настипних стрінгових значень
    'hello world', 'lorem ipsum', 'javascript is cool'*/
/*
    let str1 = 'hello world';
    let str2 = 'lorem ipsum';
    let str3 = 'java script is cool';

    console.log(str1.length)
    console.log(str2.length)
    console.log(str3.length)
*/

/*- Перевести до великого регістру наступні стрінгові значення
      'hello world', 'lorem ipsum', 'javascript is cool'*/
/*
    let str1 = 'hello world';
    let str2 = 'lorem ipsum';
    let str3 = 'javascript is cool';

    console.log(str1.toUpperCase())
    console.log(str2.toUpperCase())
    console.log(str3.toUpperCase())
*/

/*- Перевести до нижнього регістру настипні стрінгові значення
      'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'*/
/*
    let str1 = 'HELLO WORLD';
    let str2 = 'LOREM IPSUM';
    let str3 = 'JAVASCRIPT IS COOL';
  
    console.log(str1.toLowerCase())
    console.log(str2.toLowerCase())
    console.log(str3.toLowerCase())
*/

//- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
/*
    let str = ' dirty string  ';

    let str1 = str.substring(0,6);
    let str2 = str.substring(7,15);

    let str11 = str1.replace(' ','');
    let str22 = str2.replaceAll(' ','');

    let newStr = str11 + ' ' + str22;

    console.log(newStr)
*/

/*- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
    let str = 'Ревуть воли як ясла повні';
    let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']*/
/*
    let str = 'Ревуть воли як ясла повні';
    let stringToarray = (str) => str.split(' ');

    console.log(stringToarray(str))
*/

/*- є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . 
    за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.*/
/*
    let numbs = [10,8,-7,55,987,-1011,0,1050,0];

    let str = numbs.map (n => n.toString());

    console.log(str)
*/

/*- створити функцію sortNums(direction), яка прймає масив чисел, 
та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
let nums = [11,21,3];
sortNums(nums,'ascending') // [3,11,21]
sortNums(nums,'descending') // [21,11,3]*/
/*
    let nums = [11,21,3];

    let sortNums = (num,direction) => {
        if (direction === 'ascending') {
            num.sort((n1,n2) => n1 - n2)
        } else
        if (direction === 'descending') {
            num.sort((n1,n2) => n2 - n1)
        }
        return num;
    }

    console.log(sortNums(nums,'ascending'))
    console.log(sortNums(nums,'descending'))
*/

/*- є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
 -- відсортувати його за спаданням за monthDuration
 -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців*/
/*
     let coursesAndDurationArray = [
        {title: 'JavaScript Complex', monthDuration: 5},
        {title: 'Java Complex', monthDuration: 6},
        {title: 'Python Complex', monthDuration: 6},
        {title: 'QA Complex', monthDuration: 4},
        {title: 'FullStack', monthDuration: 7},
        {title: 'Frontend', monthDuration: 4}
    ];

    let sort = coursesAndDurationArray.sort((m1,m2) => m2.monthDuration - m1.monthDuration);
    let sort1 = coursesAndDurationArray.filter(function(courses){
        if (courses.monthDuration > 5) {
            return true
        }
        return false;
    })

    console.log(sort1)
*/

/* описати колоду карт
 - знайти піковий туз
 - всі шістки
 - всі червоні карти
 - всі буби
 - всі трефи від 9 та більше
{
    cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
    value: '', // '6'-'10', 'ace','jack','queen','king','joker'
    color:'', // 'red','black'
}*/
/*
let cards = [
    {cardSuit: null,
        value:'joker',
        color:'red'
    },
    {cardSuit: null,
        value:'joker',
        color:'black'
        },
    {cardSuit: 'spade',
        value:6,
        color:'black'
    },
    {cardSuit: 'spade',
        value:7,
        color:'black'
    },
    {cardSuit: 'spade',
        value:8,
        color:'black'
    },
    {cardSuit: 'spade',
        value:9,
        color:'black'
    },
    {cardSuit: 'spade',
        value:10,
        color:'black'
    },
    {cardSuit: 'spade',
        value:'ace',
        color:'black'
    },
    {cardSuit: 'spade',
        value:'jack',
        color:'black'
    },
    {cardSuit: 'spade',
        value:'queen',
        color:'black'
    },
    {cardSuit: 'spade',
        value:'king',
        color:'black'
    },

    {cardSuit: 'clubs',
        value:6,
        color:'black'
    },
    {cardSuit: 'clubs',
        value:7,
        color:'black'
    },
    {cardSuit: 'clubs',
        value:8,
        color:'black'
    },
    {cardSuit: 'clubs',
        value:9,
        color:'black'
    },
    {cardSuit: 'clubs',
        value:10,
        color:'black'
    },
    {cardSuit: 'clubs',
        value:'ace',
        color:'black'
    },
    {cardSuit: 'clubs',
        value:'jack',
        color:'black'
    },
    {cardSuit: 'clubs',
        value:'queen',
        color:'black'
    },
    {cardSuit: 'clubs',
        value:'king',
        color:'black'
    },

    {cardSuit: 'diamond',
        value:6,
        color:'red'
    },
    {cardSuit: 'diamond',
        value:7,
        color:'red'
    },
    {cardSuit: 'diamond',
        value:8,
        color:'red'
    },
    {cardSuit: 'diamond',
        value:9,
        color:'red'
    },
    {cardSuit: 'diamond',
        value:10,
        color:'red'
    },
    {cardSuit: 'diamond',
        value:'ace',
        color:'red'
    },
    {cardSuit: 'diamond',
        value:'jack',
        color:'red'
    },
    {cardSuit: 'diamond',
        value:'queen',
        color:'red'
    },
    {cardSuit: 'diamond',
        value:'king',
        color:'red'
    },

    {cardSuit: 'heart',
        value:6,
        color:'red'
    },
    {cardSuit: 'heart',
        value:7,
        color:'red'
    },
    {cardSuit: 'heart',
        value:8,
        color:'red'
    },
    {cardSuit: 'heart',
        value:9,
        color:'red'
    },
    {cardSuit: 'heart',
        value:10,
        color:'red'
    },
    {cardSuit: 'heart',
        value:'ace',
        color:'red'
    },
    {cardSuit: 'heart',
        value:'jack',
        color:'red'
    },
    {cardSuit: 'heart',
        value:'queen',
        color:'red'
    },
    {cardSuit: 'heart',
        value:'king',
        color:'red'
    }
];

console.log(cards.find(card => card.cardSuit === 'clubs' && card.value === 'ace'))
console.log(cards.filter(card => card.value === 6))
console.log(cards.filter(card => card.color === 'red'))
console.log(cards.filter(card => card.cardSuit === 'diamond'))
console.log(cards.filter(card => card.cardSuit === 'clubs' && card.value>'8' || card.value === '10' && card.cardSuit === 'clubs'))
*/