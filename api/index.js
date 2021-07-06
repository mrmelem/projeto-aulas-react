const express = require('express')

const app = express();

const cors = require('cors');

const middleware = (req, res, next) => {

    if (!req.headers.authorization) return res.status(401).json({ msg: "oburro" });

    const [hashType, hash] = req.headers.authorization.split(' ');

    if (hash === '123') return next();

    return res.status(401).json({ msg: "Você não tem permissão para acessar essa rota." });
}

const users = [
    { name: "Pedro", role: "teacher", age: "20" },
    { name: "Mota", role: "student", age: '15' }
]


app.use(express.json());

app.use(cors());

app.get('/', (req, res) => {
    return res.json({ msg: "Ok" });
})


app.post('/login', (req, res) => {
    const { username, key } = req.body;

    if (username === 'admin' && key === 'admin') {
        return res.status(200).json({ token: '123' });
    }

    return res.status(401).json({ msg: 'Bad login' });
})

app.post('/', (req, res) => {
    return res.json({ msg: "Ok do post" });
})

app.get('/admin', middleware, (req, res) => {
    return res.status(200).json({ msg: "Rota admin" });
})

app.get('/users', (req, res) => {
    return res.status(200).json(users)
})

app.post('/users', (req, res) => {
    console.log(req.body);
    users.push(req.body);
    return res.status(201).send();
})


app.listen(3333, () => {
    console.log("Running at port 3333. ")
})