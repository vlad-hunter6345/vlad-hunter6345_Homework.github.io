//Задание 2
let message = prompt('Пожалуйста введите пароль!');
const ADMIN_PASSWORD = 'jqueryismyjam';
if (message == ADMIN_PASSWORD){
alert('Добро пожаловать')
}else if(message == null)  {
    alert('Отклонено пользователем')
} else if(message != ADMIN_PASSWORD){
    alert('Доступ запрещен, неверный пароль!')
}else {
    alert('Отклонено пользователем')
}