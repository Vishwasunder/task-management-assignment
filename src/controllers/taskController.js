const Task = require('../models/Task')
const {taskValidationSchema} = require('../utils/validation')

const getAllTasks = async (req, res, next) => {
  try {
    const {status, priority, sort, limit = 10, skip = 0} = req.query
    const filter = {}
    if (status) filter.status = status
    if (priority) filter.priority = priority

    const tasks = await Task.find(filter)
      .sort(sort ? {[sort]: 1} : {})
      .limit(parseInt(limit))
      .skip(parseInt(skip))
    res.status(200).json(tasks)
  } catch (err) {
    next(err)
  }
}

const createTask = async (req, res, next) => {
  try {
    const {error} = taskValidationSchema.validate(req.body)
    if (error) return res.status(400).json({message: error.details[0].message})

    const newTask = new Task(req.body)
    const task = await newTask.save()
    res.status(201).json(task)
  } catch (err) {
    next(err)
  }
}

const getTaskById = async (req, res, next) => {
  try {
    const task = await Task.findById(req.params.id)
    if (!task) return res.status(404).json({message: 'Task not found'})
    res.status(200).json(task)
  } catch (err) {
    next(err)
  }
}

const updateTask = async (req, res, next) => {
  try {
    const {error} = taskValidationSchema.validate(req.body)
    if (error) return res.status(400).json({message: error.details[0].message})

    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
    if (!task) return res.status(404).json({message: 'Task not found'})
    res.status(200).json(task)
  } catch (err) {
    next(err)
  }
}

const deleteTask = async (req, res, next) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id)
    if (!task) return res.status(404).json({message: 'Task not found'})
    res.status(204).send()
  } catch (err) {
    next(err)
  }
}

module.exports = {getAllTasks, createTask, getTaskById, updateTask, deleteTask}
