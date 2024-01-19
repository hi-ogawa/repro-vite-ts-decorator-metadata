import { Animal } from './animal';
import {JsonObject, JsonProperty} from "typescript-json-serializer";

@JsonObject()
export class Panther extends Animal {
    @JsonProperty() color: string;

    constructor(name: string | undefined, @JsonProperty() public isSpeckled: boolean) {
        super(name);
    }
}
