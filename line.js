const request = require('request')
const fs = require('fs')
const {
  LINE_TOKEN,
  FILE_PATH,
  LINE_MSG_API,
} = require('./constants')

const getContent = messageID => {
  console.warn('tom =======> ', `${LINE_MSG_API}/${messageID}/content`)
  download(`${LINE_MSG_API}/${messageID}/content`, `${messageID}.jpg`, () => {
    console.log('done');
  });
}

const download = (uri, filename, callback) => {
  console.warn('tom =======> ', `Bearer { ${LINE_TOKEN}}`)
  request.head(uri, {
    headers: {
      Authorization: `Bearer {${LINE_TOKEN}}`
    },
  }, function (err, res, body) {
    request({
      uri,
      headers: {
        Authorization: `Bearer {${LINE_TOKEN}}`
      },
    }).pipe(fs.createWriteStream(`${FILE_PATH}/${filename}`)).on('close', callback);
  });
};

module.exports = {
  getContent
}