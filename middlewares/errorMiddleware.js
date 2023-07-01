const errorMiddlerware = (err,req,res,next)=>{
    const {code = 500 , message }= err;
    console.log("==> Error middleware");
    res.status(code).json({
        success:false,
        message:message || "internal Error"
    });
};

module.exports = {
    errorMiddlerware,
}