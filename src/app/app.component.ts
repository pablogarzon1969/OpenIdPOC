import { Component } from '@angular/core';
import { OAuthService,AuthConfig, NullValidationHandler } from 'angular-oauth2-oidc';
import { JwksValidationHandler } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  public info: string = "Welt";

  constructor(private oauthService: OAuthService) {
    this.oauthService.loginUrl = "https://iam-qa.ilumno.com:9443/oauth2/authorize"; //QA
    // URL of the SPA to redirect the user to after login
    this.oauthService.redirectUri = window.location.origin + "/index.html";

    this.oauthService.silentRefreshRedirectUri = window.location.origin + "/silent-refresh.html";

    this.oauthService.clientId = "dcLhjkWp0_16g02FIdl98Hg05XUa"; // ILumno

    // set the scope for the permissions the client should request
    this.oauthService.scope = "openid";

    // set to true, to receive also an id_token via OpenId Connect (OIDC) in addition to the
    // OAuth2-based access_token
    this.oauthService.oidc = true;

    this.oauthService.setStorage(sessionStorage);

   // this.oauthService.tokenValidationHandler = null;

    this.oauthService.issuer = "https://iam-qa.ilumno.com:9443/oauth2/token";

    // Use setStorage to use sessionStorage or another implementation of the TS-type Storage
    // instead of localStorage

    //this.oauthService.silentRefreshTimeout = 10000;

    this.oauthService.logoutUrl = "https://iam-qa.ilumno.com:9443/oidc/logout"; // QA

    this.oauthService.events.subscribe(e => {
      console.debug('oauth/oidc event', e);
    });

    // This method just tries to parse the token(s) within the url when
    // the auth-server redirects the user back to the web-app
    // It dosn't send the user the the login page
    this.oauthService.tryLogin({});

    this
      .oauthService
      .events
      .filter(e => e.type == 'token_expires')
      .subscribe(e => {
        console.debug('received token_expires event', e);
        console.log('received token_expires event', e);
        this.oauthService.silentRefresh();
      });

    //  this.oauthService.setupAutomaticSilentRefresh();



    /*this
    .oauthService
    .events
    .filter(e => e.type == 'token_expires')
    .subscribe(e => {
        console.log('el token expiró')
        this.oauthService.silentRefresh()
        .then(info => console.debug('refresh ok', info))
        .catch(err => console.error('refresh error', err));
    });*/

    /*this
    .oauthService
    .silentRefresh()
    .then(info => console.log('refresh ok', info))
    .catch(err => console.log('refresh error', err));*/





  }


}
