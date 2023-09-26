const Link = require('../models/linkModel');
const urlModel = require('../models/linkModel');

const generateCode = () => {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < 5; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
}

module.exports = {
  async createShortUrl(req, res, next) {
    try {
      const url = req.body.url;
      const code = generateCode();
      const domain = process.env.DOMAIN;
  
      const result = await Link.create({
        url,
        code
      })

      const newUrl = { newUrl: domain + result.code };

      res.status(201).send(newUrl);

    } catch (error) {
      res.status(400).send("Erro ao adicionar ao banco");
    }
  },
  async getCode(req, res, next) {
    
    try {
      const code = req.params.code;
      const result = await Link.findOne({ where: { code } });
      
      result.hits++;
      await result.save();

      res.redirect(result.url);
    } catch (error) {
      res.status(404).send("Codigo invalido");
    }
  }
}