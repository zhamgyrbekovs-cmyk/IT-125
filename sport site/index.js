// // Переключение страниц
// function navigateTo(pageId) {
//     // Скрываем все вкладки
//     const tabs = document.querySelectorAll('.tab-content');
//     tabs.forEach(tab => tab.classList.remove('active'));

//     // Показываем нужную страницу
//     const selectedTab = document.getElementById(`page-${pageId}`);
//     if (selectedTab) {
//         selectedTab.classList.add('active');
//     }

//     // Подсвечиваем активную кнопку навигации
//     const buttons = document.querySelectorAll('.nav-btn');
//     buttons.forEach(btn => {
//         if (btn.getAttribute('data-page') === pageId) {
//             btn.classList.add('active');
//         } else {
//             btn.classList.remove('active');
//         }
//     });

//     // Прокрутка наверх при переходе
//     window.scrollTo({ top: 0, behavior: 'smooth' });
// }

// // Калькулятор КБЖУ
// function calculateCalories() {
//     const age = parseFloat(document.getElementById('calcAge').value) || 0;
//     const weight = parseFloat(document.getElementById('calcWeight').value) || 0;
//     const height = parseFloat(document.getElementById('calcHeight').value) || 0;

//     if (!age || !weight || !height) {
//         alert('Пожалуйста, заполните все поля!');
//         return;
//     }

//     // Формула Миффлина-Сан Жеора
//     const bmr = Math.round(10 * weight + 6.25 * height - 5 * age + 5);
//     const maintenance = Math.round(bmr * 1.375);

//     const resultBox = document.getElementById('calcResult');
//     const kcalVal = document.getElementById('kcalVal');

//     kcalVal.textContent = `${maintenance} ккал`;
//     resultBox.classList.remove('hidden');
// }

// // Добавление товара в корзину
// function addToCart() {
//     alert('Товар успешно добавлен в корзину!');
// }

// // Проверка ответа в квизе
// function checkAnswer(isCorrect, element) {
//     const res = document.getElementById('quizRes');
//     res.classList.remove('hidden', 'correct', 'wrong');

//     if (isCorrect) {
//         res.textContent = 'Правильно! 👍 В футболе на поле выходит 11 игроков.';
//         res.classList.add('correct');
//     } else {
//         res.textContent = 'Неверно, попробуйте еще раз! ❌';
//         res.classList.add('wrong');
//     }
// }

// // Отправка формы контактов
// function sendMessage() {
//     // Регулярные выражения
//     const regexFio = /^[А-ЯЁA-Z][а-яёa-z]+(\s+[А-ЯЁA-Z][а-яёa-z]+){1,2}$/u;
//     const regexPhone = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
//     const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

//     // Элементы полей
//     const fioInput = document.getElementById('contactFio');
//     const phoneInput = document.getElementById('contactPhone');
//     const emailInput = document.getElementById('contactEmail');
//     const messageInput = document.getElementById('contactMessage');

//     // Элементы ошибок
//     const fioError = document.getElementById('fioError');
//     const phoneError = document.getElementById('phoneError');
//     const emailError = document.getElementById('emailError');
//     const messageError = document.getElementById('messageError');

//     // Сброс предыдущих ошибок
//     let isValid = true;
//     [fioInput, phoneInput, emailInput, messageInput].forEach(input => input.classList.remove('input-error'));
//     [fioError, phoneError, emailError, messageError].forEach(err => err.textContent = '');

//     // 1. Проверка ФИО
//     if (!fioInput.value.trim()) {
//         fioError.textContent = 'Введите ФИО';
//         fioInput.classList.add('input-error');
//         isValid = false;
//     } else if (!regexFio.test(fioInput.value.trim())) {
//         fioError.textContent = 'Укажите Имя и Фамилию с заглавной буквы (например, Иванов Иван)';
//         fioInput.classList.add('input-error');
//         isValid = false;
//     }

