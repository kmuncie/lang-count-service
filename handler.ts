import { APIGatewayEvent, Callback, Context, Handler } from 'aws-lambda';
import * as rp from 'request-promise';

export const langCount: Handler = (event: APIGatewayEvent, context: Context, cb: Callback) => {

   const now = new Date().toISOString();

   /** https://stackoverflow.com/a/2117523 */
   function uuidv4() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
         var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
         return v.toString(16);
      });
   }

   rp('https://www.jw.org/en/languages/')
   .then(function(j) {

      let json = JSON.parse(j);

      const response = {
         statusCode: 200,
         body: JSON.stringify({
            uid: uuidv4(),
            updateDate: now,
            titleText: 'Number of languages currently supported on JW.ORG - ' + json.localizedCount,
            mainText: 'Today, JW dot org supports ' + json.localizedCount + ' languages.',
            redirectionUrl: 'https://jw.org/',
         }),
      };

      cb(null, response);

   });

}
