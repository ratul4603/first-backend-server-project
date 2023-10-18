
const router = require("express").Router();
const { studentsController, studentsLoginController, studentsSignupController, studentsSignupInfoController, singleStdInfoController, showInfo, showInfoAll, singleStdDeleteController, singleStdDeleteControllerShow, stdCnfrmIdControllerShow, stdCnfrmIdController, updateInfoController } = require("../controllers/students.controller");
const { upload } = require("../uploads/upload");


router.get("/", studentsController);
router.get("/login", studentsLoginController);
router.get("/signup", studentsSignupController);

router.post("/signupInfo", upload.single("image") ,studentsSignupInfoController);


router.get("/login/single/info", singleStdInfoController);
router.post("/login/single/info", showInfo);

router.get("/all/info", showInfoAll);

router.get("/single/update", singleStdDeleteControllerShow);
router.post("/single/update", singleStdDeleteController);

router.get("/single/confirm/identity", stdCnfrmIdControllerShow);
router.post("/single/confirm/identity", stdCnfrmIdController);
router.put("/update/info", updateInfoController);


module.exports = router;