const { Router } = require("express");
const router=Router();
const userRouter= require("./user");
const accountRouter= require("./account");

router.use("/user",userRouter);
router.use("/account",accountRouter);

// router.use("/user");


module.exports=router;





