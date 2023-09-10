import { HttpException } from "@/exceptions/HttpException";

describe('HttpException', () => {
	it('create an instance witht the correct status and message', () => {
		const status = 404;
		const message = 'Not Found'

		const error = new HttpException(status, message)

		expect(error).toBeInstanceOf(HttpException)
		expect(error.status).toBe(status)
		expect(error.message).toBe(`HTTP ${status}: ${message}`)
	})
})
