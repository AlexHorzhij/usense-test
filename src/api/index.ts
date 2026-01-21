import type { ResponseNews } from '../types';
import client from './client';
import { clearParams } from '../helpers/clearParams';

export const API = {
  getNews: async (params: Record<string, string>): Promise<ResponseNews> => {
    const response = await client.get('', { params: clearParams(params) });
    return response.data;
  },
};
