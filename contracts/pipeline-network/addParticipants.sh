#!/bin/bash
#
#

jq --version > /dev/null 2>&1
if [ $? -ne 0 ]; then
	echo "Please Install 'jq' https://stedolan.github.io/jq/ to execute this script"
	echo
	exit 1
fi
starttime=$(date +%s)


curl -X GET --header 'Accept: application/json' 'http://localhost:3000/api/pipeParticipant'


echo
echo
sleep 1
echo
curl -s -X POST \
  http://localhost:3000/api/pipeParticipant \
  -H "content-type: application/json" \
  -d '{
  "$class": "org.example.mynetwork.pipeParticipant",
  "participantId": "PARTCP1",
  "firstName": "Salim",
  "lastName": "Khan",
  "House_no": "10"
}'
echo
echo
echo
echo
sleep 1
cho
curl -s -X POST \
  http://localhost:3000/api/pipeParticipant \
  -H "content-type: application/json" \
  -d '{
  "$class": "org.example.mynetwork.pipeParticipant",
  "participantId": "PARTCP2",
  "firstName": "uttam K",
  "lastName": "Manna",
  "House_no": "10"
}'
echo
echo
echo
echo
sleep 1

curl -X GET --header 'Accept: application/json' 'http://localhost:3000/api/pipeParticipant'
