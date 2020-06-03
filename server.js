const azure = require('azure')

const ENDPOINT=process.env.ENDPOINT
console.log(ENDPOINT)

const endpoint  = 'Endpoint=sb://sbs-node.servicebus.windows.net/;SharedAccessKeyName=sbspolicy;SharedAccessKey=/Al2zgLVz28K0rz2uLkqA3sEkMmKUCOvZnOzLYa7KmM='

const serviceBusService = azure.createServiceBusService(endpoint);

serviceBusService.createQueueIfNotExists('queue1', function(error){
  console.log('error', error)
  if(!error){
    console.log('error', error)
  } 
});

const message = {
  body: 'Test message',
  customProperties: {
    testproperty: 'TestValue'
}};

serviceBusService.sendQueueMessage('sbsqueue', message, function(error, result){
  console.log('error', error, result)
  if(!error){
    console.log('error', error)
  }
});

serviceBusService.receiveQueueMessage('sbsqueue', function(error, receivedMessage){
  console.log('get message', receivedMessage)
  if(!error){
    console.log('error', error)
  }
});