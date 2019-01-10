const { SUPER_SECRET_KEY } = process.env;

export function handler(event, context, callback) {
  console.log(event);
  console.log(context);
  callback(null, {
    statusCode: 200,
    body: JSON.stringify(SUPER_SECRET_KEY)
  });
}
