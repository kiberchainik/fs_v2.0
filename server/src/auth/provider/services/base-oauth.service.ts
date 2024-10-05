import { BadRequestException, UnauthorizedException } from "@nestjs/common";
import { TBaseProviderOptions } from "./types/base-provider.options.types";
import { TUserInfo } from "./types/user-info.types";

export class BaseOAuthService {
    private BASE_URL: string

    constructor(private readonly options:TBaseProviderOptions) {}

    /**Extract user data from response */
    protected async extractUserInfo(data: any):Promise<TUserInfo> {
        return {
            ...data,
            provider: this.options.name
        }
    }

    getAuthUrl() {
        const query = new URLSearchParams({
            response_type: 'code',
            client_id: this.options.client_id,
            redirect_uri: this.getRedirectUrl(),
            scope:(this.options.scopes ?? []).join(' '),
            access_type: 'offline',
            prompt: 'select_account'
        })

        return `${this.options.authorize_url}?${query}`
    }

    async findUserByCode (code:string):Promise<TUserInfo> {
        const client_id = this.options.client_id
        const client_secret = this.options.client_secret

        const tokenQuery = new URLSearchParams({
            client_id,
            client_secret,
            code,
            redirect_uri: this.getRedirectUrl(),
            grant_type: 'authorization_code'
        })
        
        const tokenRequest = await fetch(this.options.access_url, {
            method:'POST',
            body: tokenQuery,
            headers: {
                'Content-Type':'application/x-www-form-urlencoded',
                Accept: 'application/json'
            }
        })
        
        if(!tokenRequest.ok) {
            throw new BadRequestException(`User ${this.options.profile_url} not found`)
        }
        
        const tokens = await tokenRequest.json()
        if(!tokens.access_token) {
            throw new BadRequestException(`Dont have tokens from ${this.options.access_url}`)
        }

        const userRequest = await fetch(this.options.profile_url, {
            headers: {
                Authorization: `Bearer ${tokens.access_token}`
            }
        })

        if(!userRequest.ok) {
            throw new UnauthorizedException (`User ${this.options.profile_url} unauthorized!`)
        }

        const user = await userRequest.json()
        const userData = await this.extractUserInfo(user)

        return {
            ...userData,
            access_token: tokens.access_token,
            refresh_token: tokens.refresh_token,
            expires_at: tokens.expires_at || tokens.expires_in,
            provider: this.options.name
        }
    }

    getRedirectUrl() {
        return `${this.BASE_URL}/api/auth/oauth/callback/${this.options.name}`
    }

    set baseUrl(val: string) {
        this.BASE_URL = val
    }

    get name () {
        return this.options.name
    }

    get access_url () {
        return this.options.access_url
    }

    get profile_url () {
        return this.options.profile_url
    }

    get scopes () {
        return this.options.scopes
    }
}