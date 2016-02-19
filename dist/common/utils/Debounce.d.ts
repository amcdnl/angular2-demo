/**
 * Stolen from: https://github.com/bvaughn/debounce-decorator
 */
/** Default debounce duration (in ms) */
export declare const DEFAULT_DEBOUNCE_DURATION: number;
/** Decorates a class method so that it is debounced by the specified duration */
export declare function debounce(duration: any): (target: any, key: any, descriptor: any) => {
    configurable: boolean;
    enumerable: any;
    get: () => any;
};
/** Debounces the specified function and returns a wrapper function */
export declare function debounceFn(method: any, duration?: number): (...args: any[]) => void;
