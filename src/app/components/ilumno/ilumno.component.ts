import { Component, OnInit } from '@angular/core';
import { APP_CONFIG, IAppConfig } from '../../app.config';
import { IlumnoService } from "./ilumno.service";
import { OAuthService  } from 'angular-oauth2-oidc';

@Component({
    selector: 'app-ilumno',
    templateUrl: 'ilumno.component.html',
    providers: [IlumnoService]
})
export class IlumnoComponent implements OnInit {
    url:string
    loginFailed: boolean = false;
    userProfile: object;

    constructor(private is:IlumnoService,private oauthService: OAuthService) {
        console.log('ok2')
      //  this.url= is.gerURL()
       // console.log(this.url)
       // this.oauthService.configure(authConfig);
        //this.oauthService.loadDiscoveryDocument();
     }

    ngOnInit() {

    }


    set requestAccessToken(value: boolean) {
        this.oauthService.requestAccessToken = value;
        localStorage.setItem('requestAccessToken', '' + value);
    }

    get requestAccessToken() {
        return this.oauthService.requestAccessToken;
    }

    get id_token() {
        return this.oauthService.getIdToken();
    }

    get access_token() {
        return this.oauthService.getAccessToken();
    }

    get id_token_expiration() {
        return this.oauthService.getIdTokenExpiration();
    }

    get givenName() {
        var claims = this.oauthService.getIdentityClaims();
        if (!claims) return null;
        return claims['given_name'];
    }

    get familyName() {
        var claims = this.oauthService.getIdentityClaims();
        if (!claims) return null;
        return claims['family_name'];
    }

    get access_token_expiration() {
        return this.oauthService.getAccessTokenExpiration();
    }

    loadUserProfile(): void {
        this
            .oauthService
            .loadUserProfile()
            .then(up => this.userProfile = up);

    }

    logout() {
      this.oauthService.logOut();
  }

    testSilentRefresh() {

        /*
         * Tweak config for implicit flow.
         * This is needed b/c this sample uses both flows
        */
        //this.oauthService.clientId = "spa-demo";
        this.oauthService.oidc = true;
      //  this.oauthService.setupAutomaticSilentRefresh();
       this
            .oauthService
            .silentRefresh()
            .then(info => console.log('pablo refresh ok', info))
            .catch(err => console.error('pablo refresh error', err));

    }

}
