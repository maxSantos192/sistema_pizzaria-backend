import prismaClient from '../../prisma'

class DetailUserServices{
    async execute(){
        return { ok: true}
    }
}

export { DetailUserServices }