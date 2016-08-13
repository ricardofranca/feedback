import Mailer from './services/mailer';

const mailer = new Mailer();
mailer.send({
  from: 'cmilfont@gmail.com',
  to: 'cmilfont@milfont.org',
  subject: 'Feedback from Produto Reativo',
  content: 'Email de teste',
}).then((response) => {
  console.log(response.statusCode);
  console.log(response.body);
  console.log(response.headers);
}).catch((error) => {
  console.log('Error', error);
});
