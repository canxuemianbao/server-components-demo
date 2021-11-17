var axios = require('axios');
var data = JSON.stringify({
  direct_trackings: [
    {
      tracking_number: '286037989534',
      additional_fields: {},
      slug: '',
    },
  ],
  translate_to: 'en',
});

var config = {
  method: 'post',
  url: 'https://release-kiwi-track.aftership.io/api/v2/direct-trackings/batch',
  headers: {
    authority: 'release-kiwi-track.aftership.io',
    pragma: 'no-cache',
    'cache-control': 'no-cache',
    'sec-ch-ua':
      '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
    accept: 'application/json, text/plain, */*',
    'content-type': 'application/json',
    'sec-ch-ua-mobile': '?0',
    'user-agent':
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36',
    'sec-ch-ua-platform': '"macOS"',
    origin: 'https://www.aftership.io',
    'sec-fetch-site': 'same-site',
    'sec-fetch-mode': 'cors',
    'sec-fetch-dest': 'empty',
    referer: 'https://www.aftership.io/',
    'accept-language': 'en,zh-CN;q=0.9,zh;q=0.8',
  },
  data: data,
};

module.exports = () =>
  axios(config)
    .then(function(response) {
      return response.data;
    })
    .catch(function(error) {
      console.log(error);
    });
