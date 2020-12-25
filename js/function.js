function bark(name, weight) {
    //name? weight параметры
    if (weight > 20) {
        console.log(name + " says WOOF WOOF");
    } else {
        console.log(name + " says woof woof");
    }
}
bark("rover", 23);
bark("spot", 13);
// spot 13 - аргументы
bark("spike", 53);
bark("lady", 17);
// если вы забудете объявить переменную перед использованием, 
//то такая переменная всегда будет глобальной 
//(даже если она впервые используется внутри функции)
