import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from './translate.pipe';
import { TranslateResolverService } from './translate-resolver.service';
import { Routes } from '@angular/router';

export * from './translate';
export * from './translate-resolver.service';
export * from './translate.pipe';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        TranslatePipe
    ],
    exports: [
        TranslatePipe
    ]
})
export class EitsNgxModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: EitsNgxModule,
            providers: [TranslateResolverService]
        };
    }

    static wrapRoutes(routes: Routes): Routes {
        return routes.map(route => Object.assign({ resolve: { bundle: TranslateResolverService } }, route));
    }
}
