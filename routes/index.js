import express from "express";
import { getUsers, Register, Login, Logout } from "../controllers/Users.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";
import { saveFormData, getFormResponses} from '../controllers/FormController.js';
import { getDateAttendance } from '../controllers/DateAttendanceController.js';
import { handleVerifikasiForm } from "../controllers/VerifikasiController.js";
// import { combine } from "../controllers/Combine.js";

const router = express.Router();


router.get('/users', verifyToken, getUsers);
router.post('/users', Register);
router.post('/login', Login);
router.get('/token', refreshToken);
router.delete('/logout', Logout);
router.post('/api/form', saveFormData, handleVerifikasiForm);
router.get('/api/forms', getFormResponses);
router.get('/api/dateAttendance', getDateAttendance);
// router.post('/api/form', handleVerifikasiForm);
// router.post('api/combine', combine);

export default router;