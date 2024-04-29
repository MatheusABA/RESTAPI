import multer from "multer";
import multercfg from "../config/multercfg";

import Photo from "../models/Photo";

const upload = multer(multercfg).single('photo');

class PhotoController {

	store(req,res) {
		return upload(req, res, async (error) => {
			if(error) {
				return res.status(400).json({
					errors: [error.code],
				});
			}

			try {
				console.log(req.body.employee_id)
				const { originalname, filename } = req.file;
				const { employee_id } = req.body;
				const photo = await Photo.create({ originalname, filename, employee_id })

				return res.json(photo);

			} catch (e) {
				return res.status(400).json({errors: 'Employee doesn`t exist!'})
			}
		});
	}
}

export default new PhotoController();
