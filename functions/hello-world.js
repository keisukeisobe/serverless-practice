exports.handler = async () => {
  console.log(process.env.TEST_Value);
  return {
    statusCode: 200,
    body: 'Hello world!',
  };
};

