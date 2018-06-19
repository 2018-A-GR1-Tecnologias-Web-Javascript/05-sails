/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also do this by creating a hook.
 *
 * For more information on bootstrapping your app, check out:
 * https://sailsjs.com/config/bootstrap
 */

const request = require('request');

module.exports.bootstrap = async function (done) {

  setInterval(
    () => {
      console.log('Enviar datos');

      const objetoRequest = {
        url: 'http://localhost:1338/Usuario',
        form: {
          nombre: 'Adrian',
          apellido: 'Eguez'
        }
      };
      request
        .post(objetoRequest,
          (err, respuesta, body) => {
            console.log('err', err);
            console.log('respuesta', respuesta);
            console.log('body', body);

          })
    }
    , 10000);

  return done();

};
