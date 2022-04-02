// будет сохранять значения полей в локальное хранилище когда пользователь что - то печатает.

// Отслеживай на форме событие input,
//     и каждый раз записывай в локальное хранилище объект с полями email и message,
//     в которых сохраняй текущие значения полей формы.
// Пусть ключом для хранилища будет строка "feedback-form-state".
// При загрузке страницы проверяй состояние хранилища,
//     и если там есть сохраненные данные, заполняй ими поля формы. 
// В противном случае поля должны быть пустыми.
// При сабмите формы очищай хранилище и поля формы,
//     а также выводи объект с полями email,
//         message и текущими их значениями в консоль.
// Сделай так, чтобы хранилище обновлялось не чаще чем раз в 500 миллисекунд. 
import throttle from "lodash.throttle";

const formRef = document.querySelector('.feedback-form');
const inputRef = document.querySelector('input');
const textareaRef = document.querySelector('textarea');
const LOCALSTORAGE_KEY = "feedback-form-state";

formRef.addEventListener('input', throttle(onInputMessage, 500))
formRef.addEventListener('submit', onSubmit);

updateOutput();

function onInputMessage(event) {
  const feedbackUser = {
    email: event.currentTarget.elements.email.value,
    message: event.currentTarget.elements.message.value,
  };
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(feedbackUser));
}

function updateOutput() {
  const savedMessage = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
  if (savedMessage) {
    inputRef.value = savedMessage.email;
    textareaRef.value = savedMessage.message;
  }
}

function onSubmit(event) {
  event.preventDefault();

  const { email, message } =  event.currentTarget.elements
  if (email.value === "" || message.value === "") {
    alert("Please fill in all the fields below");
  }
  else {
    console.log(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));
  }

  formRef.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
}
