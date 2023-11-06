const keyboardButtons = document.querySelector('.letters');
const reset = document.getElementById('play-again-btn');
const answer = document.getElementById('answer');
const hangmanImg = document.querySelector('.hangman-box img');
const wordList = [
    {
        word: "bread",
        hint: "Món ăn ngon của Việt Nam"
    },
    {
        word: "school",
        hint: "Nơi học tập và giảng dạy"
    },
    {
        word: "sea",
        hint: "Mặt nước lớn"
    },
    {
        word: "table",
        hint: "Để đặt đồ lên làm việc"
    },
    {
        word: "rose",
        hint: "Loài hoa nở đẹp"
    },
    {
        word: "cafe",
        hint: "Một loại đồ uống"
    },
    {
        word: "computer",
        hint: "Thiết bị để làm việc và giải trí"
    },
    {
        word: "book",
        hint: "Vật thường được đọc để giải trí hoặc học tập"
    },
    {
        word: "pen",
        hint: "Vật dùng để viết"
    },
    {
        word: "music",
        hint: "Âm nhạc làm cho cuộc sống thú vị hơn"
    },
    {
        word: "city",
        hint: "Khu đô thị lớn với nhiều dân cư và công trình"
    },
    {
        word: "dog",
        hint: "Loài động vật cưng phổ biến"
    },
    {
        word: "cat",
        hint: "Loài mèo làm thú cưng"
    },
    {
        word: "flower",
        hint: "Loài cây thường có hoa đẹp"
    },
    {
        word: "car",
        hint: "Phương tiện di chuyển cá nhân phổ biến"
    },
    {
        word: "phone",
        hint: "Thiết bị di động để gọi điện thoại"
    },
    {
        word: "restaurant",
        hint: "Nơi để thưởng thức đồ ăn và đồ uống"
    },
    {
        word: "family",
        hint: "Nhóm người thân gồm bố mẹ và con cái"
    },
    {
        word: "friend",
        hint: "Người bạn thân"
    },
    {
        word: "water",
        hint: "Chất lỏng quý báu cho cuộc sống"
    },
    {
        word: "sun",
        hint: "Ngôi sao nhiệt đới của hệ Mặt Trời"
    },
    {
        word: "moon",
        hint: "Vệ tinh tự nhiên của Trái Đất"
    },
    {
        word: "tree",
        hint: "Cây làm cho môi trường xanh và tươi mát"
    },
    {
        word: "house",
        hint: "Nơi ở của con người"
    },
    {
        word: "shoes",
        hint: "Giày đôi làm cho bàn chân thoải mái"
    },
    {
        word: "hat",
        hint: "Mũ đội lên đầu để bảo vệ khỏi nắng mưa"
    },
    {
        word: "beach",
        hint: "Bãi biển là nơi thư giãn và tắm biển"
    },
    {
        word: "money",
        hint: "Đồng tiền làm thế giới xoay chuyển"
    },
    {
        word: "watch",
        hint: "Đồng hồ để xem giờ"
    },
    {
        word: "bicycle",
        hint: "Xe đạp là phương tiện vận chuyển bằng sức người"
    },
    {
        word: "television",
        hint: "Thiết bị để xem chương trình truyền hình"
    },
    {
        word: "guitar",
        hint: "Cây đàn guitar tạo âm nhạc đẹp"
    },
    {
        word: "garden",
        hint: "Khu vườn với cây cỏ và hoa lá"
    },
    {
        word: "chocolate",
        hint: "Kẹo sô cô la ngon và ngọt ngào"
    },
    {
        word: "computer",
        hint: "Máy tính làm công việc kỹ thuật số"
    },
    {
        word: "keyboard",
        hint: "Bàn phím để nhập dữ liệu vào máy tính"
    },
    {
        word: "language",
        hint: "Ngôn ngữ làm cho con người giao tiếp"
    },
    {
        word: "pencil",
        hint: "Bút chì để viết và vẽ"
    },
    {
        word: "school",
        hint: "Trường học là nơi học tập và giao lưu"
    },
    {
        word: "ocean",
        hint: "Đại dương rộng lớn của hành tinh"
    },
    {
        word: "river",
        hint: "Con sông chảy qua cảnh quan đẹp"
    },
    {
        word: "mountain",
        hint: "Núi cao và hùng vĩ"
    },
    {
        word: "rain",
        hint: "Mưa làm mát và tạo sự tươi mới"
    },
    {
        word: "fire",
        hint: "Lửa sưởi ấm và đốt cháy"
    },
    {
        word: "bookstore",
        hint: "Cửa hàng sách để mua sách mới"
    },
    {
        word: "game",
        hint: "Trò chơi giải trí và giáo dục"
    },
    {
        word: "swimming",
        hint: "Bơi lội là môn thể thao thú vị"
    },
    {
        word: "sunset",
        hint: "Hoàng hôn là thời điểm mặt trời lặn"
    },
    {
        word: "moonlight",
        hint: "Ánh trăng sáng trong đêm"
    },
    {
        word: "cloud",
        hint: "Mây trắng bồng bềnh trên bầu trời"
    },
];

