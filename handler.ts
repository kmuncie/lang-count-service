import { APIGatewayEvent, Callback, Context, Handler } from 'aws-lambda';

export const langCount: Handler = (event: APIGatewayEvent, context: Context, cb: Callback) => {
   const response = {
      statusCode: 200,
      body: JSON.stringify({
         uid: 'urn:uuid:1335c695-cfb8-4ebb-abbd-80da344efa6b',
         updateDate: '2016-05-23T00:00:00.0Z',
         titleText: 'Amazon Developer Blog, week in review May 23rd',
         mainText: 'Meet Echosim. A new online community tool for developers that simulates the look and feel of an Amazon Echo.',
         redirectionUrl: 'https://developer.amazon.com/public/community/blog',
      }),
   };

   cb(null, response);
}
