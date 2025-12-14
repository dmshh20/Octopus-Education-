import { IsNumber, IsString, IsUrl } from "class-validator";

export class completedScoreDto {
    @IsNumber()
    score: number

    @IsString()
    url: string

    @IsString()
    setName: string
}