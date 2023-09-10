import AuthController from "@/controllers/auth.controller";
import { Routes } from "@/interfaces/routes.interface";
import { validate } from "@/middlewares/validation.middleware";
import { SignupSchema } from "@/schemas/auth.schema";
import { API_ROUTES } from "@/utils/contants";
import { Router } from "express";


class AuthRoute implements Routes {
	public path = API_ROUTES.AUTH
	public router = Router()
	private authController: AuthController

	constructor(authController: AuthController) {
		this.authController = authController
		this.initializeRoutes()
	}

	private initializeRoutes() {
		this.router.post(`${this.path}/${API_ROUTES.SIGN_UP}`, validate(SignupSchema), this.authController.signUp)
	}
}


export default AuthRoute
