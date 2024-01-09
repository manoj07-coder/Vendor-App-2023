import express from 'express'
import { createVendor, deleteVendor, getVendor, getVendorList, updateVendor } from '../controllers/vendor.js';

const router  = express.Router();

router.post('/create',createVendor)
router.delete('/delete/:id',deleteVendor)
router.post('/update/:id',updateVendor)
router.get('/get/:id',getVendor)
router.get('/get',getVendorList)

export default router;