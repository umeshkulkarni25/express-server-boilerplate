import {
    GraphQLBoolean,
    GraphQLFloat,
    GraphQLList,
    GraphQLObjectType,
    GraphQLString,
} from 'graphql';
const categoryType = new GraphQLObjectType({
    name: 'Category',
    fields: () => ({
        pid: {
            type: GraphQLString,
            resolve: (category) => category._id
        },
        title: {
            type: GraphQLString
        },
        description: {
            type: GraphQLString
        },
        isRoot: {
            type: GraphQLBoolean
        },
        children: {
            type: new GraphQLList(categoryType)
        },
        image: {
            type: GraphQLString
        }
    })
});

export default categoryType;