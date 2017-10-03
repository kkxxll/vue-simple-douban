export class Movie {
  constructor({images, rating, title}) {
    this.image = images.large
    this.rating = Number((rating.average / 2).toFixed(1))
    this.title = title
  }
}
