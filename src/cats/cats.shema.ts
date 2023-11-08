import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type CatsDocument = Cats & Document;

@Schema()
export class Cats {
    @Prop({ type: String, required: true })
    name: string;

    @Prop({ type: Number, required: true })
    age: number;

    @Prop({ type: String, required: true })
    breed: string;
}

export const CatsSchema = SchemaFactory.createForClass(Cats);


