export async function lambdaHandler(event, context) {
return {
  statusCode: 200,
  body: JSON.stringify({ message: 'Hello from Lambda 1' })
};
}
