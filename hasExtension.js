function hasExtension (path, extension) {
  if (!extension) {
    const index = path.lastIndexOf('.')
    if (index === -1) { return false }
    const ending = path.substr(index + 1)
    if (ending.startsWith('/') || ending.startsWith('\\')) { return false }
    return !!ending
  }
  if (extension.startsWith('.')) { return path.endsWith(extension) }
  return path.endsWith(`.${extension}`)
}
module.exports = hasExtension
