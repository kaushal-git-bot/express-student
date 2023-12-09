const models = require('../../models')

async function createStudent(req, res, next) {
    try {
        const data = req.body
        const createdStudent = await models.Students.create(data)
        res.json({
            success: true,
            createdStudent
        })
    } catch (error) {
        console.log(error)
    }
}

async function getStudents(req, res, next) {
    try {
        const Allstudents = await models.Students.findAll({
            order: [['id', 'ASC']]
        })
        res.json({
            success: true,
            Allstudents
        })
    } catch (error) {
        console.log(error)
    }
}

async function updateStudent(req, res, next){
    try {
        const data = req.body
        const updatedStudent = await models.Students.update(data, {
            where: {
                id: req.params.id
            }
        })
        res.json({
            success: true,
            updatedStudent
        })
    } catch (error) {
        console.log(error)
    }
}

async function deleteStudent(req, res, next){
    try {
        const deletedStudent = await models.Students.destroy( {
            where: {
                id: req.params.id
            }
        })
        res.json({
            success: true,
            deletedStudent
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    createStudent,
    getStudents,
    updateStudent,
    deleteStudent
}
