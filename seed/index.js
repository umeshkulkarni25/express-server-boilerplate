import categories from './categories';
import Category from '../models/Category';
import _ from 'lodash';

let populateCategories = async () => {
    await Category.deleteMany({});
    _.each(categories, async (category) => {
        let { name, index } = category;
        let parent = new Category({
            'title': name,
            'index': index,
            'code': _.lowerCase(name).replace(/\s/g, ''),
            'description': name,
            'isRoot': true,
            'parent': null,
            'image': 'https://media.wired.com/photos/5932988b9be5e55af6c261cb/master/pass/learning-styles.jpg'
        });
        let savedParent = await parent.save();
        _.each(category.children, async (category) => {
            let subCategory = new Category({
                'title': category,
                'code': _.lowerCase(category).replace(/\s/g, ''),
                'description': category,
                'isRoot': false,
                'parent': savedParent._id,
                'image': 'https://media.wired.com/photos/5932988b9be5e55af6c261cb/master/pass/learning-styles.jpg'
            });
            await subCategory.save();
        })
    })
}

let seed = () => {
    populateCategories();
}

export default seed;