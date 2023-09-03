export class HttpException extends Error {
	public status: number;
	public message: string;

	constructor(status: number, message: string){
		super(`HTTP ${status}: ${message}`);
		this.status = status;
		this.message = `HTTP ${status}: ${message}`;
	}
}
