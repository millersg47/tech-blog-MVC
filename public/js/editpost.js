const editFormHandler = async (event) => {
  event.preventDefault();
  try {
    // Collect values from the blog post form
    const content = document.querySelector("#post-content").value.trim();
    const title = document.querySelector("#post-name").value.trim();

    if (content && title) {
      // Send a POST request to the API endpoint
      const response = await fetch(`/api/posts/${id}`, {
        method: "PUT",
        body: JSON.stringify({ content, title }),
        headers: { "Content-Type": "application/json" },
      });

      const results = await response.json();
      console.log(results);

      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace("/dashboard");
      } else {
        alert(response.statusText);
      }
    }
  } catch (err) {
    console.log(err.error[0].message);
  }
};

document
  .querySelector(".updated-post")
  .addEventListener("click", editFormHandler);
