const router = require('express').Router()
const {createClass, getClasses} = require('./classroom')

router.post('/', createClass)
router.get('/', getClasses)


module.exports = router