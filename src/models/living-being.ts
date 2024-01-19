import {JsonObject, JsonProperty} from "typescript-json-serializer";

@JsonObject()
export class LivingBeing {
    /**
     * The living being id
     */
    @JsonProperty()
    id: number;
}
