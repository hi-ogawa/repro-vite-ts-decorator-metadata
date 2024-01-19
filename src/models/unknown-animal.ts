import { Animal } from './animal';
import {JsonObject} from "typescript-json-serializer";

@JsonObject()
export class UnknownAnimal extends Animal {
    constructor(name: string) {
        super(name);
    }
}
