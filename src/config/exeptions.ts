
export default class ExeptionHandler extends Error {
    public code: number;
    constructor(message:string){
        super(message);
    }
    badRequest(){
        this.name = "BadRequest"
        this.code = 400;
        return this
    }
    unauthorized(){
        this.name = "Unauthorized"
        this.code = 401
        return this
    }
}