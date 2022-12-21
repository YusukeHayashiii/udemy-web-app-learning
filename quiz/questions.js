const answersList = document.querySelectorAll('ol.answers li');

answersList.forEach(li => li.addEventListener('click', checkClickedAnswer));

// 正しい答え
const correctAnswers = {
    question1: 'B',
    question2: 'A',
    question3: 'B',
    question4: 'C',
};

function checkClickedAnswer(event) {
    // クリックされた答えの要素
    const clickedAnswerElement = event.currentTarget
    // 選択した答え(A,B,C,D)
    const selectedAnswer = clickedAnswerElement.dataset.answer;
    // どのquestionかを指定
    const questionId = clickedAnswerElement.closest('ol.answers').dataset.id;
    // 正しい答え(A,B,C,D)
    const correctAnswer = correctAnswers[questionId];
    // メッセージを入れる変数を用意
    let message;
    // カラーコードを入れる変数を用意
    let answerColorCode;

    if (selectedAnswer === correctAnswer) {
        // 正解時
        message = '正解です';
        answerColorCode = '';
    } else {
        // 不正解時
        message = '不正解です';
        answerColorCode = 'rgb(124, 7, 7)';
    }
    
    alert(message);

    // 色を変更(不正解時のみ色が変わる)
    document.querySelector('span#correct-answer').style.color = answerColorCode;
    // 答え全体を表示
    document.querySelector('div#section-correct-answer').style.display = 'block';
}

