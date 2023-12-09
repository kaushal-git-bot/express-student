const router = require('express').Router()
const studentApiHandler = require('./student')
const teachersApiHandler = require('./teachers')

router.use('/student', studentApiHandler)
router.use('/teachers', teachersApiHandler)

module.exports = router