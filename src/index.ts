import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export class auth {
    secrect_key: string = '';
    expireIn: string = "15m";

    constructor(secretValue: string) {
        this.secrect_key = secretValue;
    }

    signUp = async (signupfnx: Function): Promise<signupInterface> => {
        let token:string = await signupfnx();
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