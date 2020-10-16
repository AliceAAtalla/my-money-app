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

BillingCycle.route('summary', (req, res, next) => {
  BillingCycle.aggregate(
    [
      {
        $project: {
          cred: { $sum: '$credits.value' },
          deb: { $sum: '$debits.value' },
        },
      },
      {
        $group: { _id: null, credit: { $sum: '$cred' }, debit: { $sum: '$deb' } },
      },
      {
        $project: { _id: 0, credit: 1, debit: 1 },
      },
    ],
    (error, result) => {
      if (error) {
        res.status(500).json({ errors: [error] });
      } else {
        res.json(result[0] || { credit: 0, debit: 0 });
      }
    }
  );
});

module.exports = BillingCycle;
