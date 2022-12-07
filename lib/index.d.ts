export declare class auth {
    secrect_key: string;
    signupfnx: Function;
    expireIn: string;
    constructor(secretValue: string, signupFunction: Function);
    signUp: (email: string, password: string) => Promise<signupInterface>;
    calculateHash: (password: string) => Promise<string>;
    createToken: (id: string | number, email: string, username?: string) => string;
}
