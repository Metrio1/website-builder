import { useGetLayoutQuery } from '../api/api.js';

const useLayout = (templateId) => {
  const { data: layout, isLoading, error } = useGetLayoutQuery(templateId);
  return { layout, isLoading, error };
};

export default useLayout;
