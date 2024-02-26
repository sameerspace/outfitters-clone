import { useQuery } from '@tanstack/react-query';
import axiosInstance from '../axios-instance';

const getProducts = (productHandle: string): Promise<Product> =>
  axiosInstance.request({
    method: 'GET',
    url: `api/v1/products/${productHandle}`,
  });

export const useProducts = (productHandle: string) => {
  return useQuery({
    queryKey: ['products', productHandle],
    queryFn: () => getProducts(productHandle),
  });
};
