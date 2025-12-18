import { IsNumber, IsString } from "class-validator";

export class completedScoreDto {
    @IsNumber()
    score: number

    @IsString()
    setName: string
}