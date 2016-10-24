var title = document.head.querySelector('title').innerHTML;
if (title == 'Change Password - Play free online games') {
	document.title = 'Изменить пароль';
}
if (title == 'Basic information - Play free online games') {
	document.title = 'Основная информация';
}
if (title == 'Login or Register Play free online games') {
	document.title = 'Вход и регистрация';
}
if (title == 'Basic information - Play free online games') { 
	document.title = 'Основная информация';
}
if (title == 'RECHARGE - Play free online games ') { 
	document.title = 'Пополнить счёт';
}
if (title == 'Transaction history - Play free online games') { 
	document.title = 'История пополнений';
}
if (title == 'Gifts - Play free online games') { 
	document.title = 'Подарки и награды';
}
if (title == 'Ticket Create - Play free online games') {
	document.title = 'Создать тикет';
}
if (title == 'Ticket Lists - Play free online games') {
	document.title = 'Тикеты';
}

(function () {
    function findAndReplace(searchText, replacement, searchNode) {
        if (!searchText || typeof replacement === 'undefined') {
            // Throw error here if you want...
            return;
        }
        var regex = typeof searchText === 'string' ? new RegExp(searchText, 'g') : searchText,
            childNodes = (searchNode || document.body).childNodes,
            cnLength = childNodes.length;
     excludes = 'html,head,style,title,link,meta,script,object,iframe';
        while (cnLength--) {
            var currentNode = childNodes[cnLength];
            if (currentNode.nodeType === 1 && (',' + excludes + ',').indexOf(',' + currentNode.nodeName.toLowerCase() + ',') === -1) {
                arguments.callee(searchText, replacement, currentNode);
            }
            if (currentNode.nodeType !== 3 || !regex.test(currentNode.data) ) {
                continue;
            }
            var parent = currentNode.parentNode,
                frag = (function(){
                    var html = currentNode.data.replace(regex, replacement),
                        wrap = document.createElement('div'),
                        frag = document.createDocumentFragment();
                    wrap.innerHTML = html;
                    while (wrap.firstChild) {
                        frag.appendChild(wrap.firstChild);
                    }
                    return frag;
                })();
            parent.insertBefore(frag, currentNode);
            parent.removeChild(currentNode);
        }
    }

     function translate() {
        var ts = {
         "Login"                                   : "Авторизация",
         "Sign Up"                                 : "Регистрация",
         "Log in with"                             : "Войти с помощью",
         "Log In"                                  : "Войти",
         "Quick"                                   : "Быстрая",
         "Sign up for news & early access to games": " Подписаться на новости.",
         "I accept the"                            : "Я принимаю",
         "Terms of Service"                        : "Условия предоставления услуг",
         "Privacy Policy"                          : "Политику конфиденциальности",
         "and am at least 13 years old"            : "и мне исполнилось 13 лет",
         "Remember me?"                            : "Запомнить",
         "Forgot password ?"                       : "Забыли пароль",
         "Mailbox cannot be empty"                 : "Не указан почтовый ящик",
         "Please enter your account"               : "Введите аккаунт",
         "Please enter your password"              : "Введите пароль",
         "Sorry, account does not exist"           : "Пользователь не найден",
         "Sorry, wrong password"                   : "Неверный пароль",
         "Old"                                     : "Старый",
         "New"                                     : "Новый",
         "Confirm"                                 : "Подтвердить",
         "Confirm password"                        : "Подтвердить пароль",
         "Verification"                            : "Проверочный",
         "SUBJECT"                                 : "Тема",
         "DATE"                                    : "Дата",
         "STATUS"                                  : "Статус",
         "Game"                                    : "Игра",
         "Server"                                  : "Сервер",
         "Records"                                 : "Записи",
         "Date"                                    : "Дата",
         "Code"                                    : "Код",
         "Category"                                : "Категория",
         "GameFable"                               : "Игра",
         "You have already got a card"             : "Бонус уже получен",
         "Register Name"                           : "Регистрационное имя",
         "Birthday"                                : "День рождения",
         "First Name"                              : "Имя",
         "Last Name"                               : "Фамилия",
         "Gender"                                  : "Пол",
         "Male"                                    : "Мужской",
         "Female"                                  : "Женский",
         "Address"                                 : "Адрес",
         "User Name:"                              : "Пользователь:",
         "SELECT PAYMENT METHOD"                   : "ВЫБЕРИТЕ СПОСОБ ОПЛАТЫ",
         "SELECT PRODUCT"                          : "ВЫБЕРИТЕ ПРОДУКТ",
         "SELECT PACKAGE"                          : "ВЫБЕРИТЕ ПАКЕТ",
         "ACCOUNT NAME"                            : "АККАУНТ",
         "GAME"                                    : "ИГРА",
         "SERVER"                                  : "СЕРВЕР",
         "RECHARGE AMOUNT"                         : "СУММА ПОПОЛНЕНИЯ",
         "PURCHASED ITEMS"                         : "ПРИОБРЕТЕННЫЕ",
         "Gildz"                                   : "Золотых",
         "USD"                                     : "доллар(ов)",
         "Order Id"                                : "Транзакция",
         "Amount"                                  : "Сумма",
         "Currency"                                : "Валюта",
         "Status"                                  : "Состояние",
         "RECEIVED"                                : "ПОЛУЧЕНО",
         "Subject"                                 : "Тема сообщения",
         "Character Name*"                         : "Персонаж",
         "Email"                                   : "Почтовый ящик",
         "Payment"                                 : "Оплата",
         "Other"                                   : "Другое",
         "Please select a category"                : "Выберите категорию",
         "Please select your Character Name"       : "Выберите игровой ник",
         "Mobile"                                  : "Мобильный",
         "Security E-mail"                         : "Почтовый ящик(указывается при регистрации,нельзя изменить)",
         "Security Question 1"                     : "Секретный вопрос №1",
         "Security Question 2"                     : "Секретный вопрос №2",
         "Answer1"                                 : "Ответ на секретный вопрос №1",
         "Answer2"                                 : "Ответ на секретный вопрос №2",
         "Please select the question"              : "Выберите вопрос",
         "What is my favourite sport"              : "Любимый вид спорта",
         "What is my favourite movie"              : "Любимый фильм",
         "Where was my father born"                : "Место рождения отца",
         "What is my mother's birthday"            : "День рождения матери",
         "Old Password"                            : "Старый пароль",
         "New Password"                            : "Новый пароль",
         "Confirm Password"                        : "Подтвердите пароль",
         "SUBMIT"                                  : "Применить",
         "Submit"                                  : "Отправить",
         "Solved & Rate"                           : "Оценить",
         "The conversation is closed"              : "Тикет закрыт",
         "View Case"                               : "Просмотр тикета",
         "Case list"                               : "Тикеты",
         "Replied"                                 : "Ответили",
	 "Closed"                                  : "Закрыт",
         "Pending"                                 : "В ожидании",
         "Account"                                 : "Аккаунт",
         "My Profile"                              : "Мой профиль",
         "Change Password"                         : "Изменить пароль",
         "Recharge Center"                         : "Пополнение счёта",
         "Recharge"                                : "Пополнить",
         "Transaction History"                     : "История пополнений",
         "Reward Center"                           : "Награды",
         "Gifts"                                   : "Подарки",
         "Report Center"                           : "Служба поддержки",
         "Report a Case"                           : "Напишите нам",
         "Report a case"                           : "Напишите нам",
         "Please select a game"                    : "Выберите игру",
         "Please select a server"                  : "Выберите сервер",
         "- How helpful was my reply?"             : "- Насколько полезен ответ ",
         "- Your Rating: "                         : "- Ваша оценка: ",
         "CONFIRM"                                 : "ПОДТВЕРДИТЬ",
         "Description*"                            : "Описание",
         "Screenshot"                              : "Скриншот",
         "Please take a screenshot of your problem and upload it so we can process your case faster." : "Пожалуйста, загрузите скриншот проблемы, чтобы мы могли обработать ваш тикет быстрее.",
         "DEL"                                     : "УДАЛИТЬ",
         "You must select the gift type, game and server above!" : "Вы должны выбрать тип подарка, игру и сервер выше!",
         "Each pack can only be taken once per character"        : "Каждый подарок может быть получен только один раз",
         "Warm Tips:"                              : "Внимание:",
        };
        for(var t in ts) {
            findAndReplace(t,ts[t]);
        }
       setTimeout(translate, 0);
    }
    setTimeout(translate, 0);
})();
