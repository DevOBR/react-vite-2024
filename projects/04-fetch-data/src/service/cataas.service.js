const URL_CAT_IMG_PREFIX =
  'https://cataas.com/cat/gif/says/{firstWord}?fontColor=white'

export function getCatImg({ fact }) {
  return URL_CAT_IMG_PREFIX.replace('{firstWord}', fact.split(' ', 3).join(' '))
}
