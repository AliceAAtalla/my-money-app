const BillingCycle = require('./billingCycle');

BillingCycle.methods(['get', 'post', 'put', 'delete']);

// Informações voltaram com a informação ja atualizada,
// e a validação vai ocorrer tbm no metodo put e não só no post;
BillingCycle.updateOptions({ new: true, runValidators: true });

/* O metodo find() com parametro {}, faz com que o mongoose busque todos os registros
na coleção BillingCycles de forma indiscriminada. Caso a consulta não produza nenhum erro,
na resposta retornamos os documentos. Caso contrário, retornamos um Status Code 500 e a
mensagem de erro proveniente do banco de dados.
 */
// BillingCycle.route('get', (_req, res, _next) => {
//   BillingCycle.find({}, (err, docs) => {
//     if (!err) {
//       res.json(docs);
//     } else {
//       res.status(500).json({ errors: [error] });
//     }
//   });
// });

module.exports = BillingCycle;
