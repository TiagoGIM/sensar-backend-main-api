import { Sector } from "@src/models";

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
          equipiments: [
            {
              id: '1234',
              name: 'equipamento1',
              devices: []
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
          equipiments: [
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
          equipiments: [
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
          equipiments: [
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