const postFormHandler = async (event) => {
  event.preventDefault();
  try {
    // Collect values from the blog post form
    const postContent = document.querySelector("#post-content").value.trim();
    const postName = document.querySelector("#post-name").value.trim();

    if (postContent && postName) {
      // Send a POST request to the API endpoint
      const response = await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({ postContent, postName }),
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

document.querySelector(".new-post").addEventListener("click", postFormHandler);
