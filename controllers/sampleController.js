

exports.getMessage=(req,res,next)=>{
    res.status(200).json({
        status:'success',
        message:'swagath says hello'
    })
}


exports.postMessage = (req, res) => {
 const name=req.body.name
 const age=req.body.age
 const msg=`hello ${name}. you are ${age} years old`
  res.status(201).json({
    status: "success",
    message: msg,
  });
};