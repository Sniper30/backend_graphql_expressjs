import { resolvers as postResolver } from "./post.resolver.js";
import { resolvers as userResolver } from "./user.resolver.js";
const mix = {};
const resolvers = [
    postResolver,
    userResolver
];
resolvers.forEach(resolver => {
    const [[_, propsQuery], [__, propsMutation]] = Object.entries(resolver);
    mix["Query"] = Object.assign(mix["Query"] || {}, propsQuery);
    mix["Mutation"] = Object.assign(mix["Mutation"] || {}, propsMutation);
});
export default mix;
//# sourceMappingURL=index.js.map