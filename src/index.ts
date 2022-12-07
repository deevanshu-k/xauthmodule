import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export class auth {
    secrect_key: string = '';
    signupfnx: Function = new Function;
    expireIn: string = "15m";

    constructor(secretValue: string, signupFunction: Function) {
        this.secrect_key = secretValue;
        this.signupfnx = signupFunction;
    }

    signUp = async (email: string, password: string): Promise<signupInterface> => {
        this.signupfnx();
        let token = this.createToken(Date.now(), email)
        return {
            token
        };
    }

    calculateHash = async (password: string): Promise<string> => {
        let salt = await bcrypt.genSalt(10);
        let hash = await bcrypt.hash(password, salt);
        return hash;
    }

    createToken = (id: string | number, email: string, username: string = undefined) => {
        return jwt.sign({ id, email, username }, this.secrect_key, {
            expiresIn: this.expireIn
        });
    };
}