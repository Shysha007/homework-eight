let year = prompt(`Введите ваш год рождения:`);
let age = 2021 - year;
let city;
let sport;
switch (year) {
    case null:
    alert(`Жаль, что Вы не захотели ввести свой год рождения`);
    break;
    default:
        if (isNaN(year)) {
        alert(`Вы ввели не число`);
        } else {
            city = prompt(`В каком городе Вы живете?`);
            switch(city) {
                case null:
                    city = `Жаль, что Вы не захотели ввести свой город`;
                    alert(city);
                    break;
                case `Киев`:
                    city = `Ты живешь в столице Украины`;
                    break;
                case `Минск`: 
                    city = `Ты живешь в столице Беларуси`;
                    break;
                case `Москва`:
                    city = `Ты живешь в столице России`;
                    break;
                default: 
                    city = `Ты живешь в городе ${city}`;
            }
            sport = prompt(`Введите ваш любимый вид спорта:`);
            switch (sport) {
                case null:
                    sport = `Жаль, что Вы не захотели ввести свой любимый вид спорта`;
                    alert(sport)
                    break;
                case `Футбол`:
                    sport = `Круто! Хочешь стать как Криштиану Роналду?)`;
                    break;
                case `Баскетбол`:
                    sport = `Круто! Хочешь стать как Майкл Джордан?)`;
                    break;
                case `Волейбол`:
                    sport = `Круто! Хочешь стать как Мэттью Андерсон?)`;
                    break;
                default:
                    sport = `Твой любимый вид спорта ${sport}`;
            }
            alert(age+'\n'+ city+ '\n'+ sport);
        }
}
