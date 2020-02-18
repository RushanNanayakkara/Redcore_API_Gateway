import request from 'request';
import ApiUrls from '../../config/apiURL';

export async function signUp(req, res) {
  try {
    request.post(ApiUrls.signUpUserUrl, {
      json: req.body,
    }, (err, response, body) => {
      if (err) {
        return res.json(err);
      }
      res.send(body);
    });
  } catch (error) {
    res.status(400).json(error);
  }
}

export async function login(req, res) {
  try {
    request.post(ApiUrls.loginUserUrl, {
      json: req.body,
    }, (err, response, body) => {
      if (err) {
        return res.json(err);
      }
      res.json(body);
    });
  } catch (error) {
    res.status(400).json(error);
  }
}

export async function getUser(req, res) {
  request.get(`${ApiUrls.getUserUrl}?id=${req.query.id}`, { json: true }, (err, response, body) => {
    if (err) {
      return res.json(err);
    }
    res.send(body);
  });
}

export async function verifyUser(req, res) {
  request.get(`${ApiUrls.verifyUserUrl}?key=${req.query.key}&_id=${req.query._id}`, { json: false }, (err, response, body) => {
    if (err) {
      return res.json(err);
    }
    res.send(body);
  });
}

export async function updateUser(req, res) {
  try {
    request.patch(ApiUrls.updateUserUrl, {
      json: req.body,
    }, (err, response, body) => {
      if (err) {
        return res.json(err);
      }
      res.send(body);
    });
  } catch (error) {
    res.status(400).json(error);
  }
}

/* eslint-disable no-unused-vars */
export async function deleteUser(req, res) {
  // deleting the quotations of the user
  request.delete(`${ApiUrls.deleteAllQuotationUrl}?customer_id=${req.body._id}`, {
    json: true,
  }, (quotationErr, quotationResponse, quotationBody) => {
    if (quotationErr) {
      return res.json(quotationErr);
    }
    // deleting user orders
    request.delete(`${ApiUrls.deleteAllOrdersUrl}?customer_id=${req.body._id}`, {
      json: true,
    }, (orderErr, orderResponse, orderBody) => {
      if (orderErr) {
        return res.json(orderErr);
      }
      // deleting the user
      request.delete(ApiUrls.deleteUserUrl, {
        json: req.body,
      }, (userErr, userResponse, userBody) => {
        if (userErr) {
          return res.json(userErr);
        }
        res.send(userBody);
      });
    });
  });
}
