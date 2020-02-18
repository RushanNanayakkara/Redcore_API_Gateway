const userURLs = {
  getUserUrl: 'http://localhost:3100/api/v1/users',
  verifyUserUrl: 'http://localhost:3100/api/v1/users/verify',
  updateUserUrl: 'http://localhost:3100/api/v1/users/update',
  deleteUserUrl: 'http://localhost:3100/api/v1/users/delete',
  signUpUserUrl: 'http://localhost:3100/api/v1/users/signUp',
  loginUserUrl: 'http://localhost:3100/api/v1/users/login',
};

const quotationURLs = {
  getQuotationUrl: 'http://localhost:3200/api/v1/quotation',
  getAllQuotationUrl: 'http://localhost:3200/api/v1/quotation/all',
  updateQuotationUrl: 'http://localhost:3200/api/v1/quotation',
  deleteQuotationUrl: 'http://localhost:3200/api/v1/quotation/delete',
  deleteAllQuotationUrl: 'http://localhost:3200/api/v1/quotation/all',
  addQuotationUrl: 'http://localhost:3200/api/v1/quotation',
};

const orderURLs = {
  getOrderUrl: 'http://localhost:3200/api/v1/order',
  getAllOrdersUrl: 'http://localhost:3200/api/v1/order/all',
  updateOrderUrl: 'http://localhost:3200/api/v1/order',
  deleteOrderUrl: 'http://localhost:3200/api/v1/order/delete',
  deleteAllOrdersUrl: 'http://localhost:3200/api/v1/order/all',
  addOrderUrl: 'http://localhost:3200/api/v1/order',
};

export default {
  ...userURLs,
  ...quotationURLs,
  ...orderURLs,
};
