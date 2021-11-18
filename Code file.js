let celebration = ["Christmas", "your birthday", "your uncle's funeral", "your wedding", "back to school"];
let who = ["a stranger", "your grandma", "your ex", "job colleagues", "your dad"];
let what = ["a dildo", "a cat", "a flower pot", "CBD oil", "a cake"];

let randomNum1 = Math.floor(Math.random() * 5);
let randomNum2 = Math.floor(Math.random() * 5);
let randomNum3 = Math.floor(Math.random() * 5);

let yourMessage = () => {
    let fCelebration = celebration[randomNum1];
    let fWho = who[randomNum2];
    let fWhat = what[randomNum3];
    console.log(`For ${fCelebration} ${fWho} gave you ${fWhat} as a gift. Congratulations!`);
};

yourMessage();
    