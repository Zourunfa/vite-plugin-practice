/// <reference types="vite/client" />

import Module from "module";

interface ImportMeta{
    globNext<T>(glob:string):Promise<()=>Promise<T>>[]
}
