export class HTTPError extends Error{
    constructor(errorCode,message ) {
        super(message)
        this.code = errorCode
    }
}