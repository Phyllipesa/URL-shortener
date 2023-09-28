const Generate = require('../logic/Generate');
const Link = require('../models/linkModel');
const HttpError = require('../util/httpError');

module.exports = {
  async createShortUrlService(url) {
    const infoUrl = await Link.findOne({ where: { url } });
    const domain = process.env.DOMAIN;

    if (infoUrl) {
      const existeUrl = { newUrl: domain + infoUrl.code };
      
      return existeUrl;
    }
    const code = Generate.generateCode();
    const data = await Link.create({ url, code })
    const newUrl = { newUrl: domain + data.code };

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