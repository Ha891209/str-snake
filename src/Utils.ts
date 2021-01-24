import { SIZE } from './constants';

class Debouncer {

    /**
     * FELADAT!
     * Hozd létre a statikus bound metódust.
     * @param num {number}
     * @param min {number}
     * @param max {number}
     * @returns {number} - válaszd ki a kisebbet a num és a max közül 
     * majd válaszd ki a nagyobbat az előbbi érték és a min közül.
     */

    static bound(num: number, min: number, max: number): number {
        const less = num > max ? max : num;
        return less > min ? less : min;
    }


    static debounce<T extends Function>(fun: T, wait: number) {
        let id: any;
        return (...args: any[]) => {
            clearTimeout(id);
            id = setTimeout(() => fun(...args), wait);
        };
    }
}

class Utils extends Debouncer {

    static rand(min: number, max: number, reduce: number = SIZE): number {
        const num = Math.floor(Math.random() * (max - min)) + min;
        return num - (num % reduce);
    }

    static snap(num: number, point = SIZE): number {
        const bottom = num - (num % point);
        const top = bottom + point;

        return num - bottom <= top - num ? bottom : top;
    }

    /**
     * FELADAT!
     * Hozd létre a removeNode nevű metódust!
     * A metódus a kapott elemet eltávolítja a saját parentNode -jából.
     * @param el {Element} - egy DOM Element típus
     * @returns {void}
     */

    static removeNode(el: Element): void {
        el.parentElement.removeChild(el)
        return
    }

}

export default Utils;
