import * as __wbg_star0 from './snippets/breakout-7791c79d1a38e4a2/index.js';

let wasm;

const cachedTextDecoder = (typeof TextDecoder !== 'undefined' ? new TextDecoder('utf-8', { ignoreBOM: true, fatal: true }) : { decode: () => { throw Error('TextDecoder not available') } } );

if (typeof TextDecoder !== 'undefined') { cachedTextDecoder.decode(); };

let cachedUint8Memory0 = null;

function getUint8Memory0() {
    if (cachedUint8Memory0 === null || cachedUint8Memory0.byteLength === 0) {
        cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}

const heap = new Array(128).fill(undefined);

heap.push(undefined, null, true, false);

let heap_next = heap.length;

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    heap[idx] = obj;
    return idx;
}

function getObject(idx) { return heap[idx]; }

function dropObject(idx) {
    if (idx < 132) return;
    heap[idx] = heap_next;
    heap_next = idx;
}

function takeObject(idx) {
    const ret = getObject(idx);
    dropObject(idx);
    return ret;
}

function _assertClass(instance, klass) {
    if (!(instance instanceof klass)) {
        throw new Error(`expected instance of ${klass.name}`);
    }
    return instance.ptr;
}

let cachedInt32Memory0 = null;

function getInt32Memory0() {
    if (cachedInt32Memory0 === null || cachedInt32Memory0.byteLength === 0) {
        cachedInt32Memory0 = new Int32Array(wasm.memory.buffer);
    }
    return cachedInt32Memory0;
}

let cachedUint32Memory0 = null;

function getUint32Memory0() {
    if (cachedUint32Memory0 === null || cachedUint32Memory0.byteLength === 0) {
        cachedUint32Memory0 = new Uint32Array(wasm.memory.buffer);
    }
    return cachedUint32Memory0;
}

function getArrayJsValueFromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    const mem = getUint32Memory0();
    const slice = mem.subarray(ptr / 4, ptr / 4 + len);
    const result = [];
    for (let i = 0; i < slice.length; i++) {
        result.push(takeObject(slice[i]));
    }
    return result;
}

let WASM_VECTOR_LEN = 0;

function passArrayJsValueToWasm0(array, malloc) {
    const ptr = malloc(array.length * 4, 4) >>> 0;
    const mem = getUint32Memory0();
    for (let i = 0; i < array.length; i++) {
        mem[ptr / 4 + i] = addHeapObject(array[i]);
    }
    WASM_VECTOR_LEN = array.length;
    return ptr;
}
/**
* @returns {number}
*/
export function example_random_range_usage() {
    const ret = wasm.example_random_range_usage();
    return ret;
}

const BallFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_ball_free(ptr >>> 0));
/**
*/
export class Ball {

    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(Ball.prototype);
        obj.__wbg_ptr = ptr;
        BallFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        BallFinalization.unregister(this);
        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_ball_free(ptr);
    }
    /**
    */
    constructor() {
        const ret = wasm.ball_new();
        this.__wbg_ptr = ret >>> 0;
        return this;
    }
    /**
    */
    reset() {
        wasm.ball_reset(this.__wbg_ptr);
    }
    /**
    * @param {Paddle} paddle
    * @param {Grid} grid
    * @returns {UpdateResult}
    */
    update(paddle, grid) {
        _assertClass(paddle, Paddle);
        _assertClass(grid, Grid);
        const ret = wasm.ball_update(this.__wbg_ptr, paddle.__wbg_ptr, grid.__wbg_ptr);
        return UpdateResult.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    get x() {
        const ret = wasm.__wbg_get_updateresult_score_delta(this.__wbg_ptr);
        return ret;
    }
    /**
    * @param {number} x
    */
    set x(x) {
        wasm.__wbg_set_updateresult_score_delta(this.__wbg_ptr, x);
    }
    /**
    * @returns {number}
    */
    get y() {
        const ret = wasm.__wbg_get_updateresult_lives_delta(this.__wbg_ptr);
        return ret;
    }
    /**
    * @param {number} y
    */
    set y(y) {
        wasm.__wbg_set_updateresult_lives_delta(this.__wbg_ptr, y);
    }
    /**
    * @returns {number}
    */
    get dx() {
        const ret = wasm.ball_dx(this.__wbg_ptr);
        return ret;
    }
    /**
    * @param {number} dx
    */
    set dx(dx) {
        wasm.ball_set_dx(this.__wbg_ptr, dx);
    }
    /**
    * @returns {number}
    */
    get dy() {
        const ret = wasm.ball_dy(this.__wbg_ptr);
        return ret;
    }
    /**
    * @param {number} dy
    */
    set dy(dy) {
        wasm.ball_set_dy(this.__wbg_ptr, dy);
    }
}

const BreakoutFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_breakout_free(ptr >>> 0));
/**
*/
export class Breakout {

    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        BreakoutFinalization.unregister(this);
        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_breakout_free(ptr);
    }
    /**
    */
    constructor() {
        const ret = wasm.breakout_new();
        this.__wbg_ptr = ret >>> 0;
        return this;
    }
    /**
    */
    new_game() {
        wasm.breakout_new_game(this.__wbg_ptr);
    }
    /**
    * @returns {boolean}
    */
    update() {
        const ret = wasm.breakout_update(this.__wbg_ptr);
        return ret !== 0;
    }
    /**
    * @returns {Paddle}
    */
    get paddle() {
        const ret = wasm.breakout_paddle(this.__wbg_ptr);
        return Paddle.__wrap(ret);
    }
    /**
    * @param {number} x
    * @param {number} y
    */
    set_paddle_xy(x, y) {
        wasm.breakout_set_paddle_xy(this.__wbg_ptr, x, y);
    }
    /**
    * @param {Paddle} paddle
    */
    set paddle(paddle) {
        _assertClass(paddle, Paddle);
        wasm.breakout_set_paddle(this.__wbg_ptr, paddle.__wbg_ptr);
    }
    /**
    * @returns {Ball}
    */
    get ball() {
        const ret = wasm.breakout_ball(this.__wbg_ptr);
        return Ball.__wrap(ret);
    }
    /**
    * @param {Ball} ball
    */
    set ball(ball) {
        _assertClass(ball, Ball);
        var ptr0 = ball.__destroy_into_raw();
        wasm.breakout_set_ball(this.__wbg_ptr, ptr0);
    }
    /**
    * @returns {number}
    */
    get score() {
        const ret = wasm.breakout_score(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} score
    */
    set score(score) {
        wasm.breakout_set_score(this.__wbg_ptr, score);
    }
    /**
    * @returns {number}
    */
    get lives() {
        const ret = wasm.breakout_lives(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} lives
    */
    set lives(lives) {
        wasm.breakout_set_lives(this.__wbg_ptr, lives);
    }
    /**
    * @returns {Grid}
    */
    get grid() {
        const ret = wasm.breakout_grid(this.__wbg_ptr);
        return Grid.__wrap(ret);
    }
    /**
    * @param {Grid} grid
    */
    set grid(grid) {
        _assertClass(grid, Grid);
        var ptr0 = grid.__destroy_into_raw();
        wasm.breakout_set_grid(this.__wbg_ptr, ptr0);
    }
}

const ColorFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_color_free(ptr >>> 0));
/**
*/
export class Color {

    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(Color.prototype);
        obj.__wbg_ptr = ptr;
        ColorFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }

    static __unwrap(jsValue) {
        if (!(jsValue instanceof Color)) {
            return 0;
        }
        return jsValue.__destroy_into_raw();
    }

    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        ColorFinalization.unregister(this);
        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_color_free(ptr);
    }
    /**
    * @returns {number}
    */
    get r() {
        const ret = wasm.__wbg_get_color_r(this.__wbg_ptr);
        return ret;
    }
    /**
    * @param {number} arg0
    */
    set r(arg0) {
        wasm.__wbg_set_color_r(this.__wbg_ptr, arg0);
    }
    /**
    * @returns {number}
    */
    get g() {
        const ret = wasm.__wbg_get_color_g(this.__wbg_ptr);
        return ret;
    }
    /**
    * @param {number} arg0
    */
    set g(arg0) {
        wasm.__wbg_set_color_g(this.__wbg_ptr, arg0);
    }
    /**
    * @returns {number}
    */
    get b() {
        const ret = wasm.__wbg_get_color_b(this.__wbg_ptr);
        return ret;
    }
    /**
    * @param {number} arg0
    */
    set b(arg0) {
        wasm.__wbg_set_color_b(this.__wbg_ptr, arg0);
    }
    /**
    * @param {number} r
    * @param {number} g
    * @param {number} b
    */
    constructor(r, g, b) {
        const ret = wasm.color_new(r, g, b);
        this.__wbg_ptr = ret >>> 0;
        return this;
    }
}

const GridFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_grid_free(ptr >>> 0));
/**
*/
export class Grid {

    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(Grid.prototype);
        obj.__wbg_ptr = ptr;
        GridFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        GridFinalization.unregister(this);
        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_grid_free(ptr);
    }
    /**
    */
    constructor() {
        const ret = wasm.grid_new();
        this.__wbg_ptr = ret >>> 0;
        return this;
    }
    /**
    */
    fill_rand() {
        wasm.grid_fill_rand(this.__wbg_ptr);
    }
    /**
    * @returns {boolean}
    */
    is_empty() {
        const ret = wasm.grid_is_empty(this.__wbg_ptr);
        return ret !== 0;
    }
    /**
    * @param {number} index
    * @returns {number}
    */
    get_block_color_type(index) {
        const ret = wasm.grid_get_block_color_type(this.__wbg_ptr, index);
        return ret >>> 0;
    }
    /**
    * @param {number} index
    * @param {number} color_type
    */
    set_block_color_type(index, color_type) {
        wasm.grid_set_block_color_type(this.__wbg_ptr, index, color_type);
    }
    /**
    * @returns {(Color)[]}
    */
    get colors() {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.grid_colors(retptr, this.__wbg_ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v1 = getArrayJsValueFromWasm0(r0, r1).slice();
            wasm.__wbindgen_free(r0, r1 * 4, 4);
            return v1;
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * @param {(Color)[]} colors
    */
    set colors(colors) {
        const ptr0 = passArrayJsValueToWasm0(colors, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.grid_set_colors(this.__wbg_ptr, ptr0, len0);
    }
    /**
    * @param {number} col
    * @param {number} row
    * @returns {number}
    */
    index(col, row) {
        const ret = wasm.grid_index(this.__wbg_ptr, col, row);
        return ret >>> 0;
    }
}

const PaddleFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_paddle_free(ptr >>> 0));
/**
*/
export class Paddle {

    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(Paddle.prototype);
        obj.__wbg_ptr = ptr;
        PaddleFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        PaddleFinalization.unregister(this);
        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_paddle_free(ptr);
    }
    /**
    * @param {number} xpos
    * @param {number} ypos
    * @param {Color} color
    */
    constructor(xpos, ypos, color) {
        _assertClass(color, Color);
        var ptr0 = color.__destroy_into_raw();
        const ret = wasm.paddle_new(xpos, ypos, ptr0);
        this.__wbg_ptr = ret >>> 0;
        return this;
    }
    /**
    */
    move_left() {
        wasm.paddle_move_left(this.__wbg_ptr);
    }
    /**
    */
    move_right() {
        wasm.paddle_move_right(this.__wbg_ptr);
    }
    /**
    * @returns {number}
    */
    get x() {
        const ret = wasm.__wbg_get_updateresult_score_delta(this.__wbg_ptr);
        return ret;
    }
    /**
    * @param {number} x
    */
    set x(x) {
        wasm.__wbg_set_updateresult_score_delta(this.__wbg_ptr, x);
    }
    /**
    * @returns {number}
    */
    get y() {
        const ret = wasm.__wbg_get_updateresult_lives_delta(this.__wbg_ptr);
        return ret;
    }
    /**
    * @param {number} y
    */
    set y(y) {
        wasm.__wbg_set_updateresult_lives_delta(this.__wbg_ptr, y);
    }
    /**
    * @returns {Color}
    */
    get color() {
        const ret = wasm.paddle_color(this.__wbg_ptr);
        return Color.__wrap(ret);
    }
    /**
    * @param {Color} color
    */
    set color(color) {
        _assertClass(color, Color);
        var ptr0 = color.__destroy_into_raw();
        wasm.paddle_set_color(this.__wbg_ptr, ptr0);
    }
}

const UpdateResultFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_updateresult_free(ptr >>> 0));
/**
*/
export class UpdateResult {

    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(UpdateResult.prototype);
        obj.__wbg_ptr = ptr;
        UpdateResultFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        UpdateResultFinalization.unregister(this);
        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_updateresult_free(ptr);
    }
    /**
    * @returns {number}
    */
    get score_delta() {
        const ret = wasm.__wbg_get_updateresult_score_delta(this.__wbg_ptr);
        return ret;
    }
    /**
    * @param {number} arg0
    */
    set score_delta(arg0) {
        wasm.__wbg_set_updateresult_score_delta(this.__wbg_ptr, arg0);
    }
    /**
    * @returns {number}
    */
    get lives_delta() {
        const ret = wasm.__wbg_get_updateresult_lives_delta(this.__wbg_ptr);
        return ret;
    }
    /**
    * @param {number} arg0
    */
    set lives_delta(arg0) {
        wasm.__wbg_set_updateresult_lives_delta(this.__wbg_ptr, arg0);
    }
}

async function __wbg_load(module, imports) {
    if (typeof Response === 'function' && module instanceof Response) {
        if (typeof WebAssembly.instantiateStreaming === 'function') {
            try {
                return await WebAssembly.instantiateStreaming(module, imports);

            } catch (e) {
                if (module.headers.get('Content-Type') != 'application/wasm') {
                    console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);

                } else {
                    throw e;
                }
            }
        }

        const bytes = await module.arrayBuffer();
        return await WebAssembly.instantiate(bytes, imports);

    } else {
        const instance = await WebAssembly.instantiate(module, imports);

        if (instance instanceof WebAssembly.Instance) {
            return { instance, module };

        } else {
            return instance;
        }
    }
}

function __wbg_get_imports() {
    const imports = {};
    imports.wbg = {};
    imports.wbg.__wbg_color_new = function(arg0) {
        const ret = Color.__wrap(arg0);
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_color_unwrap = function(arg0) {
        const ret = Color.__unwrap(takeObject(arg0));
        return ret;
    };
    imports.wbg.__wbindgen_throw = function(arg0, arg1) {
        throw new Error(getStringFromWasm0(arg0, arg1));
    };
    imports['./snippets/breakout-7791c79d1a38e4a2/index.js'] = __wbg_star0;

    return imports;
}

function __wbg_init_memory(imports, maybe_memory) {

}

function __wbg_finalize_init(instance, module) {
    wasm = instance.exports;
    __wbg_init.__wbindgen_wasm_module = module;
    cachedInt32Memory0 = null;
    cachedUint32Memory0 = null;
    cachedUint8Memory0 = null;


    return wasm;
}

function initSync(module) {
    if (wasm !== undefined) return wasm;

    const imports = __wbg_get_imports();

    __wbg_init_memory(imports);

    if (!(module instanceof WebAssembly.Module)) {
        module = new WebAssembly.Module(module);
    }

    const instance = new WebAssembly.Instance(module, imports);

    return __wbg_finalize_init(instance, module);
}

async function __wbg_init(input) {
    if (wasm !== undefined) return wasm;

    if (typeof input === 'undefined') {
        input = new URL('breakout_bg.wasm', import.meta.url);
    }
    const imports = __wbg_get_imports();

    if (typeof input === 'string' || (typeof Request === 'function' && input instanceof Request) || (typeof URL === 'function' && input instanceof URL)) {
        input = fetch(input);
    }

    __wbg_init_memory(imports);

    const { instance, module } = await __wbg_load(await input, imports);

    return __wbg_finalize_init(instance, module);
}

export { initSync }
export default __wbg_init;
