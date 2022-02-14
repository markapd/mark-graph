import { ApolloServer, gql } from "apollo-server-micro";
import Cors  from 'micro-cors' 


const cors = Cors()

let book = [
	{
		id:1,
		name: "The Hungarian Sausage",
		author: "Ben Grunfeld",
	},
	{
		id:2,
		name: "The Hungarian Sausage",
		author: "Ben Grunfeld",
	},
	{
		id:3,
		name: "The Hungarian Sausage",
		author: "Ben Grunfeld",
	},
	{
		id:4,
		name: "The Hungarian Sausage",
		author: "Ben Grunfeld",
	},
	{
		id:5,
		name: "The Hungarian Sausage",
		author: "Ben Grunfeld",
	},
	{
		id:6,
		name: "The Hungarian Sausage",
		author: "Ben Grunfeld",
	},
	{
		id:7,
		name: "The Hungarian Sausage",
		author: "Ben Grunfeld",
	},
	{
		id:8,
		name: "The Hungarian Sausage",
		author: "Ben Grunfeld",
	},
] ;

const typeDefs = gql`
  type Book {
		id: Int
    name: String
    author: String
  }
  type Query {
    book: [Book]
  }
  type Mutation {
    updateBook(name: String!, author: String!): Book
		addBook(id: Int!, name: String!, author: String!): Book
  }
 
`;

const resolvers = {
  Query: {
    book: () => book,
  },

  Mutation: {
    updateBook: (root, args) => {
      book.name = args.name;
      book.author = args.author;
      return book;
    },
		addBook: (root, args) => {
     return addBook([{book.id=args.id, name=args.name,author=args.author}])
    },
  },
};


const server = new ApolloServer({ typeDefs, resolvers });
const startServer = server.start()

export default cors(async function handler(req, res){
	if (req.method == "OPTIONS"){
		res.end()
		return false
	}
	await startServer;
	await server.createHandler({ path: "/api/graphql-data" })(req, res);
}
)
export const config = {
  api: {
    bodyParser: false,
  },
};
