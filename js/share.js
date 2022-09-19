const url = 'https://tft-test.netlify.app';

function kakaoShare(){
    var resultImage = document.querySelector('#resultImg')
    var resultAlt = resultImg.firstElementChild.alt;
    const shareTitle = '전략적 팀 전투 플레이 유형 테스트 결과';
    const shareDesc = infoList[resultAlt].name;
    const shareImg = url + '/img/image-' + resultAlt + '.png';
    const shareURL = url + '/page/result-'+resultAlt+'.html';
    
    Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
            title: shareTitle,
            description: shareDesc,
            imageUrl: shareImg,
            link: {
                mobileWebUrl: shareURL,
                webUrl: shareURL
            }
        },
        buttons: [
        {
            title: '결과 확인하기',
            link: {
            mobileWebUrl: shareURL,
            webUrl: shareURL
            },
        }
        ]
    });
}