let currentWord;
let wrongGuessesCount = 0;
const maxGuesses = 6;
const gamemodel = document.querySelector('.game-model');
const wrongGuesses = document.getElementById("guesses");
const getRandomword = () => {
    const { word, hint } = wordList[ Math.floor(Math.random() * wordList.length) ];
    currentWord = word;
    console.log(word);
    const hintString = document.querySelector('.hint-text b');
    hintString.innerText = hint;
    const wordString = document.querySelector('.listLetter');
    wordString.innerHTML = '';
    for (const letter of word) {
        const li = document.createElement('li');
        // li.innerText = letter;
        li.classList.add('wordLetter');
        wordString.appendChild(li);
    }
}
let correctLetter = [];
const listLetter = document.querySelector('.listLetter');
const initGame = (button, clickedLetter) => {
    if (currentWord.includes(clickedLetter)) {
        [ ...currentWord ].forEach((letter, index) => {
            if (letter === clickedLetter) {
                correctLetter.push(letter);
                listLetter.querySelectorAll('li')[ index ].innerText = letter;
                listLetter.querySelectorAll('li')[ index ].classList.add('guessed');
            }
        })
    }
    else {
        wrongGuessesCount++;
        hangmanImg.src = `images/hangman-${wrongGuessesCount}.svg`;
    }
    button.disabled = true;
    if (correctLetter.length === currentWord.length) {
        gamemodel.querySelector("img").src = `images/victory.gif`;
        document.getElementById("model-text").innerText = "Congrats !";
        console.log("currentWord", currentWord);
        gamemodel.querySelector("p").innerText = `You found the word : ${currentWord.toUpperCase()}`;
        gamemodel.classList.add("show");
        answer.innerText = currentWord.toUpperCase();
        wrongGuessesCount = 0;
        hangmanImg.src = `images/hangman-0.svg`;
        keyboardButtons.querySelectorAll('button').forEach(button => button.disabled = false);
        correctLetter = [];
    }
    wrongGuesses.innerText = wrongGuessesCount;
    if (wrongGuessesCount === maxGuesses) {
        gamemodel.querySelector("img").src = `images/lost.gif`;
        document.getElementById("model-text").innerText = "Game over";
        gamemodel.classList.add("show");
        gamemodel.querySelector("p").innerText = `The correct word was: ${currentWord.toUpperCase()}`;
        wrongGuessesCount = 0;
        hangmanImg.src = `images/hangman-0.svg`;
        keyboardButtons.querySelectorAll('button').forEach(button => button.disabled = false);
        correctLetter = [];

    }

}

for (let i = 97; i <= 122; i++) {
    const button = document.createElement('button');
    button.innerText = String.fromCharCode(i);
    button.addEventListener('click', e => initGame(e.target, String.fromCharCode(i)));
    keyboardButtons.appendChild(button);
}
reset.addEventListener('click', () => {
    wrongGuessesCount = 0;
    wrongGuesses.innerText = wrongGuessesCount;
    gamemodel.classList.remove("show");
    getRandomword();
})

getRandomword();