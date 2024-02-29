import {
  classModule,
  propsModule,
  styleModule,
  eventListenersModule,
  init,
} from "snabbdom";

const patch = init([
  classModule,
  propsModule,
  styleModule,
  eventListenersModule,
]);

export { patch };
