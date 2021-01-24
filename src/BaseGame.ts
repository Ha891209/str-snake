import IBaseGame from "./interface/IBaseGame";
import Level from "./Level";
import Piece from "./Piece";
import Utils from "./Utils";

export default abstract class BaseGame implements IBaseGame  {
    protected moving: boolean = false;

    protected paused: boolean = false;

    protected gridVisible: boolean = false;

    protected debugSpeed: number = 0;

    protected keyHeld: number = 0;

    protected noClip: boolean = false;


    
    protected head: Piece;
    
    protected tail: Piece;

    /** @default null */
    food: Piece | null;
    
    /** @default null */
    protected goldenApple: Piece | null;

    /** @default 0 */
    protected length: number;

    /** @default 0 */
    protected growth: number;

    /** @default 0 */
    protected score: number;

    /** @default null */
    protected currentLevel: Level | null;

    protected garden: HTMLDivElement;
    

    /**
     * @returns {number}
     * Egy random számot szorozz meg a this.level.length -el, 
     * majd kerekítsd lefelé, ez lesz az index.
     * Majd térj vissza a this.levels tömbnek ezzel az indexével.
     */
    abstract getRandomLevel(): Level;

    /**
     * @returns {boolean}
     * 1. hozz létre egy chance neű változót 5 értékkel
     * 2. hozz létre egy pick nevű változót, értéke random szám szorozva 100 -al
     * 3. térj vissza true értékkel, ha a pick kisebb int a chance
     */
    abstract mayIHaveGoldenApple(): boolean;

    /**
     * @returns {void}
     * A metódus feladatai:
     * 1. keresd meg a DOM -ban az összes .vertical-grid és .horizontal-grid 
     * elemet
     * 2. mentsd el őket egy grids nevű változóba
     * 3. járd be a tömböt, és minden elemére hívd meg a Utils.removeNode 
     * metódust, hogy eltávolítsd őket az oldalról
     * 4. a this.gridVisible értékét állítsd false -ra
     */
    abstract removeGrid (): void;
}