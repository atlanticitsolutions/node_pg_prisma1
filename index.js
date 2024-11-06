const express = require('express')

const app = express()
app.use(express.json())

app.use('/products', require('./routes/productRoute'))
app.use('/categories', require('./routes/categoryRoute'))

const port = process.env.PORT || 8080
app.listen(port, () => {
  console.log('Hello world listening on port', port)
})

// app.listen(3000, () => console.log('Server started on port 3000'))
