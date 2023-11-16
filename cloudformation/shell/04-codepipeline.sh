#!/bin/bash

CHANGESET_OPTION="--no-execute-changeset"

if [ $# = 1 ] && [ $1 = "deploy" ]; then
  echo "deploy mode"
  CHANGESET_OPTION=""
fi

CFN_TEMPLATE=../templates/codepipeline.yml
CFN_STACK_NAME=nota-de-misterio-frontend-pipeline

aws cloudformation deploy --stack-name ${CFN_STACK_NAME} --template-file ${CFN_TEMPLATE} ${CHANGESET_OPTION}\
    --capabilities CAPABILITY_NAMED_IAM \
    --parameter-overrides file://../parameters/codepipeline.json
