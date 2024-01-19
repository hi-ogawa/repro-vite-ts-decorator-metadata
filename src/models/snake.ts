import { Animal } from './animal';
import {JsonObject, JsonProperty} from "typescript-json-serializer";

@JsonObject({ constructorParams: [{}] })
export class Snake extends Animal {
    @JsonProperty() isPoisonous: boolean;

    constructor(args: { name: string | undefined; isPoisonous: boolean }) {
        super(args.name);
        this.isPoisonous = args.isPoisonous;
    }
}
