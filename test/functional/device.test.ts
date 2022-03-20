import { response } from "express";

describe('main suit', () => {
  it('should return data from device with gived id ', async() => {
    const {body , status} = await global.testRequest.get("/device");
    expect(status).toBe(200);
    expect(body).toEqual([
      {
        "id": 7801345092390534289073456,
        "temperature_celcius": 30.125,
        "sample_rate": 832,
        "vibrations": [
          {
            "axis_x": -1484,
            "axis_y": 436,
            "axis_z": 15784
          },
          {
            "axis_x": -1476,
            "axis_y": 444,
            "axis_z": 15908
          },
          {
            "axis_x": -1536,
            "axis_y": 456,
            "axis_z": 15848
          },
          {
            "axis_x": -1540,
            "axis_y": 123,
            "axis_z": 15904
          },
          {
            "axis_x": -1556,
            "axis_y": 428,
            "axis_z": 15916
          },
          {
            "axis_x": -1540,
            "axis_y": 416,
            "axis_z": 15892
          },
          {
            "axis_x": -1540,
            "axis_y": 480,
            "axis_z": 15784
          },
          {
            "axis_x": -1572,
            "axis_y": 488,
            "axis_z": 15864
          },
          {
            "axis_x": -1476,
            "axis_y": 516,
            "axis_z": 15892
          },
          {
            "axis_x": -1476,
            "axis_y": 616,
            "axis_z": 15832
          }
        ]
      },
      {
        "id": 7801345092390534289073456,
        "temperature_celcius": 30.125,
        "sample_rate": 832,
        "vibrations": [
          {
            "axis_x": -1484,
            "axis_y": 436,
            "axis_z": 15784
          },
          {
            "axis_x": -1476,
            "axis_y": 444,
            "axis_z": 15908
          },
          {
            "axis_x": -1536,
            "axis_y": 456,
            "axis_z": 15848
          },
          {
            "axis_x": -1540,
            "axis_y": 123,
            "axis_z": 15904
          },
          {
            "axis_x": -1556,
            "axis_y": 428,
            "axis_z": 15916
          },
          {
            "axis_x": -1540,
            "axis_y": 416,
            "axis_z": 15892
          },
          {
            "axis_x": -1540,
            "axis_y": 480,
            "axis_z": 15784
          },
          {
            "axis_x": -1572,
            "axis_y": 488,
            "axis_z": 15864
          },
          {
            "axis_x": -1476,
            "axis_y": 516,
            "axis_z": 15892
          },
          {
            "axis_x": -1476,
            "axis_y": 616,
            "axis_z": 15832
          }
        ]
      },
      {
        "id": 912388782372923885,
        "temperature_celcius": 30.125,
        "sample_rate": 832,
        "vibrations": [
          {
            "axis_x": -1484,
            "axis_y": 436,
            "axis_z": 15784
          },
          {
            "axis_x": -1476,
            "axis_y": 444,
            "axis_z": 15908
          },
          {
            "axis_x": -1536,
            "axis_y": 456,
            "axis_z": 15848
          },
          {
            "axis_x": -1540,
            "axis_y": 123,
            "axis_z": 15904
          },
          {
            "axis_x": -1556,
            "axis_y": 428,
            "axis_z": 15916
          },
          {
            "axis_x": -1540,
            "axis_y": 416,
            "axis_z": 15892
          },
          {
            "axis_x": -1540,
            "axis_y": 480,
            "axis_z": 15784
          },
          {
            "axis_x": -1572,
            "axis_y": 488,
            "axis_z": 15864
          },
          {
            "axis_x": -1476,
            "axis_y": 516,
            "axis_z": 15892
          },
          {
            "axis_x": -1476,
            "axis_y": 616,
            "axis_z": 15832
          }
        ]
      },
      {
        "id": 398636782092,
        "temperature_celcius": 30.125,
        "sample_rate": 832,
        "vibrations": [
          {
            "axis_x": -1484,
            "axis_y": 436,
            "axis_z": 15784
          },
          {
            "axis_x": -1476,
            "axis_y": 444,
            "axis_z": 15908
          },
          {
            "axis_x": -1536,
            "axis_y": 456,
            "axis_z": 15848
          },
          {
            "axis_x": -1540,
            "axis_y": 123,
            "axis_z": 15904
          },
          {
            "axis_x": -1556,
            "axis_y": 428,
            "axis_z": 15916
          },
          {
            "axis_x": -1540,
            "axis_y": 416,
            "axis_z": 15892
          },
          {
            "axis_x": -1540,
            "axis_y": 480,
            "axis_z": 15784
          },
          {
            "axis_x": -1572,
            "axis_y": 488,
            "axis_z": 15864
          },
          {
            "axis_x": -1476,
            "axis_y": 516,
            "axis_z": 15892
          },
          {
            "axis_x": -1476,
            "axis_y": 616,
            "axis_z": 15832
          }
        ]
      },
      {
        "id": 3458763491,
        "temperature_celcius": 30.125,
        "sample_rate": 832,
        "vibrations": [
          {
            "axis_x": -1484,
            "axis_y": 436,
            "axis_z": 15784
          },
          {
            "axis_x": -1476,
            "axis_y": 444,
            "axis_z": 15908
          },
          {
            "axis_x": -1536,
            "axis_y": 456,
            "axis_z": 15848
          },
          {
            "axis_x": -1540,
            "axis_y": 123,
            "axis_z": 15904
          },
          {
            "axis_x": -1556,
            "axis_y": 428,
            "axis_z": 15916
          },
          {
            "axis_x": -1540,
            "axis_y": 416,
            "axis_z": 15892
          },
          {
            "axis_x": -1540,
            "axis_y": 480,
            "axis_z": 15784
          },
          {
            "axis_x": -1572,
            "axis_y": 488,
            "axis_z": 15864
          },
          {
            "axis_x": -1476,
            "axis_y": 516,
            "axis_z": 15892
          },
          {
            "axis_x": -1476,
            "axis_y": 616,
            "axis_z": 15832
          }
        ]
      }
    ]);
   });
});