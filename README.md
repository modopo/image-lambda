# Using Lambda functions

## Description

Trigger a Lambda function to update a manifest based on uploades in a S3 bucket.
A connection was made in the GUI with a ruleset. The ruleset is if a image file was uploaded to a specific folder in the S3 bucket, the parent directory contains the manifest and that manifest will be updated with the new image file that was uploaded into the S3 bucket.

## S3 images.json file

* https://lab-17-401.s3.us-west-2.amazonaws.com/images.json

## Deployment Issue

* Understanding the Get and Put object command and what was required in the response was difficult based on AWS's documentation