
import request from 'request';
import ApiUrls from '../../config/apiURL';

export async function add(req, res) {
  try {
    request.post(ApiUrls.addOrderUrl, {
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

export async function getOne(req, res) {
  request.get(`${ApiUrls.getOrderUrl}?_id=${req.query._id}`, { json: true }, (err, response, body) => {
    if (err) {
      return res.json(err);
    }
    res.send(body);
  });
}

export async function getAll(req, res) {
  request.get(`${ApiUrls.getAllOrdersUrl}?customer_id=${req.query.customer_id}`, { json: true }, (err, response, body) => {
    if (err) {
      return res.json(err);
    }
    res.send(body);
  });
}

export async function update(req, res) {
  try {
    request.patch(ApiUrls.updateOrderUrl, {
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

export async function deleteQuotation(req, res) {
  try {
    request.delete(ApiUrls.deleteAllOrdersUrl, {
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

export async function deleteAll(req, res) {
  try {
    request.delete(`${ApiUrls.deleteAllOrdersUrl}?customer_id=${req.query.customer_id}`, {
      json: true,
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

