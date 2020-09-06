<script lang="typescript">
  import { query, subscribe, mutate } from "fatcat";

  let comments = [];
  query("{ posts { author comment }}", {}).then((response) => {
    comments = response.posts;
  });
  let subscription = subscribe("subscription { postAdded { author comment } }");

  subscription.subscribe((data) => {
    comments.push(data.data.postAdded);
    comments = comments;
  });

  setTimeout(() => {
    mutate(
      "mutation addPost($author: String, $comment: String) { addPost(author:$author, comment:$comment) { author } }",
      { author: "asdf", comment: "fdlkskjf" }
    ).then((response) => {
      comments = response.posts;
    });
  }, 10000);
</script>

Home Page! It only bloody works! {#each comments as post}
  <p>{post.author} said {post.comment}</p>
{/each}
