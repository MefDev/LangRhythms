import App from "@/app";
import IndexRoute from "@/routes/index.route";
import { API_ROUTES } from "@/utils/contants";
import request from 'supertest'

describe(`Get ${API_ROUTES.API_PREFIX}`, function () {
	const app = new App([new IndexRoute()])
	it('responds with Hello, World! This is LangRythms', async function () {
		const res = await request(app.app).get(`${API_ROUTES.API_PREFIX}`);
		expect(res.status).toBe(200)
		expect(res.body.success).toBe(true)
		expect(res.body.data).toBe("Hello World from LangRythms!")
	})
})
