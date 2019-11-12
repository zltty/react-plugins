const pipe = (from, to, options) => new Promise((resolve, reject) => {
  from.pipe(to, options);
  from.on('error', reject);
  from.on('end', resolve);
});

module.exports = pipe;
