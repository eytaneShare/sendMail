const send = require('gmail-send')
({
    user: 'confirmationbuy@gmail.com',
    pass: 'mywork123',
    to:   'eytanereal@gmail.com',
    subject: 'test subject',
  });

  
  send({
    text:    'gmail-send example 1',  
  }, (error, result, fullResult) => {
    if (error) console.error(error);
    console.log(result);
  })
  
 