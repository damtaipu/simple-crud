# DGSys - Teste

Este projeto é um CRUD simples desenvolvido em [Angular CLI](https://github.com/angular/angular-cli), utilizando standalone components, apenas para efeito de teste. 

Apesar de conter apenas funcionalidades simples, está estruturado seguindo padrões de boas práticas para arquitetura de software. Foi implementado utilizando injeção de dependência entre o núcleo dos serviços e a camada de controller, seguindo o modelo Clean Architure.

## Banco de dados
Para o projeto foi utilizada a ferrmenta gratuíta AirTable. AirTable uma ferramenta online com interface semelhante a uma planilha que qualquer pessoa pode usar, é possível realizar colaboração em tempo real e, entre os diversos recursos, é possível utilizar a API oficial da AirTable para consumir as tabelas criadas em seu workspace. Para saber mais sobre a clica aqui >> [AirTable](https://github.com/angular/angular-cli).

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build Prod

Rode `npm run dg-buildProd` para buildar o projeto com a flag de produção com compilação AOT.

## Rodando testes

Rode `ng test` para executar teste de unidade via [Karma](https://karma-runner.github.io).

