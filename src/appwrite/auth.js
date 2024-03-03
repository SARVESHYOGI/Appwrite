import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";


export class AuthService {

    client = new Client()
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.account = new Account(this.client)
    }
    //signup
    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                return this.login({ email, password })
            }
            else {
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    //login
    async login({ email, password }) {
        try {
            await this.account.createEmailSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    //current user
    async getCurrentUser() {
        try {
            const user = await this.account.get();
            return user;
        } catch (error) {
            throw error;
        }
        return null;
    }

    //logout
    async logout() {
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            throw error;
        }

    }
}

const authService = new AuthService()


export default authService



// this type of expord done beacuse we can use this method directly to frontend by object extrating methods
// like authService.createAccount()