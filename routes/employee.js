const express = require ('express')
const db = require ('../db')
const utils = require ('../utils')
const router = express.Router()

router.get('/',(request,response)=>{
    const connection = db.connect()
    const statement = 'select * from employee'
    connection.query(statement,(Error,Data)=>{
        connection.end()
        const result = utils.createResult(Error, Data)
        response.send(result)
    })

})

router.post('/:id',(request,response)=>{
    const {name, address ,email} = request.body 
    const connection = db.connect()
    const statement = `insert into employee (name , email ,address) values ('${name}','${email}','${address}' )`
    connection.query(statement,(Error,Data)=>{
        connection.end()
        const result = utils.createResult(Error, Data)
        response.send(result)
    })

})
router.put('/:id',(request,response)=>{
    const {name, address ,email} = request.body 
    const connection = db.connect()
    const statement = `update  employee set name = '${name}'  email='${email}' ,address = '${address}' where id = '${id}'`
    connection.query(statement,(Error,Data)=>{
        connection.end()
        const result = utils.createResult(Error, Data)
        response.send(result)
    })

})



router.delete('/:id',(request,response)=>{
    const {name, address ,email} = request.body 
    const connection = db.connect()
    const statement = `delete from  employee where id = '${id}'`
    connection.query(statement,(Error,Data)=>{
        connection.end()
        const result = utils.createResult(Error, Data)
        response.send(result)
    })

})
module.exports = router