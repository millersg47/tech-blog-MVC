const delButtonHandler = async (event) => {
  event.preventDefault();
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");
    console.log(id);

    const response = await fetch(`/api/posts/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to delete project");
    }
  }
};

document.querySelector(".delete").addEventListener("click", delButtonHandler);

// document
//   .querySelector(".create")
//   .addEventListener("click", createButtonHandler);

// document.querySelector(".edit").addEventListener("click", editButtonHandler);
