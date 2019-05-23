import Category from '../models/Category';
import _ from 'lodash';

let findCategories = async () => {
  let rootCategories = await Category.find({ isRoot: true });
  for (let root of rootCategories) {
    let orderedListOfChildren = await Category.find({ parent: root._id });
    // done for specific oredering request
    let otherSubCategory = _.remove(orderedListOfChildren, (child) => { return child.code === 'others' });
    orderedListOfChildren.push(otherSubCategory[0]);
    root.children = orderedListOfChildren;
  }
  return rootCategories;
}

export {
  findCategories
}