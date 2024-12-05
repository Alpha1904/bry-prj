let passwords, num, randomNum;
passwords = {
    0: "A1b2C3d4E5",
    1: "F6g7H8i9J0",
    2: "K1l2M3n4O5",
    3: "P6q7R8s9T0",
    4: "U1v2W3x4Y5",
    5: "Z6a7B8c9D0",
    6: "E1f2G3h4I5",
    7: "J6k7L8m9N0",
    8: "O1p2Q3r4S5",
    9: "T6u7V8w9X0",
    10: "Y1z2A3b4C5",
    11: "D6e7F8g9H0",
    12: "I1j2K3l4M5",
    13: "N6o7P8q9R0",
    14: "S1t2U3v4W5",
    15: "X6y7Z8a9B0",
    16: "C1d2E3f4G5",
    17: "H6i7J8k9L0",
    18: "M1n2O3p4Q5",
    19: "R6s7T8u9V0",
    20: "W1x2Y3z4A5",
    21: "B6c7D8e9F0",
    22: "G1h2I3j4K5",
    23: "L6m7N8o9P0",
    24: "Q1r2S3t4U5",
    25: "V6w7X8y9Z0",
    26: "A1b2C3d4E5",
    27: "F6g7H8i9J0",
    28: "K1l2M3n4O5",
    29: "P6q7R8s9T0"
};
num = [];
  for (let i = 0; i < 30; i++) {
      num.push(i);
}
randomNum = Math.floor(Math.random() * num.length);

const code = document.querySelector('.code');
const input = document.querySelector('#pass');
const text = document.querySelector('.wrg');
const popop = document.querySelector('.popop');

code.textContent = randomNum;

function verify() {
    if(input.value === passwords[randomNum]){
        text.textContent = '✅✅✅';
        setInterval(()=>{
            popop.style.visibility = 'hidden';
        }, 1000)
    }else if(input.value === ''){
        text.textContent = '';
    }else{
        text.textContent = '❌❌❌';
    }
};