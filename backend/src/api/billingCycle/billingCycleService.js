const BillingCycle = require('./billingCycle');

BillingCycle.methods(['get', 'post', 'put', 'delete']);

// Informações voltaram com a informação ja atualizada,
// e a validação vai ocorrer tbm no metodo put e não só no post;
BillingCycle.updateOptions({ new: true, runValidators: true });

BillingCycle.route('count', (req, res, next) => {
  BillingCycle.count((err, value) => {
    if (err) {
      res.status(500).json({ errors: [err] });
    } else {
      res.json({ value });
    }
  });
});

module.exports = BillingCycle;
