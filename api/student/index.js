const router = require('express').Router()
const { createStudent, getStudents, updateStudent, deleteStudent } = require('./student')


router.post('/', createStudent)
router.get('/', getStudents)
router.put('/:id', updateStudent)
router.delete('/:id', deleteStudent)


module.exports = router