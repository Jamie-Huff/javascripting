

let roomList = ['dining room', 'gallery', 'ballroom', 'billiards room'];
let suspectList = ['Mr. Parkes', 'Ms. Van Cleve', 'Mrs. Sparr', 'Mr. Kalehoff'];
let weaponList = ['knife', 'pool stick', 'trophy', 'poison'];

let room = roomList[4];
let weapon;
let suspect = suspectList[0];
let solved = false;

let rLSplit = roomList.join(', ');



if (room === roomList[1]) {
    weapon = weaponList[1]
    if (suspect === suspectList[1]) {
        solved = true;
    } else {
        solved = false;
    }
} else if (room === roomList[0]) {
    weapon = weaponList[0]
    if (suspect === suspectList[0]) {
        solved = true;
    } else {
        solved = false;
    }
} else if (room === roomList[2]) {
    weapon = weaponList[2]
    if (suspect === suspectList[2]) {
        solved = true;
    } else {
        solved = false;
    }
} else if (room === roomList[3]) {
    weapon = weaponList[3]
    if (suspect === suspectList[3]) {
        solved = true;
    } else {
        solved = false;
    }
} else {
    console.log(`Please identify if the murder room was one of the following options: ${rLSplit} \n`);
}


if (solved === true) {
    console.log(`${suspect} did it in the ${room} with the ${weapon}!`);
} else {
    console.log(`You know that the murder happened in the ${room} but you can't figure out who did it!`);
}





