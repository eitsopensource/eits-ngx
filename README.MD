# Translate

## Como Configurar

* No arquivo `routing.module.ts`, adicione os seguintes imports:

```typescript
import { BUNDLE_PATH, TranslateResolverService, EitsNgxModule } from 'eits-ngx';
```

* Na definição das rotas, envolva o array de rotas com `EitsNgxModule.wrapRoutes()`:

Antes:
```typescript
const routes: Routes = [
    ...
];
```

Depois:
```typescript
const routes: Routes = EitsNgxModule.wrapRoutes([
    ...
]);
```

* Na definição do `RoutingModule`, na anotação `@NgModule`, adicione a dependência no `EitsNgxModule`
 e a chave `providers` conforme o exemplo:
```typescript
@NgModule({
  imports: [
      routing,
      EitsNgxModule.forRoot()
  ],
  declarations: [],
  providers: [
    TranslateResolverService,
    { provide: BUNDLE_PATH, useValue: '/<microserviço>/bundles' }
  ],
  exports: [RouterModule]
})
export class RoutingModule {

}
```
* Remova a configuração do ngx-translate, a sua linha na chave `imports`, e os `imports` no início do arquivo, além de
removê-lo do package.json.

### Nos Componentes

* Remova as declarações de `private TranslateService` nos construtores.


## Uso

* No HTML: utilize o pipe `translate`. Na maioria dos casos não será necessário alterar o HTML.
* Nos componentes:
    * Adicione o import do helper de tradução: `import { translate } from 'eits-ngx';`
    * Utilize a tradução chamando a função: `translate(key)`
