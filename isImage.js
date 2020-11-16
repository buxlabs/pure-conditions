function isImage (string) {
  const extensions = [
    '.tif',
    '.tiff',
    '.gif',
    '.jpeg',
    '.jpg',
    '.jif',
    '.jfif',
    '.jp2',
    '.jpx',
    '.j2k',
    '.j2c',
    '.fpx',
    '.pcd',
    '.png',
    '.svg',
    '.bmp'
  ]
  return extensions.includes(string.substr(string.lastIndexOf('.')))
}
module.exports = isImage
