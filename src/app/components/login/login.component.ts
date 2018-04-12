import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { OAuthService } from "angular-oauth2-oidc";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
    userName: string;
    password: string;
    loginFailed: boolean = false;

    constructor(private oauthService: OAuthService, private router: Router) {
        let token = sessionStorage.getItem('access_token')
        console.log('token', token)
        if (token) {
            console.log('ok')
            this.router.navigate(['ilumno'])
        }
    }

    login() {
        this.oauthService.clientId = "dcLhjkWp0_16g02FIdl98Hg05XUa";
        this.oauthService.initImplicitFlow();
    }

    logout() {
        this.oauthService.logOut();
    }

    get givenName() {
        var claims = this.oauthService.getIdentityClaims();
        if (!claims) return null;
        return claims['given_name'];
    }

    ngOnInit() {
    }

}
