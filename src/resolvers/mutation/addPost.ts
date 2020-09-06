const { PubSub } = require("apollo-server");
export const pubsub = new PubSub();

export const POST_ADDED = "POST_ADDED";

export default (root, args, context) => {
  pubsub.publish(POST_ADDED, { postAdded: args });
  return args;
};
