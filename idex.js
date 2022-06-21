const userChooseTimeForm = document.querySelector(".userChoose__input");
const userInput = document.querySelector(".userChoose__input input");
const answerDate = document.querySelector(".answerDate");
const nowDate = document.querySelector(".nowDate");
const answerDateDay = document.querySelector(".answerDateDay");

setInterval(() => {
  nowDate.innerHTML = new Date();
}, 1000);

function dDayCal() {
  const userInputValue = userInput.value;
  const clock = new Date().getTime();
  const writeDate = new Date(userInputValue);
  const wirteTime = writeDate.getTime();
  const calDay = wirteTime - clock;
  const timeSec = Math.floor(calDay / 1000);
  const timeMinutes = Math.floor(timeSec / 60);
  const timeHour = Math.floor(timeMinutes / 60);
  const timeDay = Math.floor(timeHour / 24);
  const timeYear = Math.floor(timeDay / 365);

  const viewSec = timeSec % 60;
  const viewMinutes = timeMinutes % 60;
  const viewDay = timeDay % 365;
  const viewHour = timeHour % 60;
  if (timeYear <= 0) {
    answerDate.innerHTML = `${viewDay}일${viewHour}시${viewMinutes}분 ${viewSec}초 남았습니다`;
    console.log(calDay);
  } else {
    answerDate.innerHTML = `${timeYear}년${viewDay}일${viewHour}시${viewMinutes}분 ${viewSec}초 남았습니다`;
    console.log(calDay);
  }
}

function handleSubmit(event) {
  event.preventDefault();
  const userInputValue = userInput.value;
  const parseUserInputValue = userInputValue.split("-");
  if (parseUserInputValue.length < 3 || userInputValue === "" || parseUserInputValue.length > 3 || parseUserInputValue[0] < 2021) {
    // parseUserInputValue[0] ==0 이런식으로 개노가다 가능한데 이런식으로 발리데이션 확인하는것이 의미가 있는지모르겠기도 함 일단형식확인만 한다는식으로 간단한 것만 추가
    alert("정확히 입력해주세요");
  } else {
    setInterval(dDayCal, 1000);
  }
}

userChooseTimeForm.addEventListener("submit", handleSubmit);

// 중간 저장 setInterval 이 실시간 적용이 안되는점 과 여러번 입력했을때 점차점차 쌓이는 점  발견해서 이를 수정해야됨 => 전역변수 지역변수 개념이 중요함

//
