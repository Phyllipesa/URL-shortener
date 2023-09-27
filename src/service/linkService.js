const Link = require('../models/linkModel');
const generateCode = require('../logic/generateCode');
const urlExists = require('../logic/urlExists');
const HttpError = require('../util/httpError');

module.exports = {
  async createShortUrlService(url) {
    const infoUrl = await urlExists(url);
    const domain = process.env.DOMAIN;

    if (infoUrl) {
      const existeUrl = { newUrl: domain + infoUrl.code };
      
      return existeUrl;
    }

    const code = generateCode();
    const result = await Link.create({ url, code })
    const newUrl = { newUrl: domain + result.code };

    return newUrl;
},
  async getCodeService(code) {
    const result = await Link.findOne({ where: { code } });

    if(!result) throw new HttpError(404, "Not Found");

    result.hits++;
    await result.save();

    return result.url;
  }
}