import { ApolloServer, gql } from "apollo-server-micro";
import Cors  from 'micro-cors' 

const cors = Cors()

const db = [
  {
    "userId": 0,
    "name":"mark",
    "age": 5
  }
]

const typeDefs = gql`
  type Posts {
    userId: Int!
    name: String!
    age: Int!
  }

  type Query {
    getData: [Posts!]
  }

  type Mutation {
    addUser(userId: Int!, name: String! , age: Int!): Posts
  }

  type Mutation {
    deleteUser(userId: Int!): Posts!
  }
`

const resolvers = {
  Query: {
    getData: async () => {
      return  db
    }
  },

  Mutation: {
    addUser: async(_,args) => {
     db.push({...args})
    },

    deleteUser: async(_,{userId}) => {
      db.indexOf(userId).pop()
    }

   
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



// [
//   {
//     "title" : "Big Buck Bunny",
//     "url":"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
//   },
//   {
//     "title" : "Elephant Dream",
//     "url":"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
//   },
//   {
//     "title" : "For Bigger Blazes",
//     "url":"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
//   },
//   {
//     "title" : "For Bigger Escape",
//     "url":"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
//   },
//   {
//     "title" : "For Bigger Fun",
//     "url":"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
//   },
//   {
//     "title" : "For Bigger Joyrides",
//     "url":"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
//   },
//   {
//     "title" : "For Bigger Meltdowns",
//     "url":"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"
//   },
//   {
//     "title" : "Sintel",
//     "url":"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4"
//   },
//   {
//     "title" : "Subaru Outback On Street And Dirt",
//     "url":"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4"
//   },
//   {
//     "title" : "Tears of Steel",
//     "url":"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"
//   },
//   {
//     "title" : "Volkswagen GTI Review",
//     "url":"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4"
//   },
//   {
//     "title" : "We Are Going On Bullrun",
//     "url":"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4"
//   },
//   {
//     "title" : "What care can you get for a grand?",
//     "url":"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4"
//   }
// ]


// [
//   {
//     "title":"Bass voice.",
//     "url": "http://websrvr90va.audiovideoweb.com/va90web25003/companions/Foundations%20of%20Rock/5.01.mp3"
//   },
//   {
//     "title":"Bass voice.",
//     "url": "http://websrvr90va.audiovideoweb.com/va90web25003/companions/Foundations%20of%20Rock/5.02.mp3"
//   },
//   {
//     "title":" Tenor voice",
//     "url": "http://websrvr90va.audiovideoweb.com/va90web25003/companions/Foundations%20of%20Rock/5.03.mp3"
//   },
//   {
//     "title":"Alto voice",
//     "url": "http://websrvr90va.audiovideoweb.com/va90web25003/companions/Foundations%20of%20Rock/5.04.mp3"
//   },
//   {
//     "title":"Soprano voice",
//     "url": "http://websrvr90va.audiovideoweb.com/va90web25003/companions/Foundations%20of%20Rock/5.05.mp3"
//   },
//   {
//     "title":"paza-modules",
//     "url":"http://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3"
//   },
//   {
//     "title":"Rock",
//     "url":"http://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/music/menu.ogg"
//   },
//   {
//     "title":"Guitar",
//     "url":"http://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/music/race1.ogg"
//   },
//   {
//     "title":"Guitar hero",
//     "url":"http://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/music/lose.ogg"
//   },
//   {
//     "title":"Ate Apeal",
//     "url":"http://commondatastorage.googleapis.com/codeskulptor-demos/pyman_assets/ateapill.ogg"
//   }
// ]