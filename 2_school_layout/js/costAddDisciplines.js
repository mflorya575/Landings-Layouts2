const costAddDisciplines = () => {
    const costList = document.querySelector('.cost__list');
    const costBtn = document.querySelector('.cost__add');

    // Счетчики для отслеживания первых и вторых элементов
    let redCounter = 0;
    let greenCounter = 0;

    costBtn.addEventListener('click', () => {
        const li = document.createElement('li');
        li.innerHTML = `
        <form><input type="text" placeholder="Название предмета"></form>
        <form><input type="text" placeholder="Уровень (пример: 8 класс)"></form>
        <form><input type="text" placeholder="Индивидуально / в группе"></form>
        <form><input type="text" placeholder="Цена за академический час (45 мин)"></form>
        <form><input type="text" placeholder="Количество академических часов в месяц"></form>
        <form><input type="text" placeholder="Стоимость за месяц"></form>
      `;

        const listItems = costList.querySelectorAll('li');
        if (listItems.length === 0 || listItems[listItems.length - 1].classList.contains('_section-item-red')) {
            costList.appendChild(li);
            li.classList.add('_section-item-green');
            greenCounter++;
        } else {
            costList.insertBefore(li, listItems[listItems.length - 1].nextSibling);
            li.classList.add('_section-item-red');
            redCounter++;
        }
    });
}
costAddDisciplines();