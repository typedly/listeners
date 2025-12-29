/**
 * @description The listener function type.
 * @export
 * @template {any[]} T The type of arguments the listener function accepts.
 */
export type ListenerFunction<T extends any[]> = (...args: T) => void | Promise<void>;
