// Переключение страниц
function navigateTo(pageId) {
    // Скрываем все вкладки
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));

    // Показываем нужную страницу
    const selectedTab = document.getElementById(`page-${pageId}`);
    if (selectedTab) {
        selectedTab.classList.add('active');
    }

    // Подсвечиваем активную кнопку навигации
    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach(btn => {
        if (btn.getAttribute('data-page') === pageId) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Прокрутка наверх при переходе
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Калькулятор КБЖУ
function calculateCalories() {
    const age = parseFloat(document.getElementById('calcAge').value) || 0;
    const weight = parseFloat(document.getElementById('calcWeight').value) || 0;
    const height = parseFloat(document.getElementById('calcHeight').value) || 0;

    if (!age || !weight || !height) {
        alert('Пожалуйста, заполните все поля!');
        return;
    }

    // Формула Миффлина-Сан Жеора
    const bmr = Math.round(10 * weight + 6.25 * height - 5 * age + 5);
    const maintenance = Math.round(bmr * 1.375);

    const resultBox = document.getElementById('calcResult');
    const kcalVal = document.getElementById('kcalVal');

    kcalVal.textContent = `${maintenance} ккал`;
    resultBox.classList.remove('hidden');
}

// Добавление товара в корзину
function addToCart() {
    alert('Товар успешно добавлен в корзину!');
}

// Проверка ответа в квизе
function checkAnswer(isCorrect, element) {
    const res = document.getElementById('quizRes');
    res.classList.remove('hidden', 'correct', 'wrong');

    if (isCorrect) {
        res.textContent = 'Правильно! 👍 В футболе на поле выходит 11 игроков.';
        res.classList.add('correct');
    } else {
        res.textContent = 'Неверно, попробуйте еще раз! ❌';
        res.classList.add('wrong');
    }
}

// Отправка формы контактов
function sendMessage() {
    // Регулярные выражения
    const regexFio = /^[А-ЯЁA-Z][а-яёa-z]+(\s+[А-ЯЁA-Z][а-яёa-z]+){1,2}$/u;
    const regexPhone = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Элементы полей
    const fioInput = document.getElementById('contactFio');
    const phoneInput = document.getElementById('contactPhone');
    const emailInput = document.getElementById('contactEmail');
    const messageInput = document.getElementById('contactMessage');

    // Элементы ошибок
    const fioError = document.getElementById('fioError');
    const phoneError = document.getElementById('phoneError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');

    // Сброс предыдущих ошибок
    let isValid = true;
    [fioInput, phoneInput, emailInput, messageInput].forEach(input => input.classList.remove('input-error'));
    [fioError, phoneError, emailError, messageError].forEach(err => err.textContent = '');

    // 1. Проверка ФИО
    if (!fioInput.value.trim()) {
        fioError.textContent = 'Введите ФИО';
        fioInput.classList.add('input-error');
        isValid = false;
    } else if (!regexFio.test(fioInput.value.trim())) {
        fioError.textContent = 'Укажите Имя и Фамилию с заглавной буквы (например, Иванов Иван)';
        fioInput.classList.add('input-error');
        isValid = false;
    }

    // 2. Проверка Телефона
    if (!phoneInput.value.trim()) {
        phoneError.textContent = 'Введите номер телефона';
        phoneInput.classList.add('input-error');
        isValid = false;
    } else if (!regexPhone.test(phoneInput.value.trim())) {
        phoneError.textContent = 'Некорректный формат (пример: +996 (999) 123-45-67)';
        phoneInput.classList.add('input-error');
        isValid = false;
    }

    // 3. Проверка Email
    if (!emailInput.value.trim()) {
        emailError.textContent = 'Введите адрес почты';
        emailInput.classList.add('input-error');
        isValid = false;
    } else if (!regexEmail.test(emailInput.value.trim())) {
        emailError.textContent = 'Некорректный email (пример: user@domain.com)';
        emailInput.classList.add('input-error');
        isValid = false;
    }

    // 4. Проверка Сообщения
    if (!messageInput.value.trim()) {
        messageError.textContent = 'Введите текст сообщения';
        messageInput.classList.add('input-error');
        isValid = false;
    } else if (messageInput.value.trim().length < 10) {
        messageError.textContent = 'Сообщение должно быть не короче 10 символов';
        messageInput.classList.add('input-error');
        isValid = false;
    }

    // Если всё заполнено верно
    if (isValid) {
        alert('Спасибо за ваше сообщение! Мы ответим вам в ближайшее время.');
        // Очистка формы
        fioInput.value = '';
        phoneInput.value = '';
        emailInput.value = '';
        messageInput.value = '';
    }
}