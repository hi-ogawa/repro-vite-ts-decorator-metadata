import { Gender } from './gender';
import { LivingBeing } from './living-being';
import {JsonObject, JsonProperty} from "typescript-json-serializer";

@JsonObject()
export class Human extends LivingBeing {
    constructor(
        // This comment works
        @JsonProperty() public name: string,
        @JsonProperty({ name: 'humanId', required: true }) public id: number,
        @JsonProperty() public gender: Gender,
        /** The birth date of the employee (readonly) */
        @JsonProperty() public readonly birthDate: Date
    ) {
        super();
    }
}
