const fs = require('fs');
const archiver = require('archiver');

const bump = require('json-bump');
bump('src/manifest.json', { minor: 1 });

const output = fs.createWriteStream(__dirname + 'prod.zip');
const archive = archiver('zip', {
  zlib: { level: 9 }, // Sets the compression level.
});
archive.pipe(output);
archive.directory('src/', '');
archive.finalize();
