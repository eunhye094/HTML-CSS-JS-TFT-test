const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");
const qnaNum = 12;
const selectList = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function begin(){
    main.style.WebkitAnimation = "fadeOut 1s";
    main.style.animation = "fadeOut 1s";
    setTimeout(()=>{
        qna.style.WebkitAnimation = "fadeIn 1s";
        qna.style.animation = "fadeIn 1s";
        setTimeout(()=>{
            main.style.display="none";
            qna.style.display="block";
        }, 450)
        goNext(0);
    }, 450)
}

function goNext(qIdx){
    if (qIdx===qnaNum){
        goResult();
    }
    else{
        const qBox = document.querySelector('.qBox');
        qBox.innerHTML = qnaList[qIdx].q;
        for(let aIdx in qnaList[qIdx].a){
            addAnswer(qnaList[qIdx].a[aIdx].answer, qIdx, aIdx);
        }
        const statusBar = document.querySelector('.statusBar');
        statusBar.style.width = (100/qnaNum)*(qIdx+1)+'%';
    }
}

function addAnswer(answerText, qIdx, aIdx){
    const answer = document.createElement('button');
    answer.innerHTML = answerText;
    answer.classList.add('answerList');
    answer.classList.add('mx-auto');
    answer.classList.add('my-5');
    answer.classList.add('py-3');
    answer.classList.add('fadeIn');
    answer.addEventListener("click", function(){
        const answerList = document.querySelectorAll('.answerList');
        for(let i=0; i<answerList.length; i++){
            answerList[i].disabled = true;
            answerList[i].style.WebkitAnimation = "fadeOut 0.5s";
            answerList[i].style.animation = "fadeOut 0.5s";
        }
        setTimeout(()=>{
            const select = qnaList[qIdx].a[aIdx].type;
            for(let i=0; i<select.length; i++){
                selectList[select[i]]+=1;
            }
            for(let i=0; i<answerList.length; i++){
                answerList[i].style.display = 'none';
            }
            goNext(++qIdx);
        }, 450)
    }, false);

    const aBox = document.querySelector('.aBox');
    aBox.appendChild(answer);
}

function goResult(){
    qna.style.WebkitAnimation = "fadeOut 1s";
    qna.style.animation = "fadeOut 1s";
    setTimeout(()=>{
        result.style.WebkitAnimation = "fadeIn 1s";
        result.style.animation = "fadeIn 1s";
        setTimeout(()=>{
            qna.style.display="none";
            result.style.display="block";
        }, 450)
    }, 450)
    setResult();
}

function calResult(){
    const resultIdx = selectList.indexOf(Math.max(...selectList));
    return resultIdx;
}

function setResult(){
    const resultIdx = calResult();

    const resultName = document.querySelector('#resultName');
    resultName.innerHTML = resultList[resultIdx].name;
    
    const resultImg = document.querySelector('#resultImg');
    const img = document.createElement('img');
    img.src = 'img/image-'+resultIdx+'.png';
    img.alt = resultIdx;
    img.classList.add('img-fluid');
    resultImg.appendChild(img);

    const resultDesc = document.querySelector('#resultDesc');
    resultDesc.innerHTML = resultList[resultIdx].desc;
}
