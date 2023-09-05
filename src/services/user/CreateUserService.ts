interface UserRequest{
    name: String,
    email: String,
    password: String,
}

class CreateUserService{
    async execute({name, email, password}: UserRequest){
        console.log(name, email)
        return({ name: name, email: email })
    }
}

export { CreateUserService }