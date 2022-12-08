export declare class auth {
    secrect_key: string;
    expireIn: string;
    constructor(secretValue: string);
    signUp: (signupfnx: Function) => Promise<signupInterface>;
    calculateHash: (password: string) => Promise<string>;
    createToken: (id: string | number, email: string, username?: string) => string;
}
