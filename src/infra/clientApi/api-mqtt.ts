import { ApiClientHttp } from '@/data/contracts/relatorios-http-client';
import { request } from 'undici';

const URL_MQTT = 'https://mqtt-listener-app.herokuapp.com/device-data';
export class ApiClientHttpImp implements ApiClientHttp {

  async getDeviceData(macAddress: string): Promise<any> {
    try {
      const {
        statusCode,
        headers,
        body
      } = await request(`${URL_MQTT}/${macAddress}?startDate=08/04/2022 00:00&endDate=08/04/2022 23:55`);
      const deviceData = await body.json();
      console.log(deviceData.vibrations)
      /*let deviceData : any
      for await (const data of body) {
         deviceData = JSON.parse(data);
        console.log('data', data)
        
      }*/
      return deviceData.vibrations//deviceData as Array<any>;
    } catch (error) {
      console.log(error)
      throw new Error('something is wrong in mqtt listener');
    }
  }
}