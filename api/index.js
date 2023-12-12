const router = require('express').Router()
const studentApiHandler = require('./student')
const teachersApiHandler = require('./teachers')
const classroomApiHandler = require('./classroom')


router.use('/student', studentApiHandler)
router.use('/teachers', teachersApiHandler)
router.use('/classroom', classroomApiHandler)


module.exports = router