
class TokenService {
    token_name:string;
    constructor(tokenName:string) {
        this.token_name = tokenName;
    }

    getToken() {
        return localStorage.getItem('token');
    }
    setToken(token: string) {
        localStorage.setItem(this.token_name,token);
    }
    clearToken() {
        localStorage.setItem(this.token_name,"");
    }
}

export const tokenService = new TokenService('token');