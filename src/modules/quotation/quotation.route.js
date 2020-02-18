import { Router } from 'express';

import * as quotationController from './quotation.controller';

const quotationRouter = new Router();

quotationRouter.get('/', quotationController.getOne);
quotationRouter.get('/all', quotationController.getAll);
quotationRouter.patch('/update', quotationController.update);
quotationRouter.post('/delete', quotationController.deleteQuotation);
quotationRouter.delete('/deleteall', quotationController.deleteAll);
quotationRouter.post('/add', quotationController.add);

export default quotationRouter;
