import { Injectable, Inject } from '@angular/core';
import { APP_CONFIG, IAppConfig } from '../../app.config';

@Injectable()
export class IlumnoService {
    
    constructor(@Inject(APP_CONFIG) private config: IAppConfig) {

     }

     public gerURL(){
         return this.config.urlIlumno
     }

}