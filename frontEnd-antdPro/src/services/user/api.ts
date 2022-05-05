// @ts-ignore
/* eslint-disable */
import request from '@/utils/request ';

/** 获取当前的用户 GET /api/user/get */
export async function getUser(options?: { [key: string]: any }) {
  return request<{ data: API.CurrentUser; }>('/api/user/get', {
    method: 'GET',
    ...(options || {}),
  });
}
