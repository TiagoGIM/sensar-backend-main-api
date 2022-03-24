# Exibir dispositivos da empresa na home page.

1. Dado que eu tenho uma Id de empresa eu quero recuperar todos os dispositivos da empresa empresa.

# Cenários

## 1 dispositivo

1. Dado que eu tenho um dispositivo eu quero editar as suas propriedades.
2. Dado que eu tenho um Id de um dispositivo eu quero recuperar os dados dos sensores ex.: vibracao... 

# Chamadas de API
## [PUT] updateDevice/
```
{
    NomeSetor : 
    { 
      nomeLinha : 
      { 
        nomeMaquina :
        {
          nomeEquipamento : 
          { 
            Device : 
            { 
              id :'21',
              macAdrr : 'xpto',
              nome : 'bullet',
              obs : 'eita',
            }
          }
        }
      }
    }
  }
```

## [GET] getAllDeviceUnRegistred/:idEmpresa
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

## [GET] getAllDevicesRegistred/:idEmpresa
```
[
  { setor1 : {...} },
  { setor2 : {
              linha1 : {...},
              linha2 : { 
                        maquina1 : {...},
                        maquina2 : {
                                    equipamento1 : {...},
                                    equipamento2 : [
                                                    {
                                                      id :'21',
                                                      macAdrr : 'xpto',
                                                      alias : 'bulet'
                                                      obs : 'eita'
                                                     },
                                                     {...}
                                                    ]
                                     }
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
    dateTime : "22-02-2222 10:42 UTC",
    temperature: {
                   unit : "c" ,
                   value : 75
                 },
    vibration : [[-1484,  436, 15784],[-1476, 444, 15908]...],
    vibration-spectrum : [[-1484,  436, 15784],[-1476, 444, 15908]...]
  },
  {
    dateTime : "22-02-2222 12:42 UTC",
    temperature: {
                   unit : "c" ,
                   value : 85
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
