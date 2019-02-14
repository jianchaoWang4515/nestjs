interface LabelledValue {
    code?: string;
    data?: any;
    message?: string;
}
export class resBody {
    constructor({ code = 'success', data = null, message = '操作成功' }) {
        return {
            code,
            data,
            message
        };
    }
}