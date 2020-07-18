import { get } from '~/api/base'

export const Song = {
  songsByArtistId: ({ artistId }) =>
    get(`/artists/${artistId}/top-tracks?country=PE`)
}