//     // 2. Проверка Телефона
//     if (!phoneInput.value.trim()) {
//         phoneError.textContent = 'Введите номер телефона';
//         phoneInput.classList.add('input-error');
//         isValid = false;
//     } else if (!regexPhone.test(phoneInput.value.trim())) {
//         phoneError.textContent = 'Некорректный формат (пример: +996 (999) 123-45-67)';
//         phoneInput.classList.add('input-error');
//         isValid = false;
//     }

//     // 3. Проверка Email
//     if (!emailInput.value.trim()) {
//         emailError.textContent = 'Введите адрес почты';
//         emailInput.classList.add('input-error');
//         isValid = false;
//     } else if (!regexEmail.test(emailInput.value.trim())) {
//         emailError.textContent = 'Некорректный email (пример: user@domain.com)';
//         emailInput.classList.add('input-error');
//         isValid = false;
//     }

//     // 4. Проверка Сообщения
//     if (!messageInput.value.trim()) {
//         messageError.textContent = 'Введите текст сообщения';
//         messageInput.classList.add('input-error');
//         isValid = false;
//     } else if (messageInput.value.trim().length < 10) {
//         messageError.textContent = 'Сообщение должно быть не короче 10 символов';
//         messageInput.classList.add('input-error');
//         isValid = false;
//     }

//     // Если всё заполнено верно
//     if (isValid) {
//         alert('Спасибо за ваше сообщение! Мы ответим вам в ближайшее время.');
//         // Очистка формы
//         fioInput.value = '';
//         phoneInput.value = '';
//         emailInput.value = '';
//         messageInput.value = '';
//     }
// }


// const DATA_URL = 'data.json';
// const productGrid = document.getElementById('product-grid');
// const detailModal = document.getElementById('detail-modal');
// const detailCard = document.getElementById('detail-card');
// const closeBtn = document.getElementById('close-btn');

// let productsData = [];

// async function loadProducts() {
//     try {
//         const response = await fetch(DATA_URL);
//         if (!response.ok) throw new Error(`Ошибка: ${response.status}`);

//         productsData = await response.json();
//         renderProductsList(productsData);
//     } catch (error) {
//         console.error('Ошибка JSON:', error);
//         if (productGrid) {
//             productGrid.innerHTML = '<p style="color: #ef4444;">Ошибка загрузки каталога!</p>';
//         }
//     }
// }

// function renderProductsList(products) {
//     if (!productGrid) return;
//     productGrid.innerHTML = '';

//     products.forEach(product => {
//         const card = document.createElement('div');
//         card.className = 'product-card pointer';
//         card.innerHTML = `
//             <img src="${product.image}" alt="${product.name}" style="height: 160px; object-fit: cover; border-radius: 8px; width: 100%; margin-bottom: 10px;">
//             <h3>${product.name}</h3>
//             <p>${product.description.substring(0, 60)}...</p>
//             <div class="product-footer">
//                 <span class="price">${product.price.toLocaleString()} ₽</span>
//                 <button class="btn btn-secondary">Подробнее</button>
//             </div>
//         `;
        

//         card.addEventListener('click', () => showProductDetail(product.id));
//         productGrid.appendChild(card);
//     });
// }


// function showProductDetail(productId) {
//     const product = productsData.find(p => p.id === productId);
//     if (!product) return;

//     const specsList = Object.entries(product.specs)
//         .map(([key, value]) => `<li><span>${key}:</span> <strong>${value}</strong></li>`)
//         .join('');

//     detailCard.innerHTML = `
//         <div class="detail-layout">
//             <h2>${product.name}</h2>
//             <img src="${product.image}" alt="${product.name}" class="detail-img">
//             <p class="detail-desc">${product.description}</p>
//             <div class="detail-specs">
//                 <h4 style="color: #f8fafc; margin-bottom: 8px;">Характеристики</h4>
//                 <ul>${specsList}</ul>
//             </div>
//             <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px;">
//                 <span class="price" style="font-size: 24px;">${product.price.toLocaleString()} ₽</span>
//                 <button onclick="addToCart()" class="btn btn-primary">В корзину</button>
//             </div>
//         </div>
//     `;

//     detailModal.classList.remove('hidden');
// }


// if (closeBtn) {
//     closeBtn.addEventListener('click', () => detailModal.classList.add('hidden'));
// }

