const http = require('http');
const Koa = require('koa');
const route = require('koa-route');
const cors = require('koa2-cors');

const app = new Koa();
app.use(cors());

let nextId = 1;
const skills = [
    { id: nextId++, name: "React" },
    { id: nextId++, name: "Redux" },
    { id: nextId++, name: "Redux Thunk" },
    { id: nextId++, name: "RxJS" },
    { id: nextId++, name: "Redux Observable" },
    { id: nextId++, name: "Redux Saga" },
];

const showAllSkills = ctx => {
    ctx.response.body = skills;
};

let isEven = true;

const searchSkills = (ctx, searchVal) => {
    if (Math.random() > 0.75) {
        ctx.response.status = 500;
        return;
    };

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            ctx.response.body = skills.filter(skill => skill.name.toLowerCase().includes(searchVal.toLowerCase()) === true);
            resolve();
        }, isEven ? 1 * 1000 : 3 * 1000);
        isEven = !isEven;
    });
}

app.use(route.get('/api', showAllSkills));

app.use(route.get('/api/search/:searchVal', searchSkills));

const port = 7070;
const server = http.createServer(app.callback());
server.listen(port);