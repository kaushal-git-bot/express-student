const models = require('../../models')

async function createTeacher(req, res, next) {
    try {
        const data = req.body
        const createTeacher = await models.Teachers.create(data)
        res.json({
            success: true,
            createTeacher
        })
    } catch (error) {
        console.log(error)
    }
}

async function getTeachers(req, res, next) {
    try {
        const allTeachers = await models.Teachers.findAll()
        res.json({
            success: true,
            allTeachers
        })
    } catch (error) {
        console.log(error)
    }
}

async function updateTeachers(req, res, next) {
    try {
        const data = req.body
        const updatedTeacher = await models.Teachers.update(data, {
            where: {
                id: req.params.id
            }
        })  
        res.json({
            success: true,
            updatedTeacher
        })
    } catch (error) {
        console.log(error)
    }
}

async function deleteTeachers(req, res, next){
    try {
        const deletedTeacher = await models.Teachers.destroy( {
            where: {
                id: req.params.id
            }
        })
        res.json({
            success: true,
            deletedTeacher
        })
    } catch (error) {
        console.log(error)
    }
}



module.exports = {
    createTeacher,
    getTeachers,
    updateTeachers,
    deleteTeachers

}
