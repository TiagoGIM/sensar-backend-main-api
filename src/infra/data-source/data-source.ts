export const sectorsMock = [
  {
    id: '1',
    name: 'setor 1',
    lines: [
      {
        id: '12',
        name: 'linha 1',
        machines: [{
          id: '123',
          name: 'maquina1',
          equipments: [
            {
              id: '1234',
              name: 'equipamento1',
              devices: [
                {
                  id :"1",
                  macAdrr :"QRTYWE",
                  name :"",
                  observacoes :"s1",
                  sector :"setor 1",
                  line :"linha 1",
                  machine :"maquina 1",
                  equipment :"equipamento1",
                },
                {
                  id :"2",
                  macAdrr :"QRTYWE",
                  name :"s2",
                  observacoes :"",
                  sector :"setor 1",
                  line :"linha 1",
                  machine :"maquina 1",
                  equipment :"equipamento1",
                },
                {
                  id :"3",
                  macAdrr :"QRTYWE",
                  name :"s3",
                  observacoes :"",
                  sector :"setor 1",
                  line :"linha 1",
                  machine :"maquina 1",
                  equipment :"equipamento1",
                }
              ]
            }
          ]
        }],
      },
      {
        id: '13',
        name: 'linha 2',
        machines: [{
          id: '12344',
          name: 'maquina13',
          equipments: [
            {
              id: '12324',
              name: 'equipamento1',
              devices: []
            }
          ]
        }],
      },
      {
        id: '17',
        name: 'linha 3',
        machines: [{
          id: '0344',
          name: 'maquina13',
          equipments: [
            {
              id: '12324',
              name: 'equipamento1',
              devices: []
            }
          ]
        }],
      }
    ],
  },
  {
    id: '2',
    name: 'setor 2',
    lines: [
      {
        id: '123',
        name: 'linha 13',
        machines: [
          {
          id: '1233',
          name: 'maquina2',
          equipments: [
            {
              id: '12345',
              name: 'equipamento1',
              devices: []
            }
          ]
        }],
      }
    ],
  },
]