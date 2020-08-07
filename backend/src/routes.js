const express = require('express');

const routes = express.Router();

const trasporter = require('./config/nodemailer');

routes.get('/', (request, response) => {
  response.json(request.body);
});

routes.post('/', async (request, response) => {
  const { name, email, message } = request.body;

  //Entrega o email do formulario ao email do desenvolvedor
  const sendMail = await trasporter.sendMail({
    from: `${name}<${email}>`,
    to: process.env.EMAIL,

    subject: 'Contato',
    text: message,
  });
  
  //Entrega uma mensagem do desenvolvedor para o usuario que enviou o email
  await trasporter.sendMail({
    from: process.env.EMAIL,
    to: email,

    subject: 'Não responda',
    text: 'O seu email chegou ao nosso sistema, agradecemos o contato',
  });
});

module.exports = routes;