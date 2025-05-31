import { DynamoDBClient } from "aws-sdk/client-dynamodb";
import {
    DynamoDBDocumentClient,
    ScanCommand,
    GetCommand,
    PutCommand,
    UpdateCommand,
    DeleteCommand
}from "aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});
const doClient = DynamoDBDocumentClient.from(client);


const createResponse =( statusCode, body) =>{
    return {
        statusCode,
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body),
    };
};

export {
    doClient,
    createResponse,
    ScanCommand,
    GetCommand,
    PutCommand,
    UpdateCommand,
    DeleteCommand
};