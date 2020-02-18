import userRoutes from './user/user.route';
import orderRoutes from './order/order.route';
import quotationRoutes from './quotation/quotation.route';
// import { authJwt } from '../services/auth.services';

export default app => {
  app.use('/users', userRoutes);
  app.use('/quotation', quotationRoutes);
  app.use('/order', orderRoutes);

  app.get('/', (req, res) => {
    res.send('Invalid');
  });
};
