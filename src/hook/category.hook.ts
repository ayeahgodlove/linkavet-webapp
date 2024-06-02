import { ICategory } from '@model/category.model';
import { clearCategory, setCategory } from '@store/slice/category.slice';
import { RootState } from '@store/store';
import { useDispatch, useSelector } from 'react-redux';

export const useCategory = () => {
  const dispatch = useDispatch();
  const category = useSelector((state: RootState) => state.category.category);
  const categories = useSelector((state: RootState) => state.category.categories);

  const selectCategory = (category: ICategory) => {
    dispatch(setCategory(category));
  };

  const resetCategory = () => {
    dispatch(clearCategory());
  };

  return {
    category,
    selectCategory,
    resetCategory,
    categories
  };
};
