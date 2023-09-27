const { createShortUrlService, getCodeService } = require('../service/linkService');
const HttpError = require('../util/httpError');


module.exports = {
  async createShortUrl(req, res, next) {
    const url = req.body.url;

    if (!url) {
      return next(new HttpError(400, "Invalid URL"))
    }

    try {
      const result = await createShortUrlService(url);
      return res.status(201).send(result);
    } catch (error) {
      next(error)
    }
  },

  async getCode(req, res, next) {
    try {
      const code = req.params.code;
      const url = await getCodeService(code);
      return res.redirect(url);
      
    } catch (error) {
      next(error)
    }
  }
}
