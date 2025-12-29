// Type.
import { AsyncReturn } from '@typedly/data';
import { ListenerFunction } from "../type";
// Interface.
import { CollectionShape } from '@typedly/collection';
/**
 * @description The shape of a Listeners collection.
 * @export
 * @interface ListenersShape
 * @template {any[]} G The arguments for listener functions.
 * @template {ListenerFunction<G>} [L=ListenerFunction<G>] The listener function type.
 * @template [T=Set<L>] The type of the data collection.
 * @template {boolean} [R=false] Whether the collection is asynchronous.
 * @extends {CollectionShape<L, T, R>}
 */
export interface ListenersShape<
  G extends any[],
  L extends ListenerFunction<G> = ListenerFunction<G>,
  T = Set<L>,
  R extends boolean = false
> extends CollectionShape<L, T, R> {
  /**
   * @description Add a listener that will be called only once.
   * @public
   * @abstract
   * @param {L} listener 
   * @returns {this} The Listeners instance.
   */
  once(...listener: L[]): AsyncReturn<R, this>;

  /**
   * @description Returns a snapshot of the current listeners in the collection.
   * @returns {AsyncReturn<R, L[]>} An array of listener functions.
   */
  snapshot(): AsyncReturn<R, L[]>;
}
