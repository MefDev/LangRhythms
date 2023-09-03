export interface IResponseStatus {
  status_code: number;
  success: boolean;
  data: any;
  error: any;
  timestamp: string | Date;
}
