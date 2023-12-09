const router = require('express').Router()
const { createTeacher, getTeachers, updateTeachers, deleteTeachers } = require('./teachers')

router.post('/', createTeacher)
router.get('/', getTeachers)
router.put('/:id', updateTeachers)
router.delete('/:id', deleteTeachers)

module.exports = router