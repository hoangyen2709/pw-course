const departurePlanet = "Trái Đất";
const mission = "Khám phá Vũ trụ K6";
let crew = ["Khang", "Yến", "Ánh"];
function launchShip(crew) {
    let crewList = crew.join(', ');
    let message = `Chuẩn bị khởi động! Phi hành đoàn gồm: ${crewList} sẽ đồng hành cùng bạn trong chuyến phiêu lưu ${mission}!`;
    return message;
}

const { log } = require("console");

console.log(launchShip(crew));

function calculateDistance(speed, time) {
    return speed * time;
}

let speed = 1000;
let time = 24;

let distance = calculateDistance(speed, time);

console.log(`Khoảng cách là: ${distance}`)


function convertTimeToHex(time) {
    let hexTime = time.toString(16);
    return hexTime;
}
let timeInSeconds = 120;
let hexTime = convertTimeToHex(timeInSeconds);

console.log(`Thời gian ${timeInSeconds} giây trong hệ thập lục phân là: ${hexTime}`);

function decryptCode(code) {
    let decrypted = '';
    for (let char of code) {
        if (char >= 'a' && char <= 'z') {
            decrypted += char.toUpperCase();
        } else if (char >= 'A' && char <= 'Z') {
            decrypted += char.toLowerCase();
        } else {
            decrypted += char;
        }
    }
    return decrypted;
}

let code = "K6 Challenge";

let decryptedCode = decryptCode(code);

console.log(`Mật mã đã giải mã: ${decryptedCode}`);

function returnToEarth() {
    console.log("Chuẩn bị trở về Trái Đất!");
    return;
}
returnToEarth()