import { Request, Response } from 'express'
import { DetailUserServices } from '../../services/user/DetailUserService'

class DetailUserController{
    async handle(req: Request, res: Response){
        const detailUserService = new DetailUserServices()

        const user = await detailUserService.execute()

        return res.json(user)
    }
}

export { DetailUserController }