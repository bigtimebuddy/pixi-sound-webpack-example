/// <reference types="pixi.js" />
declare module "@pixi/loaders" {
    export { Loader, LoaderResource, ILoaderPlugin } from "pixi.js";
    import { LoaderResource as ILoaderResource } from "pixi.js";
    export { ILoaderResource };
}