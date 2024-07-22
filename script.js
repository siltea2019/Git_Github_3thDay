// 모든 버튼 요소 선택
const buttons = document.querySelectorAll('.button')
const numBtn = document.querySelectorAll('.number')
const operatorBtn = document.querySelectorAll('.operator')
const funcBtn = document.querySelectorAll('.function')
const clearBtn = document.querySelector(".C")
const equalBtn = document.querySelector('.equal')
// const dotBtn = document.querySelector('.dot')

console.log("scrip1버전입니다")

let firstOperand = '';
let secondOperand = '';
let operator = null;

function operfunc (first, operat, second) {
  let result;
  if (operat === '+'){
    result = Number(first) + Number(second);
  } else if (operat === '-'){
    result = Number(first) - Number(second);
  } else if (operat === '*'){
    result = Number(first) * Number(second);
  } else {
    result = Number(first) / Number(second);
  }
  display.textContent = Number(result)
  firstOperand = display.textContent
  secondOperand = ''
  operator = null
  console.log(firstOperand, secondOperand, operator)
}

const display = document.querySelector('.display')

/* 문제점
1. 중복되는 코드 함수를 이용해서 코드 줄여보기
2. 다른 기능키 작동되게 만들어보기
3. C버튼 사용후 secondoperand에 값이 남아있고 first에 값이 들어가지 않는점
4. 초기화 상태에 대한 함수를 추가해서 C버튼과 =버튼이 제대로 작동할수 있게 해보기
5. 연산자가 눌리면 화면이 없어지는부분 수정하기
6. [CSS] 쉐도우박스 넣어서 입체적으로 만들어보기
7. if문 구조트리를 짜는 연습을해서 if문을 간결한 조건문으로 작동하게 만들기
8. Nan과 Infinity가 나오는 조건 확인하고 수정하기 
8-1. Nan은 숫자가 아니라는 텍스트가 나오지만 숫자타입으로 인식해서 operator에서 걸러지지 않음
8-2. Infinity : =을 계속적으로 누르면 작동됨
8-3. Nan이후 첫번째에 000이 계속 붙음
9. 연산자 누르면 화면이 없어짐
   => 두번째 연산자 입력시 값이 누적되서 표현되어서 일단 임시방편으로 고침
10. 
11. =을 누르면 두번째값에 값이 그대로 남아있어서 다음연산에 지장이 있음 (해결)
12. 번호 입력은 모두 제대로 들어가지만 숫자가 저장될때 0과 함께 저장 (해결)
13. C를 누르면 첫번째에는 값이 안들어 가고 두번째 값이 처음부터 입력됨 (해결)
14. 연산자 입력 이후 작동 안됨 // 연산자 입력전까지는 모두 동일하게 작동 (해결)
15. 연산자가 함수실행을 안함 (해결)
16. 첫번째에만 값이 들어감 (해결)
1. =을 누르면 두번째값에 값이 그대로 남아있어서 다음연산에 지장이 있음
2. 번호 입력은 모두 제대로 들어가지만 숫자가 저장될때 0과 함께 저장 (해결)
3. C를 누르면 첫번째에는 값이 안들어 가고 두번째 값이 처음부터 입력됨 (해결)
4. 연산자 입력 이후 작동 안됨 // 연산자 입력전까지는 모두 동일하게 작동 (해결)
// numreset -> on/off 토글로 리셋기능을 바꾸는 (김진모)

- 숫자, 연산, 기능키 구별 가능
- 첫번째 숫자입력 완료후 연산자 확인후 if문 나와서 두번째 숫자입력 진행

07.19 => 공란을 null로 바꿔서 작동 되는지 확인하고 버그 고칠것
*/
buttons.forEach(function(button){ /* forEach문으로 버튼순회 방법(함수이용) */
  
  /* 이벤트 리스너후 숫자판별 */
  button.addEventListener("click", (event) => { /* 버튼입력전달 => 버튼은 이런 기능을 할거야! 버튼이 클릭 되었을때, 함수 실행할건데 */
    const btn = event.target 
    if (button.classList.contains("number")  ){
  
      if (operator == null) { // 연산자에 기호가 없을때 진행 = 첫번째
        
          if (display.textContent === '0'){ // 숫자표시부에 텍스트 컨텐츠가 0일때(true) if문 아래를 실행
            display.textContent = '' // 디스플레이 컨텐츠를 공란으로 만들고 
            display.textContent = btn.textContent
            firstOperand = display.textContent
            secondOperand = display.textContent
            console.log("first Operand :", firstOperand)
          } else{ // 조건문이 한번만 실행될것이기 때문에 0이 아닌 경우를 반환하게 한다
            display.textContent += btn.textContent
            firstOperand += btn.textContent
            console.log("first Operand :", firstOperand)
          }
      } else if (operator != null){ // 연산자에 기호가 있을때 = 두번째
          if (firstOperand !== '0'){  
            // display.textContent = '' // 디스플레이 컨텐츠를 공란으로 만들고 
            display.textContent += btn.textContent
            secondOperand += btn.textContent

            console.log("secondOperand : ", secondOperand)
          } else{ // 조건문이 한번만 실행될것이기 때문에 0이 아닌 경우를 반환하게 한다
            display.textContent = '' // 디스플레이 컨텐츠를 공란으로 만들고 
            display.textContent += btn.textContent
            secondOperand = display.textContent 
            
            console.log("secondOperand : ", secondOperand)
          }
      }
    } else if(button.classList.contains("operator")){ // else if: 연산클래스 && 연산호 있을때 := 연산버튼이 눌렸을때
      display.textContent = ''
      operator = btn.textContent
      console.log("operator : ", operator)
        
    } else if (button.classList.contains("C")){  
      display.textContent = ''
      firstOperand = ''
      secondOperand = ''
      operator = ''
      console.log(firstOperand, secondOperand, operator, "C버튼" )

    } else if (button.classList.contains("function")) { // else if문 동작 기능버튼이 눌렸을때
      console.log("나기능")

    } else if(button.classList.contains("equal")){ 
      operfunc(firstOperand, operator, secondOperand)
    }  
  })
})
