const models = require('../../models')

async function createClass(req, res, next) {
    try {
        const data = req.body
        const foundStudent = await models.Students.findByPk(data.studentId)
        const foundTeacher = await models.Teachers.findByPk(data.teacherId)
        if(foundStudent && foundTeacher){   
            const createdClassroom = await models.Classroom.create(data)    
            res.json({
                success: true,
                createdClassroom
            })
        } else {
            res.json({
                success: false,
                message: "ID not found."
            })        
        }
    } catch (error) {
        console.log(error)
    }
}

async function getClasses(req, res, next) {
    try {
        const allClasses = await models.Classroom.findAll({
            order: [['id', 'ASC']]
        })
        res.json({
            success: true,
            allClasses
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    createClass,
    getClasses
}
