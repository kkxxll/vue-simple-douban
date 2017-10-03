import Book from '@/pages/Book'
import Music from '@/pages/Music'
import Movie from '@/pages/Movie'
import MusicDetail from '@/pages/MusicDetail'

let routes = [
  {
    path: '/',
    redirect: '/music',
    name: 'index'
  },
  {
    path: '/book',
    name: 'book',
    component: Book
  },
  {
    path: '/movie',
    name: 'movie',
    component: Movie
  },
  {
    path: '/music',
    name: 'music',
    component: Music
  },
  {
    path: '/music/detail',
    name: 'musicDetail',
    component: MusicDetail
  }
]
routes.forEach(route => {
  route.meta = {}
  route.meta.children = route.name
})
export default routes