// if (detailModal) {
//     detailModal.addEventListener('click', (e) => {
//         if (e.target === detailModal) detailModal.classList.add('hidden');
//     });
// }

// // Запуск загрузки товаров при старте
// document.addEventListener('DOMContentLoaded', loadProducts);



// 1. ПЕРЕКЛЮЧЕНИЕ СТРАНИЦ
function navigateTo(pageId) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));

    const selectedTab = document.getElementById(`page-${pageId}`);
    if (selectedTab) {
        selectedTab.classList.add('active');
    }

    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach(btn => {
        if (btn.getAttribute('data-page') === pageId) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
}


// 2. КАЛЬКУЛЯТОР КБЖУ
function calculateCalories() {
    const age = parseFloat(document.getElementById('calcAge').value) || 0;
    const weight = parseFloat(document.getElementById('calcWeight').value) || 0;
    const height = parseFloat(document.getElementById('calcHeight').value) || 0;

    if (!age || !weight || !height) {
        alert('Пожалуйста, заполните все поля!');
        return;
    }

    const bmr = Math.round(10 * weight + 6.25 * height - 5 * age + 5);
    const maintenance = Math.round(bmr * 1.375);

    const resultBox = document.getElementById('calcResult');
    const kcalVal = document.getElementById('kcalVal');

    kcalVal.textContent = `${maintenance} ккал`;
    resultBox.classList.remove('hidden');
}

// 3. КОРЗИНА И КВИЗ И ФОРМА КОНТАКТО
function addToCart() {
    alert('Товар успешно добавлен в корзину!');
}

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

function sendMessage() {
    const regexFio = /^[А-ЯЁA-Z][а-яёa-z]+(\s+[А-ЯЁA-Z][а-яёa-z]+){1,2}$/u;
    const regexPhone = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const fioInput = document.getElementById('contactFio');
    const phoneInput = document.getElementById('contactPhone');
    const emailInput = document.getElementById('contactEmail');
    const messageInput = document.getElementById('contactMessage');

    const fioError = document.getElementById('fioError');
    const phoneError = document.getElementById('phoneError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');

    let isValid = true;
    [fioInput, phoneInput, emailInput, messageInput].forEach(input => input.classList.remove('input-error'));
    [fioError, phoneError, emailError, messageError].forEach(err => err.textContent = '');

    if (!fioInput.value.trim()) {
        fioError.textContent = 'Введите ФИО';
        fioInput.classList.add('input-error');
        isValid = false;
    } else if (!regexFio.test(fioInput.value.trim())) {
        fioError.textContent = 'Укажите Имя и Фамилию с заглавной буквы';
        fioInput.classList.add('input-error');
        isValid = false;
    }

    if (!phoneInput.value.trim()) {
        phoneError.textContent = 'Введите номер телефона';
        phoneInput.classList.add('input-error');
        isValid = false;
    } else if (!regexPhone.test(phoneInput.value.trim())) {
        phoneError.textContent = 'Некорректный формат';
        phoneInput.classList.add('input-error');
        isValid = false;
    }

    if (!emailInput.value.trim()) {
        emailError.textContent = 'Введите адрес почты';
        emailInput.classList.add('input-error');
        isValid = false;
    } else if (!regexEmail.test(emailInput.value.trim())) {
        emailError.textContent = 'Некорректный email';
        emailInput.classList.add('input-error');
        isValid = false;
    }

    if (!messageInput.value.trim()) {
        messageError.textContent = 'Введите текст сообщения';
        messageInput.classList.add('input-error');
        isValid = false;
    } else if (messageInput.value.trim().length < 10) {
        messageError.textContent = 'Сообщение должно быть не короче 10 символов';
        messageInput.classList.add('input-error');
        isValid = false;
    }

    if (isValid) {
        alert('Спасибо за ваше сообщение! Мы ответим вам в ближайшее время.');
        fioInput.value = '';
        phoneInput.value = '';
        emailInput.value = '';
        messageInput.value = '';
    }
}


// 4. КАТАЛОГ ТОВАРОВ

const DATA_URL = 'data.json';
const productGrid = document.getElementById('product-grid');
const detailModal = document.getElementById('detail-modal');
const detailCard = document.getElementById('detail-card');
const closeBtn = document.getElementById('close-btn');

let productsData = [];


// Загрузка товаров из localStorage или встроенных данных 
async function loadProducts() {
    const localData = localStorage.getItem('productsData');
    if (localData) {
        productsData = JSON.parse(localData);
        renderProductsList(productsData);
        return;
    }

    try {
        const response = await fetch(DATA_URL);
        if (!response.ok) throw new Error(`Ошибка: ${response.status}`);
        productsData = await response.json();
    } catch (error) {
        // Запасной массив, если fetch заблокирован из-за file://
        productsData = [
            {
                "id": 1,
                "name": "Протеин Whey Gold 100%",
                "price": 3400,
                "image": "https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?w=500",
                "description": "Сывороточный протеин премиум качества для эффективного набора мышечной массы.",
                "specs": { "Объем": "908 г", "Белок": "24 г" }
            },
            {
                "id": 2,
                "name": "Фитнес-коврик PRO",
                "price": 1800,
                "image": "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500",
                "description": "Нескользящий износостойкий коврик для йоги и фитнеса.",
                "specs": { "Толщина": "6 мм", "Размер": "183 х 61 см" }
            },
            {
                "id": 3,
                "name": "Гантели разборные 20 кг",
                "price": 5200,
                "image": "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=500",
                "description": "Универсальный набор гантелей с прорезиненными дисками.",
                "specs": { "Общий вес": "20 кг", "Материал": "Сталь" }
            },
            {
                "id": 4,
                "name": "Спортивные часы SportPulse",
                "price": 8900,
                "image": "https://images.unsplash.com/photo-1510017803434-a899398421b3?w=500",
                "description": "Умные часы с пульсометром и GPS-трекером.",
                "specs": { "Дисплей": "AMOLED", "Влагозащита": "5 ATM" }
            }
        ];
    }
    
    saveProductsToStorage();
    renderProductsList(productsData);
}

function saveProductsToStorage() {
    localStorage.setItem('productsData', JSON.stringify(productsData));
}

// Отрисовка списка товаров
function renderProductsList(products) {
    if (!productGrid) return;
    productGrid.innerHTML = '';

    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card pointer';
        card.id = `product-card-${product.id}`;
        card.innerHTML = `
            <img src="${product.image || 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=500'}" alt="${product.name}" style="height: 160px; object-fit: cover; border-radius: 8px; width: 100%; margin-bottom: 10px;">
            <h3>${product.name}</h3>
            <p>${(product.description || '').substring(0, 60)}...</p>
            <div class="product-footer">
                <span class="price">${Number(product.price).toLocaleString()} ₽</span>
            </div>
            <div class="card-actions">
                <button class="btn btn-secondary" onclick="event.stopPropagation(); showProductDetail(${product.id})">Инфо</button>
                <button class="btn btn-secondary" onclick="event.stopPropagation(); openEditModal(${product.id})">✏️ Изм</button>
                <button class="btn btn-danger" onclick="event.stopPropagation(); deleteProduct(${product.id})">🗑 Удл</button>
            </div>
        `;

        card.addEventListener('click', () => showProductDetail(product.id));
        productGrid.appendChild(card);
    });
}

