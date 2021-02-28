import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { stringify } from "uuid";
import { AppError } from "../errors/AppError";
import { SurveysUsersRepository } from "../repositories/SurveysUsersRepository";


class AnswerController {

    /**
     * http://localhost:3333/answers/1?u=3201f56c-ac4e-489a-b6b3-247d0e588bba
     *  
     * Route Params => Parâmetros que compõe a rota
     * routes.get("/answers/:value")
     * 
     * Query Params => Buscam, paginação, não obrigatórios
     * ?
     * chave=valor
     *  
     */


    async execute(request: Request, response: Response) {
        const { value } = request.params
        const { u } = request.query

        const surveysUsersRepository = getCustomRepository(SurveysUsersRepository)

        const surveyUser = await surveysUsersRepository.findOne({
            id: String(u)
        })

        if (!surveyUser) {
            throw new AppError('Survey user does not exists!')
        }

        surveyUser.value = Number(value)

        await surveysUsersRepository.save(surveyUser)

        return response.json(surveyUser)
    }
}

export { AnswerController }