import bookType from '../GqlSchemas/bookType';
import bookController from '../Controllers/books';

const graphql = require('graphql');

const { GraphQLNonNull, GraphQLString } = graphql;

const updateBook = {
	type: bookType,
	/* define the arguments that we should pass to the mutation
   here we require both book name and the author name 
   the id will be generated automatically 
*/
	args: {
		id: {
			type: new GraphQLNonNull(GraphQLString),
		},
		name: {
			type: new GraphQLNonNull(GraphQLString),
		},
		author: {
			type: new GraphQLNonNull(GraphQLString),
		},
	},
	resolve: async (root, args) => {
		return bookController.updateBook(args);
	},
};

export default updateBook;
