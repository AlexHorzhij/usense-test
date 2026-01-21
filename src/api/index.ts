import type { ResponseNews } from '../types';
import client from './client';

export const API = {
  getNews: async (params: Record<string, string>): Promise<ResponseNews> => {
    const response = await client.get('', { params });
    return response.data;
  },
};
