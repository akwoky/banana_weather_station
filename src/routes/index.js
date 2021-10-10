var express = require('express');
var router = express.Router();
var _ = require('lodash');
const Vue = require('vue')

const template = require('fs').readFileSync('./views/index.template.html', 'utf-8');
const renderer = require('vue-server-renderer').createRenderer({
  template,
});

const context = {
  title: 'vue ssr',
  metas: `
      <meta name="keyword" content="vue,ssr">
      <meta name="description" content="vue srr demo">
  `,
};

var data = _.fill(Array(20160), {});

router.get('/', function(req, res, next) {
  const app = new Vue({
    data: {
      url: req.url
    },
    template: `<div>The visited URL is: {{ url }}</div>`,
  });

  renderer
  .renderToString(app, context, (err, html) => {
    console.log(html);
    if (err) {
      res.status(500).end('Internal Server Error')
      return;
    }
    res.end(html);
  });

});

module.exports = router;
