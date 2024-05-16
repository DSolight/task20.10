# Практическое занятие 20.10

## Что использовалось

1. HTML
2. CSS
3. JavaScript
4. Принципы (DRY, KISS, YANGI, SOLID, БЭМ)
5. Валидатор W3C (validator.w3.org)
6. JSLint
7. Prettier
8. Прошлые работы

## Какие изменения произошли

1. Для применения принципов DRY, KISS, YANGI, SOLID использовались старые работы.
Практическое задание для модуля 9.11, 6.8.
Для проверки изменений, приложил фото изменений по каждому принципу.
2. Валидность проверил на сайте.
3. Принцип БЭМ использовал на том же проекте, на котором проверял валидность.

## Комментарии по изменения

1. DRY - Использование тернарного оператора позволяет избежать повторения вызова функции this.randomValue для обоих условий. В зависимости от условия gender === this.genderMale происходит возврат значений. С точки зрения принципа DRY, я избегаю дублирования кода и делаю его более компактным.
2. KISS - Упрощаем код с использованием тернарного оператора для выбора случайного значения в функциях randomFirstName и randomsurName. Таким образом, вы можете избежать дублирования вызова функции this.randomValue для каждого условия gender === this.genderMale и gender === this.genderFemale. Новый код делает использование функции randomValue более эффективным и избегает повторения кода. (Да, тернарный оператор помогу мне использовать принцип DRY и KISS)
3. YANGI - В коде есть два варианта метода randomfathersName, один из них закомментирован. Удаляю закомментированный блок и оставляю только актуальный метод для получения отчества в зависимости от пола. Таким образом, не нужно хранить лишние данные в формате JSON. Это позволит избежать излишней сложности и упростить код. Учитывая, что в коде уже есть метод randomDMY, который включает в себя случайную генерацию года рождения, удаляю метод randombirthYear.
4. SOLID - Тут уже посложнее.
Для начала: Создадим класс TrafficLight, который будет отвечать исключительно за логику переключения цветов светофора.
Внесем логику каждого цвета в отдельные классы, чтобы можно было легко добавлять новые цвета без изменения существующего кода.
Новые классы цветов должны быть способны заменить базовый класс (или интерфейс) без изменения поведения программы.
Разделим интерфейсы для каждого класса цвета, чтобы клиенты могли использовать только необходимую им функциональность.
Переработаем код таким образом, чтобы класс TrafficLight зависел от абстракций, а не от конкретных реализаций.
Созданые классы TrafficLight и Color позволяют каждому цвету светофора быть отдельным объектом с единым интерфейсом для выполнения своей логики.
5. БЭМ - Здесь я добавил префиксы card-- и card__ для блоков и элементов в соответствии с принципом БЭМ. Также я добавил модификаторы button--clear и button--generate для кнопок "Сбросить генерацию" и "Сгенерировать". Это помогает структурировать имена классов в коде, делая их более понятными и легкими для поддержки.