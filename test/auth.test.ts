import {auth} from "../src"
 
describe("Auth Class",() => {
    it("should have correct variables", () => {
        let Auth = new auth("SECRET_KEY");

        expect(Auth.secrect_key).toEqual("SECRET_KEY");
        expect(Auth.expireIn).toEqual("15m");
        Auth.expireIn = "6000";
        expect(Auth.expireIn).toEqual("6000");
    });
    it("should have calculateHash fnx", async () => {
        let Auth = new auth("SECRET_KEY");
        let hash = await Auth.calculateHash("pwd");
        
        expect(typeof hash).toEqual("string");
    });

    it("should have createToken fnx", () => {
        let Auth = new auth("SECRET_KEY");
        let token = Auth.createToken(Date.now(),"");
        
        expect(typeof token).toEqual("string");
    });
});