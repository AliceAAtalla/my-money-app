const { Router } = require('express');

const defineRouter = app => {
  // Definir URL base para todas as rotas:

  const router = Router();
  app.use('/api', router);

  // Rotas de Ciclo de Pagamento
  const BillingCycle = require('../api/billingCycle/billingCycleService');
  BillingCycle.register(router, '/billingCycles');
};

module.exports = defineRouter;
