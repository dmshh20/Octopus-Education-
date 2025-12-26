import { IsNumber } from "class-validator";

export class buySet {
    @IsNumber()
    score: number
}