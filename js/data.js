const qnaList = [
  {
    q: '1. E/I',
    a: [
      { answer: 'a. E', type: ['ENTJ', 'ENFJ', 'ESTJ', 'ESTP', 'ENTP', 'ENFP', 'ESFJ', 'ESFP'] },
      { answer: 'b. I', type: ['INTJ', 'INFJ', 'ISTJ', 'ISTP', 'INTP', 'INFP', 'ISFJ', 'ISFP'] }
    ]
  },
  {
    q: '2. E/I',
    a: [
      { answer: 'a. E', type: ['ENTJ', 'ENFJ', 'ESTJ', 'ESTP', 'ENTP', 'ENFP', 'ESFJ', 'ESFP'] },
      { answer: 'b. I', type: ['INTJ', 'INFJ', 'ISTJ', 'ISTP', 'INTP', 'INFP', 'ISFJ', 'ISFP'] }
    ]
  },
  {
    q: '3. E/I',
    a: [
      { answer: 'a. E', type: ['ENTJ', 'ENFJ', 'ESTJ', 'ESTP', 'ENTP', 'ENFP', 'ESFJ', 'ESFP'] },
      { answer: 'b. I', type: ['INTJ', 'INFJ', 'ISTJ', 'ISTP', 'INTP', 'INFP', 'ISFJ', 'ISFP'] }
    ]
  },
  {
    q: '4. S/N',
    a: [
      { answer: 'a. S', type: ['ISTJ', 'ISTP', 'ISFJ', 'ISFP', 'ESTJ', 'ESTP', 'ESFJ', 'ESFP' ] },
      { answer: 'b. N', type: ['INTJ', 'INFJ', 'INTP', 'INFP', 'ENTJ', 'ENFJ', 'ENTP', 'ENFP' ] }
    ]
  },
  {
    q: '5. S/N',
    a: [
      { answer: 'a. S', type: ['ISTJ', 'ISTP', 'ISFJ', 'ISFP', 'ESTJ', 'ESTP', 'ESFJ', 'ESFP' ] },
      { answer: 'b. N', type: ['INTJ', 'INFJ', 'INTP', 'INFP', 'ENTJ', 'ENFJ', 'ENTP', 'ENFP' ] }
    ]
  },

  {
    q: '6. S/N',
    a: [
      { answer: 'a. S', type: ['ISTJ', 'ISTP', 'ISFJ', 'ISFP', 'ESTJ', 'ESTP', 'ESFJ', 'ESFP' ] },
      { answer: 'b. N', type: ['INTJ', 'INFJ', 'INTP', 'INFP', 'ENTJ', 'ENFJ', 'ENTP', 'ENFP' ] }
    ]
  },
  {
    q: '7. T/F',
    a: [
      { answer: 'a. T', type: ['INTJ', 'ISTJ', 'ISTP', 'INTP', 'ENTJ', 'ESTJ', 'ESTP', 'ENTP'] },
      { answer: 'b. F', type: ['INFJ', 'INFP', 'ISFJ', 'ISFP', 'ENFJ', 'ENFP', 'ESFJ', 'ESFP' ] }
    ]
  },
  {
    q: '8. T/F',
    a: [
      { answer: 'a. T', type: ['INTJ', 'ISTJ', 'ISTP', 'INTP', 'ENTJ', 'ESTJ', 'ESTP', 'ENTP'] },
      { answer: 'b. F', type: ['INFJ', 'INFP', 'ISFJ', 'ISFP', 'ENFJ', 'ENFP', 'ESFJ', 'ESFP' ] }
    ]
  },
  {
    q: '9. T/F',
    a: [
      { answer: 'a. T', type: ['INTJ', 'ISTJ', 'ISTP', 'INTP', 'ENTJ', 'ESTJ', 'ESTP', 'ENTP'] },
      { answer: 'b. F', type: ['INFJ', 'INFP', 'ISFJ', 'ISFP', 'ENFJ', 'ENFP', 'ESFJ', 'ESFP' ] }
    ]
  },
  {
    q: '10. J/P',
    a: [
      { answer: 'a. J', type: ['INTJ', 'INFJ', 'ISTJ', 'ISFJ', 'ENTJ', 'ENFJ', 'ESTJ', 'ESFJ'] },
      { answer: 'b. P', type: ['ISTP', 'INTP', 'INFP', 'ISFP', 'ESTP', 'ENTP', 'ENFP', 'ESFP' ] }
    ]
  },
  {
    q: '11. J/P',
    a: [
      { answer: 'a. J', type: ['INTJ', 'INFJ', 'ISTJ', 'ISFJ', 'ENTJ', 'ENFJ', 'ESTJ', 'ESFJ'] },
      { answer: 'b. P', type: ['ISTP', 'INTP', 'INFP', 'ISFP', 'ESTP', 'ENTP', 'ENFP', 'ESFP' ] }
    ]
  },
  {
    q: '12. J/P',
    a: [
      { answer: 'a. J', type: ['INTJ', 'INFJ', 'ISTJ', 'ISFJ', 'ENTJ', 'ENFJ', 'ESTJ', 'ESFJ'] },
      { answer: 'b. P', type: ['ISTP', 'INTP', 'INFP', 'ISFP', 'ESTP', 'ENTP', 'ENFP', 'ESFP' ] }
    ]
  }
]

