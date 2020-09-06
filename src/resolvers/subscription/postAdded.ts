import { pubsub, POST_ADDED } from "../mutation/addPost";

export default {
  // Additional event labels can be passed to asyncIterator creation
  subscribe: () => pubsub.asyncIterator([POST_ADDED]),
};
