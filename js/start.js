const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");
const endPoint = 12;
const select = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function calResult(){
    var resultIdx = select.indexOf(Math.max(...select));
    return resultIdx;
}

function addAnswer(answerText, qIdx, idx){
    var a = document.querySelector('.aBox');
    var answer = document.createElement('button');
    answer.classList.add('answerList');
    answer.classList.add('mx-auto');
    answer.classList.add('my-5');
    answer.classList.add('py-3');
    answer.classList.add('fadeIn');

    answer.innerHTML = answerText;
    a.appendChild(answer);
    
    answer.addEventListener("click", function(){
        var children = document.querySelectorAll('.answerList');
        for(let i=0; i<children.length; i++){
            children[i].disabled = true;
            children[i].style.WebkitAnimation = "fadeOut 0.5s";
            children[i].style.animation = "fadeOut 0.5s";
        }
        setTimeout(()=>{
            var target = qnaList[qIdx].a[idx].type;
            for(let i=0; i<target.length; i++){
                select[target[i]]+=1;
            }

            for(let i=0; i<children.length; i++){
                children[i].style.display = 'none';
            }
            goNext(++qIdx);
        }, 450)
    }, false);
}

function setResult(){
    let point = calResult();

    const resultName = document.querySelector('#resultName');
    resultName.innerHTML = infoList[point].name;
    const resultImg = document.querySelector('#resultImg');
    var img = document.createElement('img');
    var imgURL = 'img/image-'+point+'.png';
    img.src = imgURL;
    img.alt = point;
    img.classList.add('img-fluid');
    resultImg.appendChild(img);
    
    const resultDesc = document.querySelector('#resultDesc');
    resultDesc.innerHTML = infoList[point].desc;
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

function goNext(qIdx){
    if (qIdx===endPoint){
        goResult();
        return;
    }
    var q = document.querySelector('.qBox');
    q.innerHTML = qnaList[qIdx].q;
    for(let i in qnaList[qIdx].a){
        addAnswer(qnaList[qIdx].a[i].answer, qIdx, i);
    }
    var statusBar = document.querySelector('.statusBar');
    statusBar.style.width = (100/endPoint) * (qIdx+1) + '%';
}

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
        let qIdx = 0;
        goNext(qIdx);
    }, 450)
}