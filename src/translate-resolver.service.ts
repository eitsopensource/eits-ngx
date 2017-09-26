import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { TranslateService } from './translate.service';
import { Inject, Injectable, InjectionToken } from '@angular/core';

export let BUNDLE_PATH = new InjectionToken<string>('bundle.path');

@Injectable()
export class TranslateResolverService implements Resolve<void> {

    constructor(@Inject(BUNDLE_PATH) private bundlePath: string) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<void> | Promise<void> | void {
        return TranslateService.loadBundle(this.bundlePath);
    }
}