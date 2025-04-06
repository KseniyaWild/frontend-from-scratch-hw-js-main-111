/*
* Создать программный код, который определяет, может ли пользователь получить доступ к ресурсу на основе его роли и наличия разрешений.
* Полученное булево значение сохраните в переменной isAccess.

* Условия доступа:
* - Пользователь должен иметь статус администратора (isAdmin) или быть подтвержденным пользователем (isVerifiedUser)
* - А также пользователь должен обладать специальным разрешением (hasSpecialPermission) или временным пропуском (hasTemporaryPass)
*/

// тестовые данные (значения можно менять)
const isAdmin = false
const isVerifiedUser = true //проверенный пользователь
const hasSpecialPermission = true //имеет специальное разрешение
const hasTemporaryPass = false // имеет временный пропуск

let isAccess;

// your code
while(isAdmin) {
    isAccess = (isAdmin || isVerifiedUser) && (hasSpecialPermission || hasTemporaryPass);
    isAdmin = true;
}