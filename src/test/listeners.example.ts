import { CollectionShape } from "@typedly/collection";
import { ListenerFunction, ListenersShape } from "../lib";
import { AsyncReturn } from "@typedly/data";

export class Listeners<
  G extends any[],
  L extends ListenerFunction<G> = ListenerFunction<G>,
  T = Set<L>,
  R extends boolean = false
> implements ListenersShape<G, L, T, R> {
  add(...items: L[]): AsyncReturn<R, this> {
    return this as unknown as AsyncReturn<R, this>;
  }
  once(...listener: L[]): AsyncReturn<R, this> {
    return this as unknown as AsyncReturn<R, this>;
  }
  snapshot(): AsyncReturn<L[], R> {
    return [] as unknown as AsyncReturn<L[], R>;
  }
  delete(...items: L[]): AsyncReturn<R, boolean> {
    return false as unknown as AsyncReturn<R, boolean>;
  }
  has(...item: L[]): AsyncReturn<R, boolean> {
    return false as unknown as AsyncReturn<R, boolean>;
  }
  forEach(callbackfn: (element: L, element2: L, collection: CollectionShape<L, T, R>) => void, thisArg?: any): AsyncReturn<R, this> {
    return this as unknown as AsyncReturn<R, this>;
  }
  get size(): number {
    return 0;
  }
  clear(): AsyncReturn<R, this> {
    return undefined as unknown as AsyncReturn<R, this>;
  }
  destroy(): AsyncReturn<R, this> {
    return this as unknown as AsyncReturn<R, this>;
  }
  get value(): T {
    return new Set<L>() as unknown as T;
  }
  lock(): this {
    return this;
  }
  set(value: T): AsyncReturn<R, this> {
    return this as unknown as AsyncReturn<R, this>;
  }
}