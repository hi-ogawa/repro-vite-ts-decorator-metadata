import {JsonObject, JsonProperty} from "typescript-json-serializer";

@JsonObject()
export class Society {
    @JsonProperty({ required: true }) id = '4';
    @JsonProperty() name: string;
}
