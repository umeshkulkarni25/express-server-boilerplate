import { GraphQLList, GraphQLString } from 'graphql';
import categoryType from '../types/categoryType';
import { findCategories } from '../../processors/categoryProcessor';
const categories = {
  type: new GraphQLList(categoryType),
  resolve: async () => {
    return await findCategories();
  }
}

export default categories;