const exporess = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const route = exporess.Router()
const line = require('./line')

const app = exporess()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.use('/api/v1', route)
app.set('port', process.env.PORT || 3001)

app.listen(app.get('port'), () => console.log('Run at port: ', app.get('port')))

const upload = async (req, res) => {

  try {
    const { contentID } = req.params

    line.getContent(contentID)
  } catch (e) {
    console.error(e)
    res.statusCode = 500
    res.json({ error: e })
  }
}

route.get('/:contentID', upload)
