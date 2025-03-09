import { resolvers as postResolver } from "./post.resolver.js";
import { resolvers as userResolver } from "./user.resolver.js";
import { GraphQLResolverMap } from "@apollo/subgraph/dist/schema-helper/resolverMap.js";

interface Mix {
    Query: {},
    Mutation:{}
}
const mix = {} as Mix
const resolvers = [
    postResolver,
    userResolver
]

resolvers.forEach(resolver =>{
    const [[_,propsQuery],[__,propsMutation]] = Object.entries(resolver);
    mix["Query"] = Object.assign(mix["Query"] || {}, propsQuery);
    mix["Mutation"] = Object.assign(mix["Mutation"] || {}, propsMutation);
});

export default mix as unknown as GraphQLResolverMap<unknown>