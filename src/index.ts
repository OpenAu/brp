import {createServer} from 'node:http'
import {AddressInfo} from "node:net"

const server = createServer((req, res) => {
    console.info(req.method, req.url)
    if (req.method === 'GET' && req.url === '/') return res.end('Hello World!')
    res.statusCode = 404
    res.end()
})

server.listen(7799)

console.info('Server started on', (server.address() as AddressInfo).port)
