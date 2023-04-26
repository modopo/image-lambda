'use strict';

const { S3Client,
  GetObjectCommand,
  PutObjectCommand
} = require('@aws-sdk/client-s3');

const s3Client = new S3Client({ region: 'us-west-1' });

module.exports = async (event) => {

  const bucketName = event.Records[0].s3.bucket.name;
  const fileName = event.Records[0].s3.object.key;
  const fileSize = event.Records[0].s3.object.size;

  const getImageManifest = {
    Bucket: bucketName,
    Key: 'images.json'
  }

  let imageArray = [];

  try {
    const manifest = await s3Client.send(new GetObjectCommand(getImageManifest));
    imageArray = JSON.parse(manifest.Body);
    console.log(imageArray);

  } catch (e) {
    if (e.Code === 'NoSuchKey') {
      imageArray = [];
    }
  }

  let newEntry = {
    name: fileName,
    size: fileSize
  }

  console.log(newEntry);

  let newManifest = JSON.stringify(imageArray.push(newEntry));

  await s3Client.send(new PutObjectCommand({
    Bucket: bucketName,
    Key: 'images.json',
    Body: newManifest
  }))

  // TODO implement
  const response = {
    statusCode: 200,
    body: JSON.stringify('Hello from Lambda!'),
  };
  return response;
}
