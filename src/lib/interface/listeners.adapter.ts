// Type.
import { ListenerFunction } from "../type";
// Interface.
import { ListenersShape } from "./listeners.shape";
/**
 * @description The adapter interface for Listeners collection.
 * @export
 * @interface ListenersAdapter
 * @template {any[]} G The arguments of the listener functions.
 * @template {ListenerFunction<G>} L The listener function type.
 * @template T The type of the data collection.
 * @template {boolean} R Whether the collection is asynchronous.
 * @extends {ListenersShape<G, L, T, R>}
 */
export interface ListenersAdapter<
  G extends any[],
  L extends ListenerFunction<G>,
  T,
  R extends boolean
> extends ListenersShape<G, L, T, R> {
  version: string;
}
