const commentFormHandler = async (event) => {
  event.preventDefault();
  try {
    // Collect values from the login form
    const comment_text = document.querySelector("#comment-text").value.trim();
    const post_id =
      window.location.href.split("/")[
        window.location.href.split("/").length - 1
      ];

    console.log(comment_text, post_id);
    if (comment_text) {
      // Send a POST request to the API endpoint
      const response = await fetch("/api/comments", {
        method: "POST",
        body: JSON.stringify({ comment_text, post_id }),
        headers: { "Content-Type": "application/json" },
      });

      const results = await response.json();
      console.log(results);

      if (response.ok) {
        // If successful, redirect the browser to the profile page
        location.reload();
      } else {
        alert(response.statusText);
      }
    }
  } catch (err) {
    console.log(err);
  }
};

document
  .querySelector("#comment-form")
  .addEventListener("submit", commentFormHandler);
