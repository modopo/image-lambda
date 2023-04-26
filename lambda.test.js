'use strict';

const handler = require('./index');

describe('Testing the the lambda function', () => {
  test('Handles an s3 upload event', async () => {
    const event = {
      Records: [{
        s3: {
          bucket: { name: 'lab-17-401'},
          object: { 
            key: 'test.jpg',
            size: 1023},
        }
      }]
    }


    let response = await handler(event);
  });
})