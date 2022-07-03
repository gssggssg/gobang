import { history } from 'umi';
import userApi from '@/services/user';
import { message } from 'antd';

export interface ResponseGenerator {
    config?: any,
    data?: any,
}

// 棋子颜色
enum ColorPiece {
    white = "white",
    black = "black",
}

const Model = {
    namespace: 'gobang',
    state: {
        nextChessPiece: ColorPiece.black,
        whitePieces: [],
        blackPieces: [],
    },
    effects: {
        // 登录
        *login({ payload }: any, { call, put }: any) {
            const data: ResponseGenerator = yield call(userApi.login.login, { user: { ...payload } });
            if (data.data.code === 1 && data.data.data) {
                yield put({
                    type: 'update',
                    payload: {
                        access_token: data.data.token,
                        user: data.data.data,
                    },
                });
                message.success('登录成功');
                history.push('/');
                sessionStorage.setItem('token', data?.data?.data?.token)
            }
            data.data.code !== 1 && message.success('登录失败');
        },
    },
    reducers: {
        update(state: any, { payload }: any) {
            return { ...state, ...payload }
        },
    }
};
export default Model;