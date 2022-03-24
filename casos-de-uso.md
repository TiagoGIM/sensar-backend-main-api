# Exibir dispositivos da empresa na home page.

1. Dado que eu tenho uma Id de empresa eu quero recuperar todos os dispositivos da empresa empresa.

# Cenarios

## 1 dispositivo

1. Dado que eu tenho um dispositivo eu quero editar as suas propriedades.
2. Dado que eu tenho um Id de um dispositivo eu quero recuperar os dados dos sensores ex.: vibracao... 

# Chamadas de API
[PUT]
updateDevice/
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

[GET]

getAllDeviceUnRegistred/:idEmpresa
getAllDevicesRegistred/:idEmpresa
{ 
  setores [setor 1] >
         linhas [linha 1]> 
            maquinas [maquina 1]> 
                equipamento [equipamento monitorado] > 
                    dispositivos [dispositivo 1]
}

empresa.linha1.equipamento1.dispositivos.dispositivo1 = id, macadresss , nome

[GET]
getDeviceData/:initDate=22-3-3&endDate=22-22-2222&macAdress=3123231MC&page=5&size=0

deviceDataBody 
[
  {
    dateTime : string com os horario que os dados foram recebidos pelo mqttClient.
    temperature: valor da temperatura "30 C",
    vibration : [          // expanded readability
      [-1484,  436, 15784], //x, y, z
      [-1476, 444, 15908]
    ]}
    vibration-spectrum : [          // expanded readability
      [-1484,  436, 15784], //x, y, z
      [-1476, 444, 15908]
    ]}
  }
]