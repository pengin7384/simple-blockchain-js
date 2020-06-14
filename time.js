const moment = require('moment');
require('moment-timezone');
moment.tz.setDefault('Asia/Seoul');

const format = 'HH:mm:ss.SSS';

function getCurrentTime() {
  return moment().format(format);
}

module.exports = {
  getCurrentTime
};
