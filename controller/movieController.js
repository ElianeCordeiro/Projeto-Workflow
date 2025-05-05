let movies = [
  { id: 1, title: "10 coisas que odeio em você", date: "31-03-1999" },
  { id: 2, title: "Infiltrado na clã", date: "22-11-2018" },
  { id: 3, title: "Os fantasmas ainda se divertem: Beetlejuice Bettlejuice", date: "05-09-2024" }
]

const movieController = {

  readAll: (req, res) => {
    res.status(200).json(movies)
  },

  create: (req, res) => {
    const {title, date} = req.body

    const newMovie = {
      id: movies.length + 1,
      title,
      date
    }

    movies.push(newMovie)
    res.status(201).json(newMovie)
  }

};
 
module.exports = movieController;



