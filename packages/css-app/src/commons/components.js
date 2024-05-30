const { resolve } = require('path');

function reqContext(dir) {
  const fileList = require.context(resolve('../', dir), true, 'index.jsx');
  console.log(fileList);
}

exports = {
  reqContext,
};
