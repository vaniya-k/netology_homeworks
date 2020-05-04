const http = require('http');
const Koa = require('koa');
const route = require('koa-route');
const cors = require('koa2-cors');

const app = new Koa();
app.use(cors());

let nextId = 1;
const services = [
    { id: nextId++, name: 'Замена стекла', price: 21000, content: 'Стекло оригинал от Apple'},
    { id: nextId++, name: 'Замена дисплея', price: 25000, content: 'Дисплей оригинал от Foxconn'},
    { id: nextId++, name: 'Замена аккумулятора', price: 4000, content: 'Новый на 4000 mAh'},
    { id: nextId++, name: 'Замена микрофона', price: 2500, content: 'Оригинальный от Apple'},
];

const listAllServices = ctx => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(Math.random() > 0.5) {
                reject(new Error('Something bad happened'));
            }

            ctx.response.body = services.map(service => ({id: service.id, name: service.name, price: service.price}));
            resolve();
        }, 1500)
    });
};

const showDetailsById = (ctx, id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(Math.random() > 0.5) {
                reject(new Error('Something bad happened'));
            }

            const index = services.findIndex(service => service.id === Number(id));
            if (index === -1) {
                reject(new Error('Not found'));
            }

            ctx.response.body = services[index];
            resolve();
        }, 1500)
    });
}

app.use(route.get('/api/services', listAllServices));

app.use(route.get('/api/services/:id', showDetailsById));

const port = 7070;
const server = http.createServer(app.callback());
server.listen(port);