const infoList = [
  {
    name: 'INTJ <짹짹이>',
    desc: '혼자있는거 좋아함, 사회활동 싫어함. 근데 단체활동할 때 주도적인 역할 자주 맡음. 사람많고 시끄러운 장소 싫어함. 굉장한 개인주의자, 이기적. 하루하루 세세하게 계획짜놓고 지내는 것 좋아함.'
  },
  {
    name: 'INFJ <징징이>',
    desc: '생각이 너무 많음. 새로운 일 시작하는거, 새로운 사람 만나는거 싫어함. 낯가림 심함, 눈치 빠름. 겉으로 웃는데 속으로 욕 많이 함. 집순인데 여행가는 건 좋음.'
  },
  {
    name: 'ISTJ <두더지 광부>',
    desc: '원리원칙적, 계획적. 여행가면 나서서 계획 세움. 즉흥적인거 싫어함 약속 어기는거 싫어함. 협동하고 이런거 싫어함. 그냥 나혼자 하는게 젤 편하고 젤 빠름.'
  },
  {
    name: 'ISTP <첨벙둥이>',
    desc: '만사가 귀찮음. 무미건조, 낯가림 근데 친해지면 말 많고 장난도 잘 침. 새로운 사람 만나는거 싫어함. 남한테 관심 없고 내 얘기도 잘 안함. 혼자만의 문화생활 즐김.'
  },
  {
    name: 'INTP <뿔보>',
    desc: '자발적 아웃사이더. 혼자 있는게 제일 편하고 행복. 나 존나 잘난줄 암. 공상 자주함. 분석, 추리 좋아함, 생각 많음.'
  },
  {
    name: 'INFP <꿀렁이>',
    desc: '성격이론에 관심 많고, 커뮤니티 많이 함. 이상주의적. 잡생각 많음 (망상 잦음). 관종인데 막상 관심받으면 어색하고 어쩔줄모름. 완벽하게 하지 못할거면 아예 시작을 안함.'
  },
  {
    name: 'ISFJ <퐁당이>',
    desc: '원칙주의자. 남 눈치봄, 남들 챙기는 거 좋아함. 외로움 많이 타는데 많은 사람이랑 있는건 싫음. 아싸무리에서 인싸, 인싸무리에서 아싸. 전화오면 받을까 말까 고민하다 받음.'
  },
  {
    name: 'ISFP <말캉이>',
    desc: '귀찮음, 행동 느림. 감정기복 심하고 공감능력 좋음. 모든 일 미룰 수 있을 때까지 다 미룸. 집순이, 집돌이. 집에가면 연락두절됨.'
  },
  {
    name: 'ENTJ <라라>',
    desc: '팀플하면 결국 총대매고 내가 함. 누구한테 의존하거나 의지하는 스타일 아님. 오직 세상에 믿을 사람은 나 하나. 열등감 느낀적 극히 드뭄. 피해 주는거, 피해 받는거 싫어하고 남 일에 노관심.'
  },
  {
    name: 'ENFJ <배불뚝이>',
    desc: '시끄러움. 핵인싸 되고싶어함. 사람들을 이끄는 것에 타고난 기질이 있고 좋아하기도 함. 사람을 되게 좋아함. 상대방도 본인을 신뢰한다는 느낌을 받으면 살아있음을 느낌. 단순함. 멘탈 강함.'
  },
  {
    name: 'ESTJ <수호대장>',
    desc: '고집 셈, 현실적, 이성적, 직설적. 호불호 확실. 사람 많은거 싫어함. 리더 맡는거 싫어하는데 막상 하면 잘함. 나가서 노는것보단 이것저것 배우는게 좋음. 외로움 별로 안탐.'
  },
  {
    name: 'ESTP <깃털기사>',
    desc: '외로움 잘 탐. 손재주 좋음. 리더쉽 있음. 표현을 많이 함. 어른들이 좋아함. 밖에서 사람 만나는거 좋아하지만 게을러서 나가기까지가 싫음.'
  },
  {
    name: 'ENTP <키키>',
    desc: '혼자서 돌아다니는게 제일 편함. 독립심 강함. 탐욕적, 자존심, 고집 셈, 냉철함. 겉으론 인싸 속모습은 아싸. 나한테 잘해주는 사람은 두 배로 잘해주는데 나한테 못해주면 걍 1도 없음. 밖에 놀러가면 진짜 잘 노는데 집 안에 있는것도 좋음.'
  },
  {
    name: 'ENFP <꽥꽥이>',
    desc: '정신산만함, 생각 많음, 고집 셈. 일머리 있음. 흥미있고 관심있는건 열정적 그러나 관심 없는건 별로 알고 싶어하지도 않음. 매번 나서서 무얼 하진 않는데 아무도 안나서면 답답해서 나서는 스타일. 낯을 좀 가리는데 풀리면 금방 친해지고 말도 많아짐.'
  },
  {
    name: 'ESFJ <말랑이>',
    desc: '생각보다 철저함. 혼자 계획 세우고 그 계획 틀어지는 거 싫어함. 술자리 좋아함. 남 눈치 많이 봄. 책 읽고 영화보는거 좋아함. 상담, 고민 들어주는 거 잘함.'
  },
  {
    name: 'ESFP <요롱뇽>',
    desc: '성격 매우 급함. 우주최강오지랖. 생각없이 잘삼. 아무리 걱정되는 일 있어도 좀만 지나면 무생각. 하고싶다고 생각한거 다 해야됨 근데 하기싫은건 끝까지 미룸. 고집 셈.'
  }
]
