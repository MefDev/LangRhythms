import { IResponseStatus } from '@/interfaces/responseStatus.interface';

const initStatus: IResponseStatus = {
  status_code: 404,
  success: false,
  data: null,
  error: null,
  timestamp: null,
};

const makeResponseJson = (data: any, success = true) => {
  return {
    ...initStatus,
    status_code: 200,
    success,
    data,
    timestamp: new Date(),
  };
};

export { makeResponseJson };
