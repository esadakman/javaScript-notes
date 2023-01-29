const input = $("#input-area");
$(document).ready(function () {});

$("#get-post").click(function () {
  getBlogData();
  $(this).prop("disabled", true);
});

const getBlogData = async () => {
  let url = `https://jsonplaceholder.typicode.com/posts`;
  $.ajax({
    type: "GET",
    url: url,
    dataType: "json",
    success: (response) => {
      $.each(response.slice(0, 5), function (index, value) {
        $(".list-group").append(`
        <li class="list-group-item ">
            id : ${value.id}
            <br>  
            title :${value.title}
        </li>
        `);
      });
    },
    complete: () => {
      //   form.trigger("reset");
    },
    error: (XMLHttpRequest) => {
      console.log((XMLHttpRequest.status = 404));
    },
  });
};

$(function () {
  input.keyup(function () {
    $("#post-data").prop("disabled", false);
  });
});

$("#post-data").on("click", function () {
  postData();
  $("#post-data").prop("disabled", true);

});

const postData = async () => {
  let url = `https://jsonplaceholder.typicode.com/users/`;
  $.ajax({
    type: "POST",
    url: url,
    dataType: "json",
    data: { name: input.val() },
    success: (response) => {
      console.log(response);
      $("#output-text").text(`Post Result: ${JSON.stringify(response)}`);
    },
    // beforeSend: (request) => {
    //   console.log("before ajax send");
    // },
    complete: () => {
      input.val("");
    },
    error: (XMLHttpRequest) => {
      console.log((XMLHttpRequest.status = 404));
    },
  });
};

const updateData = async (data) => {
  let url = `https://jsonplaceholder.typicode.com/posts/1`;
  const { id, title, body, userId } = data;
  $.ajax({
    type: "PUT",
    url: url,
    dataType: "json",
    data: { id: id, title: title, body: body, userId: userId },
    success: (response) => {
      console.log(response);
      $("#output-text").prepend(`
      <div>
            Put Data:
            id : ${id} 
            title :${title} 
            body :${body} 
            userId: ${userId}
      </div>

        `);
    },
    complete: () => {
      $("form").trigger("reset");
    },
    error: (XMLHttpRequest) => {
      console.log((XMLHttpRequest.status = 404));
    },
  });
};

$("form").submit(function (e) {
  e.preventDefault();
  const data = {
    id: $("#idInput").val(),
    title: $("#titleInput").val(),
    body: $("#bodyInput").val(),
    userId: $("#userIdInput").val(),
  };
  updateData(data);
});

$("#delete-post").on("click", function () {
  deleteData();
});

const deleteData = async () => {
  let url = `https://jsonplaceholder.typicode.com/posts/1`;
  $.ajax({
    type: "DELETE",
    url: url,
    success: (response) => {
      console.log(response);
    },
    // complete: () => {},
    error: (XMLHttpRequest) => {
      console.log((XMLHttpRequest.status = 404));
    },
  });
};
