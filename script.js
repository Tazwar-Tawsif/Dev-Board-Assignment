//date
function formattedDate(date) {
  const weekday = date.toLocaleDateString("en-US", { weekday: "short" });
  const day = date.getDate();
  const month = date.toLocaleDateString("en-US", { month: "short" });
  const year = date.getFullYear();
  return `${weekday}, ${day} ${month} ${year}`;
}

const date = new Date();
const currentDate = formattedDate(date);

document.getElementById("tarikh").innerText = currentDate;

document.getElementById("discover-blog").addEventListener("click", () => {
  window.location.href = "./codes/blog.html";
});

function reduceTask() {
  const remainingTask = parseInt(
    document.getElementById("task-left").innerText
  );

  let taskLeft = `0${remainingTask - 1}`;

  document.getElementById("task-left").innerText = taskLeft;
  if (taskLeft <= 0) {
    alert("All task completed");
    return;
  }
}

function updatedTask() {
  const totalTask = parseInt(
    document.getElementById("total-task-done").innerText
  );
  let updatedTotalTask = totalTask + 1;
  document.getElementById("total-task-done").innerText = updatedTotalTask;
}

function addHistory(task, time) {
  const new_paragraph = document.createElement("p");
  new_paragraph.innerText = `You have completed the task "${task}" at ${time.toLocaleTimeString()}`;
  new_paragraph.classList.add("bg-(--basic)", "p-4", "my-3");
  document.getElementById("task-history").appendChild(new_paragraph);
}

//handling completed task
document.getElementById("card-box").addEventListener("click", (event) => {
  const time = new Date();
  if (event.target.matches("button")) {
    const taskName =
      event.target.parentElement.parentElement.children[1].innerText;
    //show alert
    alert("Board Update Successfully");
    //function to reduce task
    reduceTask();
    //function to update task
    updatedTask();
    //disable button
    event.target.disabled = "true";
    //add task to history
    addHistory(taskName, time);
  }
});

//clear history
document.getElementById("clear-history").addEventListener("click", () => {
  document.getElementById("task-history").innerHTML = "";
});

//color picker
function randomColorCode() {
  const array = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];
  let color = "#";

  i = 6;
  while (i > 0) {
    let digit = Math.floor(Math.random() * 16);
    color += array[digit];
    i--;
  }

  return color;
}

document.getElementById("change-bg-color").addEventListener("click", () => {
  document.body.style.backgroundColor = randomColorCode();
});
