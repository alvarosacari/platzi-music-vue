import { get } from '~/api/base'

export const Artist = {
  index: () => get('/browse/new-releases')
}
