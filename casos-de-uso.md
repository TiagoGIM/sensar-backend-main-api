# Buscar a infraestrutura monitorada
## Exibir dispositivos da empresa na barra lateral.

1. Dado que eu tenho uma Id de empresa, quero poder acessar meus dispositivos Sensar hierarquicamente por Setor, Linha, Maquina e Equipamento.
2. Dado que eu tenho um equipamento, quero acessar algum DS (dispositivoSensar) e exibir as informaçoes associadas a ele.

## Exibir DS's que não estão vinculados a nenhum setor.

1. Dado que eu tenho DS's novos, quero saber quais estao disponiveis para uso.
2. Dado que eu tenho Id de DS sem informaçoes associadas eu quero edita-lo.

## Interagir com o dispositivo

1. Dado que eu tenho um DS eu quero editar as suas propriedades.
2. Dado que eu tenho um Id de um DS eu quero recuperar os dados dos sensores ex.: vibracao... 

## Criar novas opções de _Setor_, _Linha_, _Máquina_ e _Equipamento_
- Caso não encontre uma opção desejada durante o processo de edição do SD, quero poder criar uma personalizada.

## Buscar opçoes de _Setor_, _Linha_, _Máquina_ e _Equipamento_
- Caso queira dar opções para o seletor de propriedade quero poder busca-las,
# Chamadas de API
### [PUT] updateDevice/:id
```
{ 
  id* :'21',
  macAdrr* : 'xpto',
  alias? : 'bullet',
  observacoes? : 'eita',
  section* : 'nomeSetor',
  line* : 'nomeLinha',
  machine* :'nomeMaquina',
  equipiment* : 'nomeEquipamento'
}
```

### [GET] getAllDeviceUnRegistred/:idEmpresa
```
[
  {
    id :'21',
    macAdrr : 'xpto',
  },
  {
    id :'22',
    macAdrr : 'xpto',
  },
]
```
### [POST] createProperties/:tipo-de-opcao
```
{
  name : 'maquina1',
  hierarquia:'setorNome/linhaNome'
}
```
### [GET] getAllDevicesRegistred/:idEmpresa/:setor
```
{
  [ setor1, setor2, setor3, ...]
}
```
### [GET] getAllDevicesRegistred/:idEmpresa/:setor/:linha
```
{
  [linha1, linha2, linha3, ...]
}
```
### [GET] getAllDevicesRegistred/:idEmpresa/:linha/:maquina
```
{
  [ maquina1, maquina2, maquina3, ...]
}
```
### [GET] getAllDevicesRegistred/:idEmpresa/:linha/:maquina/:equipamento
```
{
  [equipamento1, equipamento2, equipamento3, ...]
}
```

### [GET] getAllDevicesRegistred/:idEmpresa/:linha/:maquina/:equipamento/:disposivos-sensar

```
[ 
  {
    id :'21',
    macAdrr : 'xpto',
    alias : 'bulet'
    obs : 'eita'
  },
  {...}
]
```

### [GET] getAllDevicesRegistred/:idEmpresa
```
[
  { setor1 : {...} },
  { setor2 : {
              linha1 : {...},
              linha2 : { 
                        maquina1 : {...},
                        maquina2 : {  equipamento1, equipamento2 }
                        }
               }
   },
   { setor3 : {...} }
]
```

[GET]
getDeviceData/:initDate=22-3-3&endDate=22-22-2222&macAdress=3123231MC&page=5&size=0

deviceDataBodyResponse 
```
[
  {
    dateTime : "Thu Mar 24 2022 17:37:47 GMT-0300",
    temperature: {
                   c : 75
                 },
    vibration : [-1484,  436, 15784],[-1476, 444, 15908]...],
    vibration-spectrum : [[-1484,  436, 15784],[-1476, 444, 15908]...]
  },
  {
    dateTime : "Thu Mar 24 2022 17:37:47 GMT-0300",
    temperature: {
                   c : 85
                 },
    vibration : [[-1484,  436, 15784],[-1476, 444, 15908]...],
    vibration-spectrum : [[-1484,  436, 15784],[-1476, 444, 15908]...]
  }
]
```

 - dateTime : string com os horario que os dados foram recebidos pelo mqttClient.
 - temperature: valor da temperatura "30 C",
 - vibration : lista de vetor vibraçao [x,y,z] onde x y e z são numeros inteiros. [][]
 - vibration-spectrum : tipo de vibration convertido para o espaço da frequencia