//  Просмотр товара
function showProductDetail(productId) {
    const product = productsData.find(p => p.id === productId);
    if (!product) return;

    const specsList = product.specs ? Object.entries(product.specs)
        .map(([key, value]) => `<li><span>${key}:</span> <strong>${value}</strong></li>`)
        .join('') : '<li>Нет характеристик</li>';

    detailCard.innerHTML = `
        <div class="detail-layout">
            <h2>${product.name}</h2>
            <img src="${product.image || 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=500'}" alt="${product.name}" class="detail-img">
            <p class="detail-desc">${product.description}</p>
            <div class="detail-specs">
                <h4 style="color: #f8fafc; margin-bottom: 8px;">Характеристики</h4>
                <ul>${specsList}</ul>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px;">
                <span class="price" style="font-size: 24px;">${Number(product.price).toLocaleString()} ₽</span>
                <button onclick="addToCart()" class="btn btn-primary">В корзину</button>
            </div>
        </div>
    `;

    detailModal.classList.remove('hidden');
}

// Форма добавления нового товара
function openAddModal() {
    detailCard.innerHTML = `
        <form class="crud-form" onsubmit="saveNewProduct(event)">
            <h3>Добавить новый товар</h3>
            <div class="form-group">
                <label>Название товара</label>
                <input type="text" id="prodName" required placeholder="Например: Штанга 50кг">
            </div>
            <div class="form-group">
                <label>Цена (₽)</label>
                <input type="number" id="prodPrice" required placeholder="Например: 4500">
            </div>
            <div class="form-group">
                <label>URL картинки</label>
                <input type="url" id="prodImage" placeholder="https://...">
            </div>
            <div class="form-group">
                <label>Описание</label>
                <textarea id="prodDesc" rows="3" required placeholder="Описание товара..."></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Сохранить товар</button>
        </form>
    `;
    detailModal.classList.remove('hidden');
}

