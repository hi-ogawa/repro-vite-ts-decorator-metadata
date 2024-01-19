

import { Gender } from './gender';
import { LivingBeing } from './living-being';
import { Status } from './status';
import {JsonObject, JsonProperty} from "typescript-json-serializer";

@JsonObject()
export class Animal extends LivingBeing {
    @JsonProperty()
    name: string | undefined;
    @JsonProperty()
    birthDate: Date;
    @JsonProperty()
    numberOfPaws: number;
    @JsonProperty()
    gender: Gender;
    @JsonProperty('childrenIdentifiers')
    childrenIds: Array<number>;
    @JsonProperty()
    status: Status;

    constructor(name: string | undefined) {
        super();
        this.name = name;
    }
}
