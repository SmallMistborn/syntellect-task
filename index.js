import getTurtleClimbDay from "./getTurtleClimbDay";
import getHandshakeCount from "./getHandshakeCount";
import cleanString from "./cleanString";

const container = document.createElement("div");
container.innerHTML = `
  <h1>Результаты задач</h1>

  <section>
    <h2>Задача 1: Черепашка на холме</h2>
    <label>Высота холма: <input id="hillHeight" type="number" value="100" /></label><br/>
    <label>Подъём днём: <input id="climb" type="number" value="50" /></label><br/>
    <label>Скольжение ночью: <input id="slide" type="number" value="30" /></label><br/>
    <button id="btnTurtle">Рассчитать</button>
    <p id="resultTurtle"></p>
  </section>

  <section>
    <h2>Задача 2: Рукопожатия</h2>
    <label>Количество людей: <input id="people" type="number" value="10" /></label><br/>
    <button id="btnHandshake">Рассчитать</button>
    <p id="resultHandshake"></p>
  </section>

  <section>
    <h2>Задача 3: Удаление дублей</h2>
    <label>Введите строку: <input id="inputStr" type="text" value="кошка,собака,лошадь,корова,кошка,лошадь" /></label><br/>
    <button id="btnClean">Очистить</button>
    <p id="resultClean"></p>
  </section>
`;

document.body.appendChild(container);



document.getElementById("btnTurtle").onclick = () => {
    const height = +document.getElementById("hillHeight").value;
    const climb = +document.getElementById("climb").value;
    const slide = +document.getElementById("slide").value;
    const output = document.getElementById("resultTurtle");

    try {
        const result = getTurtleClimbDay(height, climb, slide);
        output.textContent = `Черепашка доберётся на ${result} день.`;
    } catch (err) {
        output.textContent = `Ошибка: ${err.message}`;

    }
};


document.getElementById("btnHandshake").onclick = () => {
    const people = +document.getElementById("people").value;
    const result = getHandshakeCount(people);
    document.getElementById("resultHandshake").textContent = `Всего рукопожатий: ${result}`;
};

document.getElementById("btnClean").onclick = () => {
    const input = document.getElementById("inputStr").value;
    const result = cleanString(input);
    document.getElementById("resultClean").textContent = `Строка без дублей: ${result}`;
};