function saveNewProduct(e) {
    e.preventDefault();
    const newProduct = {
        id: Date.now(),
        name: document.getElementById('prodName').value,
        price: Number(document.getElementById('prodPrice').value),
        image: document.getElementById('prodImage').value || 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=500',
        description: document.getElementById('prodDesc').value,
        specs: { "Категория": "Новый товар" }
    };

    productsData.push(newProduct);
    saveProductsToStorage();
    renderProductsList(productsData);
    detailModal.classList.add('hidden');
}

// Редактирование товара
function openEditModal(productId) {
    const product = productsData.find(p => p.id === productId);
    if (!product) return;

    detailCard.innerHTML = `
        <form class="crud-form" onsubmit="saveEditProduct(event, ${product.id})">
            <h3>Редактировать товар</h3>
            <div class="form-group">
                <label>Название товара</label>
                <input type="text" id="editProdName" value="${product.name}" required>
            </div>
            <div class="form-group">
                <label>Цена (₽)</label>
                <input type="number" id="editProdPrice" value="${product.price}" required>
            </div>
            <div class="form-group">
                <label>URL картинки</label>
                <input type="url" id="editProdImage" value="${product.image || ''}">
            </div>
            <div class="form-group">
                <label>Описание</label>
                <textarea id="editProdDesc" rows="3" required>${product.description}</textarea>
            </div>
            <button type="submit" class="btn btn-primary">Обновить товар</button>
        </form>
    `;
    detailModal.classList.remove('hidden');
}

function saveEditProduct(e, productId) {
    e.preventDefault();
    const product = productsData.find(p => p.id === productId);
    if (!product) return;

    product.name = document.getElementById('editProdName').value;
    product.price = Number(document.getElementById('editProdPrice').value);
    product.image = document.getElementById('editProdImage').value;
    product.description = document.getElementById('editProdDesc').value;

    saveProductsToStorage();
    renderProductsList(productsData);
    detailModal.classList.add('hidden');
}

// Удаление товара с анимацией
function deleteProduct(productId) {
    if (!confirm('Вы уверены, что хотите удалить этот товар?')) return;

    const cardElement = document.getElementById(`product-card-${productId}`);
    if (cardElement) {
        cardElement.classList.add('deleting'); // Запускаем CSS-анимацию 3
        setTimeout(() => {
            productsData = productsData.filter(p => p.id !== productId);
            saveProductsToStorage();
            renderProductsList(productsData);
        }, 350);
    } else {
        productsData = productsData.filter(p => p.id !== productId);
        saveProductsToStorage();
        renderProductsList(productsData);
    }
}

// Закрытие модального окна
if (closeBtn) {
    closeBtn.addEventListener('click', () => detailModal.classList.add('hidden'));
}
if (detailModal) {
    detailModal.addEventListener('click', (e) => {
        if (e.target === detailModal) detailModal.classList.add('hidden');
    });
}

document.addEventListener('DOMContentLoaded', loadProducts);