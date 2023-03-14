const Calories = require('../models/Calories')

module.exports = {
    getCalories: async (req,res)=>{
        console.log(req.user)
        try{
            const calorieItem = await Calories.find({userId:req.user.id})
            const foodItem = await Calories.find()
            const itemsLeft = await Calories.countDocuments({userId:req.user.id, completed: false})
            res.render('calories.ejs', {calories: calorieItem, food: foodItem, left: itemsLeft, user: req.user})
        }catch(err){
            console.log(err)
        }
    },
    createCalories: async (req, res)=>{
        try{
            await Calories.create({
                calories: req.body.calorieItem, 
                food: req.body.foodItem,
                completed: false,
                userId: req.user.id
            })
            console.log('Food or Beverage has been added!')
            res.redirect('/calories')
        }catch(err){
            console.log(err)
        }
    },
    markComplete: async (req, res)=>{
        try{
            await Calories.findOneAndUpdate({_id:req.body.caloriesIdFromJSFile},{
                completed: true
            })
            console.log('Marked Complete')
            res.json('Marked Complete')
        }catch(err){
            console.log(err)
        }
    },
    markIncomplete: async (req, res)=>{
        try{
            await Calories.findOneAndUpdate({_id:req.body.caloriesIdFromJSFile},{
                completed: false
            })
            console.log('Marked Incomplete')
            res.json('Marked Incomplete')
        }catch(err){
            console.log(err)
        }
    },
    deleteCalories: async (req, res)=>{
        console.log(req.body.caloriesIdFromJSFile)
        try{
            await Calories.findOneAndDelete({_id:req.body.caloriesIdFromJSFile})
            console.log('Deleted Food or Beverage')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    }
}    