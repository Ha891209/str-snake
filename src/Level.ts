import Piece from './Piece';
import { SIZE } from './constants';
import level1 from './levels/level-1';

type coord = [number, number];
type line = coord[];
export type LevelMap = line[];

export default class Level {
  private pieces: Piece[] = [];

  garden: HTMLDivElement;

  constructor (private generatorFunction: (rows: number, cols: number) => LevelMap) {
    this.generatorFunction = generatorFunction;
    this.garden = (document.getElementById('garden') as HTMLDivElement);
  }

  /**
   * FELADAT!
   * Hozz létre egy metódust translate néven!
   * Visszatérési érték: mind a két kapott paramétert kerekítsd lefelé, 
   * majd szorozd meg egyenként a SIZE konstanssal.
   * @param x {number} - x koordináta
   * @param y {number} - y koordináta
   * @returns {coord} - egy [x, y] koordinátával tér vissza
   */
  translate(x: number, y: number): coord {
    return [Math.floor(x)*SIZE, Math.floor(y)*SIZE];
  }

  remove (): void {
    this.pieces.forEach(piece => {
      piece.remove();
    });
  }

  line (x0: number, y0: number, x1: number, y1: number): void {
    const dx = Math.abs(x1 - x0);
    const dy = Math.abs(y1 - y0);
    const sx = (x0 < x1) ? 1 : -1;
    const sy = (y0 < y1) ? 1 : -1;
    let err = dx - dy;

    // eslint-disable-next-line no-constant-condition
    while (true) {
      const [tx0, ty0] = this.translate(x0, y0);
      this.pieces.push(new Piece({ x: tx0, y: ty0, type: 'wall' }));

      // break when line is done
      if (Math.abs(x0 - x1) <= 0.5 && Math.abs(y0 - y1) <= 0.5) break;

      const e2 = 2 * err;

      if (e2 > -dy) {
        err -= dy;
        x0 += sx;
      }

      if (e2 < dx) {
        err += dx;
        y0 += sy;
      }
    }
  }

  /**
   * render method
   * @returns {void}
   */
  render (): void {
    /** 
     * FELADAT!
     * @var {number} cols - this.garden.clientHeight és SIZE hányadosa, 
     * lefelé kerekítve 
     */
    let cols = Math.floor(this.garden.clientHeight/SIZE);

    
    
    /** 
     * FELADAT!
     * @var {number} rows - this.garden.clientWidth és SIZE hányadosa, 
     * lefelé kerekítve 
     */
    let rows = Math.floor(this.garden.clientHeight/SIZE);

    
    
    /** 
     * FELADAT!
     * @var {LevelMap} level - this.generatorFunction által visszaadott érték, 
     * a rows és cols paraméterekkel
     */
    let level = this.generatorFunction(rows, cols);

    

    level.forEach(line => {
      const [x0, y0]: coord = line[0];

      /**
       * FELADAT!
       * Olvasd ki a fenti sorhoz hasonlóan az x1 és y1 koodrinátákat is, 
       * a line második eleméből!
       */
      level.forEach(line => {
        const [x1, y1]: coord = line[1];
      

      

      /**
       * FELADAT!
       * Hívd meg a this.line metódust és add neki át az x0, y0, x1, y1 
       * értékeket.
       */
      this.line(x0, y0, x1, y1);

    })

    })
  }
}
