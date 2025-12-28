import { IsNumber, IsPositive } from "class-validator";

export class buySetDto {
    @IsNumber()
    @IsPositive()
    score: number

    @IsNumber()
    setId: number
}