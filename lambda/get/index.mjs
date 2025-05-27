import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, GetCommand } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

export const getCoffee = async (event) => {
  const command = new GetCommand({
    TableName: "CoffeeShop",
    Key: {
      conffeeId: "c123",
    },
  });

  const response = await docClient.send(command);
  console.log(response);
  return response;
};

