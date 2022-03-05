require('dotenv').config()

const {version: VERSION, name: NAME} = require("./package.json");
const NODE_PORT = process.env.NODE_PORT || 2222;

const Log = require('./controller/log.js')
Log.init(NAME)

// ------------------- Express
const app = require('./controller/app');
const defaultRouter = require('./controller/default')
app.use('/', defaultRouter)

// ------------------- Gather
const Gather = require('./controller/gather/gather');
const gather = new Gather(() => {
//    bot.enter()
    // gather.showInteractionEvents()
})
app.use('/gather', gather.router)

// Default Route Home Screen
app.get('/sampleauth', (req, res) => {
    res.render("auth-sample", { title: NAME, 'version' : VERSION })
})

// ------------------- Gather Modules
// --------- Bot
//const Bot = require('./modules/bot')
//const bot = new Bot(gather)

// ------------------- Spin up express
app.listen(NODE_PORT,() => {
    console.log(`Starting on NODE_PORT: ${NODE_PORT}`)
})
