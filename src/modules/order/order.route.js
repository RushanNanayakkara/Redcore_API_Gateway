import { Router } from 'express';

import * as orderController from './oder.controller';

const orderRouter = new Router();

orderRouter.get('/', orderController.getOne);
orderRouter.get('/all', orderController.getAll);
orderRouter.patch('/update', orderController.update);
orderRouter.post('/delete', orderController.deleteQuotation);
orderRouter.delete('/deleteall', orderController.deleteAll);
orderRouter.post('/add', orderController.add);

export default orderRouter;
