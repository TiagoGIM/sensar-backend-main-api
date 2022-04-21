# sensar-backend-main-api

Aqui deve ter uma descrição muito legal que o Tiago do futuro irá fazer.

Até o momento decidie que será desenvolvido usando TDD.

As tecnologias ainda estão em processo de escolha para evitar enviesar o procedimento. Algumas etapas foram definidas para essa semana e se tornarão issues para o time acompanhar.

- [X] Disponibilizar endpoint do HEROKU
- [X] Criar Versão de API mockada
- [ ] SWAGGER pra nao ter que documentar todas as rotas nao mao aqui  =D
- [X] Adicionar ORM (type ou prisma)
- [X] Linkar DBS (Mongo ou Postgres)



## Endpoint Heroku

https://sensar-iot.herokuapp.com/api/

### rotas : 
>[GET] query/equipment/:id

>[PUT] action/sector/:sectorId

>[GET] query/company-tree/:id


## Em andamento

- crud base
- - setor
- - - put (ok) post (ok) create(ok) loadAll( ) delete ( )
- - company
- - - loadTree(ok)
- - equipment
- - - put (ok) post (ok) create(ok) delete - [ ] loadAll(ok)
- - device  
- - - put (ok) loadAll(ok) create(ok)

Validaçao de campos

### DTOs Mappers e Sanitizaçao.

- [ ] view models (DTO) Sector e Company
- [ ] Mappers : toDTO, toPersist e toDomain