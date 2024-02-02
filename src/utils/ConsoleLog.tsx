import { environment } from '../environments/environment';
import moment from 'moment';
const { IS_LOGGING } = environment

export function consoleLog(title: string, data: any, error?: boolean) {
  const date = moment(new Date()).format('DD/MM/YYYY, HH:mm:ss')
  if (IS_LOGGING) {
    if (error) {
      console.log(`%c${title}`, "color: #E93F36", '\n', data, '\n', '\nDateTime : ', date, '\n-------------------');
    } else {
      console.log(`%c${title}`, "color: #53F810", '\n', data, '\n', '\nDateTime : ', date, '\n-------------------');
    }
  }
}