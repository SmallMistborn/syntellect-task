/**
 * @param {number} hillHeight -высота холма
 * @param {number} climb -на сколько метров черепашка поднимается днем
 * @param {number} slide -на сколько метров скатывается ночью
 * @returns {number} -на какой день черепашка доберется до вершины
 */
export default function getTurtleClimbDay(hillHeight = 100, climb = 50, slide = 30) {
    if (climb <= slide && climb < hillHeight) {
        throw new Error("Черепашка никогда не сможет добраться до вершины.");
    }

    let remHeight = 0;
    let day = 0;

    while (remHeight < hillHeight) {
        day++;
        remHeight += climb;
        if (remHeight >= hillHeight) break;
        remHeight -= slide;
    }

    return day;
}

