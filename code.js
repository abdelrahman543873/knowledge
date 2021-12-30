const soap = require("strong-soap").soap;
// wsdl of the web service this client is going to invoke. For local wsdl you can use, url = './wsdls/stockquote.wsdl'
const url = "https://10.2.1.108/tranwall/service/IssuerApi/v2.0?wsdl";

soap.createClient(url, function (err, client) {
  console.log(client);
  client.setSecurity({
    addOptions: function (options) {
      options.rejectUnauthorized = false;
      options.strictSSL = false;
      options.agent = new https.Agent(options);
    },
  });
});
