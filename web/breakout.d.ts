/* tslint:disable */
/* eslint-disable */
/**
* @returns {number}
*/
export function example_random_range_usage(): number;
/**
*/
export class Ball {
  free(): void;
/**
*/
  constructor();
/**
*/
  reset(): void;
/**
* @param {Paddle} paddle
* @param {Grid} grid
* @returns {UpdateResult}
*/
  update(paddle: Paddle, grid: Grid): UpdateResult;
/**
*/
  dx: number;
/**
*/
  dy: number;
/**
*/
  x: number;
/**
*/
  y: number;
}
/**
*/
export class Breakout {
  free(): void;
/**
*/
  constructor();
/**
*/
  new_game(): void;
/**
* @returns {boolean}
*/
  update(): boolean;
/**
* @param {number} x
* @param {number} y
*/
  set_paddle_xy(x: number, y: number): void;
/**
*/
  ball: Ball;
/**
*/
  grid: Grid;
/**
*/
  lives: number;
/**
*/
  paddle: Paddle;
/**
*/
  score: number;
}
/**
*/
export class Color {
  free(): void;
/**
* @param {number} r
* @param {number} g
* @param {number} b
*/
  constructor(r: number, g: number, b: number);
/**
*/
  b: number;
/**
*/
  g: number;
/**
*/
  r: number;
}
/**
*/
export class Grid {
  free(): void;
/**
*/
  constructor();
/**
*/
  fill_rand(): void;
/**
* @returns {boolean}
*/
  is_empty(): boolean;
/**
* @param {number} index
* @returns {number}
*/
  get_block_color_type(index: number): number;
/**
* @param {number} index
* @param {number} color_type
*/
  set_block_color_type(index: number, color_type: number): void;
/**
* @param {number} col
* @param {number} row
* @returns {number}
*/
  index(col: number, row: number): number;
/**
*/
  colors: (Color)[];
}
/**
*/
export class Paddle {
  free(): void;
/**
* @param {number} xpos
* @param {number} ypos
* @param {Color} color
*/
  constructor(xpos: number, ypos: number, color: Color);
/**
*/
  move_left(): void;
/**
*/
  move_right(): void;
/**
*/
  color: Color;
/**
*/
  x: number;
/**
*/
  y: number;
}
/**
*/
export class UpdateResult {
  free(): void;
/**
*/
  lives_delta: number;
/**
*/
  score_delta: number;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_color_free: (a: number) => void;
  readonly __wbg_get_color_r: (a: number) => number;
  readonly __wbg_set_color_r: (a: number, b: number) => void;
  readonly __wbg_get_color_g: (a: number) => number;
  readonly __wbg_set_color_g: (a: number, b: number) => void;
  readonly __wbg_get_color_b: (a: number) => number;
  readonly __wbg_set_color_b: (a: number, b: number) => void;
  readonly color_new: (a: number, b: number, c: number) => number;
  readonly __wbg_paddle_free: (a: number) => void;
  readonly paddle_new: (a: number, b: number, c: number) => number;
  readonly paddle_move_left: (a: number) => void;
  readonly paddle_move_right: (a: number) => void;
  readonly paddle_color: (a: number) => number;
  readonly paddle_set_color: (a: number, b: number) => void;
  readonly __wbg_grid_free: (a: number) => void;
  readonly grid_new: () => number;
  readonly grid_fill_rand: (a: number) => void;
  readonly grid_is_empty: (a: number) => number;
  readonly grid_get_block_color_type: (a: number, b: number) => number;
  readonly grid_set_block_color_type: (a: number, b: number, c: number) => void;
  readonly grid_colors: (a: number, b: number) => void;
  readonly grid_set_colors: (a: number, b: number, c: number) => void;
  readonly grid_index: (a: number, b: number, c: number) => number;
  readonly __wbg_ball_free: (a: number) => void;
  readonly ball_new: () => number;
  readonly ball_reset: (a: number) => void;
  readonly ball_update: (a: number, b: number, c: number) => number;
  readonly ball_dx: (a: number) => number;
  readonly ball_set_dx: (a: number, b: number) => void;
  readonly ball_dy: (a: number) => number;
  readonly ball_set_dy: (a: number, b: number) => void;
  readonly __wbg_updateresult_free: (a: number) => void;
  readonly __wbg_get_updateresult_score_delta: (a: number) => number;
  readonly __wbg_set_updateresult_score_delta: (a: number, b: number) => void;
  readonly __wbg_get_updateresult_lives_delta: (a: number) => number;
  readonly __wbg_set_updateresult_lives_delta: (a: number, b: number) => void;
  readonly __wbg_breakout_free: (a: number) => void;
  readonly breakout_new: () => number;
  readonly breakout_new_game: (a: number) => void;
  readonly breakout_update: (a: number) => number;
  readonly breakout_paddle: (a: number) => number;
  readonly breakout_set_paddle_xy: (a: number, b: number, c: number) => void;
  readonly breakout_set_paddle: (a: number, b: number) => void;
  readonly breakout_ball: (a: number) => number;
  readonly breakout_set_ball: (a: number, b: number) => void;
  readonly breakout_score: (a: number) => number;
  readonly breakout_set_score: (a: number, b: number) => void;
  readonly breakout_lives: (a: number) => number;
  readonly breakout_set_lives: (a: number, b: number) => void;
  readonly breakout_grid: (a: number) => number;
  readonly breakout_set_grid: (a: number, b: number) => void;
  readonly example_random_range_usage: () => number;
  readonly paddle_set_x: (a: number, b: number) => void;
  readonly paddle_set_y: (a: number, b: number) => void;
  readonly ball_set_x: (a: number, b: number) => void;
  readonly ball_set_y: (a: number, b: number) => void;
  readonly paddle_x: (a: number) => number;
  readonly paddle_y: (a: number) => number;
  readonly ball_x: (a: number) => number;
  readonly ball_y: (a: number) => number;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly __wbindgen_free: (a: number, b: number, c: number) => void;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {SyncInitInput} module
*
* @returns {InitOutput}
*/
export function initSync(module: SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
