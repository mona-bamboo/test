const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
const homeScreen = document.getElementById("homeScreen");
const roomScreen = document.getElementById("roomScreen");
const categoryInput = document.getElementById("categoryInput");
const addCategoryBtn = document.getElementById("addCategoryBtn");
const categoryList = document.getElementById("categoryList");
const backToHomeBtn = document.getElementById("backToHomeBtn");
const roomTitle = document.getElementById("roomTitle");
let currentCategory

backToHomeBtn.addEventListener("click", function () {
	homeScreen.style.display = "block";
	roomScreen.style.display = "none";
})

// ボタンがクリックされたときの処理
addButton.addEventListener("click", function () {
	const text = taskInput.value;

	if (text === "") {
		return;
	}

	const li = document.createElement("li");
	li.innerText = text;
	li.dataset.category = currentCategory;

	const plusBtn = document.createElement("button");
	plusBtn.innerText = "＋";
	plusBtn.className = "plus-btn";

	const memoArea = document.createElement("textarea");
	memoArea.style.display = "none";
	memoArea.className = "memo-area";

	memoArea.addEventListener("input", function () {
		saveTasks();
	})

	plusBtn.addEventListener("click", function () {
		if (memoArea.style.display === "none") {
			memoArea.style.display = "block";
			plusBtn.innerText = "ー";
		}
		else {
			memoArea.style.display = "none";
			plusBtn.innerText = "＋";
		}
	});

	const del = document.createElement("button");
	del.innerText = "✖";

	del.addEventListener("click", function () {
		li.remove();
		saveTasks();
	})

	const checkbox = document.createElement("input");
	checkbox.type = "checkbox";

	li.appendChild(plusBtn);
	li.appendChild(del);
	li.appendChild(checkbox);
	taskList.appendChild(li);
	li.appendChild(memoArea);

	saveTasks();

	taskInput.value = "";
});

taskInput.addEventListener("keydown", function (event) {
	if (event.key === "Enter") {
		addButton.click();
	}
});

addCategoryBtn.addEventListener("click", function () {
	const text = categoryInput.value;

	if (text === "") {
		return;
	}

	const li = document.createElement("li");
	li.innerText = text;

	li.addEventListener("click", function () {
		homeScreen.style.display = "none";
		roomScreen.style.display = "block";
		roomTitle.innerText = text;
		currentCategory = text;

		const allTaskLis = document.querySelectorAll("#taskList li");
		allTaskLis.forEach(function (taskLi) {
			if (taskLi.dataset.category === currentCategory) {
				taskLi.style.display = "flex";
			} else {
				taskLi.style.display = "none";
			}

		})
	})

	const del = document.createElement("button");
	del.innerText = "✖";

	del.addEventListener("click", function (event) {
		event.stopPropagation();

		const targetCategoryName = text;

		const allTaskLis = document.querySelectorAll("#taskList li");
		allTaskLis.forEach(function (taskLi) {
			if (taskLi.dataset.category === targetCategoryName) {
				taskLi.remove();
			}
		})
		saveTasks();
		li.remove();
		saveCategories();
	})


	li.appendChild(del);

	categoryList.appendChild(li);
	saveCategories();

	categoryInput.value = "";
});

categoryInput.addEventListener("keydown", function (event) {
	if (event.key === "Enter") {
		addCategoryBtn.click();
	}
});

function saveTasks() {

	const listItems = document.querySelectorAll("#taskList li");
	const tasks = [];

	listItems.forEach(function (li) {
		const taskName = li.firstChild.textContent;

		const memoText = li.querySelector("textarea").value;

		tasks.push({
			task: taskName,
			memo: memoText,
			category: li.dataset.category
		});
	});

	localStorage.setItem("tool_list", JSON.stringify(tasks));

}

function saveCategories() {
	const categoryItem = document.querySelectorAll("#categoryList li");
	const categories = [];

	categoryItem.forEach(function (li) {
		const categoryName = li.firstChild.textContent;

		categories.push({
			category: categoryName
		});
	})

	localStorage.setItem("category_list", JSON.stringify(categories))
}

function localTasks() {
	const savedTasks = localStorage.getItem("tool_list");

	if (savedTasks) {
		const tasks = JSON.parse(savedTasks);

		tasks.forEach(function (item) {
			const li = document.createElement("li");
			li.innerText = item.task;
			li.dataset.category = item.category;

			const plusBtn = document.createElement("button");
			plusBtn.innerText = "＋";
			plusBtn.className = "plus-btn";


			const memoArea = document.createElement("textarea");
			memoArea.style.display = "none";
			memoArea.className = "memo-area";
			memoArea.value = item.memo;

			memoArea.addEventListener("input", function () {
				saveTasks();
			})



			plusBtn.addEventListener("click", function () {
				if (memoArea.style.display === "none") {
					memoArea.style.display = "block";
					plusBtn.innerText = "ー";
				}
				else {
					memoArea.style.display = "none";
					plusBtn.innerText = "＋";
				}
			});


			const del = document.createElement("button");
			del.innerText = "✖"
			del.addEventListener("click", function () {
				li.remove();
				saveTasks();
			});

			const checkbox = document.createElement("input");
			checkbox.type = "checkbox";

			checkbox.addEventListener("change", function () {
				if (checkbox.checked) {
					li.style.textDecoration = "line-through";
					li.style.color = "#d1b8c0";
				}
				else {
					li.style.textDecoration = "none";
					li.style.color = "#5a3d46";
				}
			});


			li.appendChild(plusBtn);
			li.appendChild(del);
			li.appendChild(checkbox);
			taskList.appendChild(li);
			li.appendChild(memoArea);

		});
	}
}

function localCategories() {
	const savedCategories = localStorage.getItem("category_list");

	if (savedCategories) {
		const categories = JSON.parse(savedCategories);

		categories.forEach(function (item) {
			const li = document.createElement("li");
			// itemの中の "category" という名前のデータ（さっき保存したもの）を取り出す
			li.innerText = item.category;

			li.addEventListener("click", function () {
				homeScreen.style.display = "none";
				roomScreen.style.display = "block";
				roomTitle.innerText = item.category; // 看板を書き換え
				currentCategory = item.category;     // 今いる部屋を記憶

				// タスクの選別
				const allTaskLis = document.querySelectorAll("#taskList li");
				allTaskLis.forEach(function (taskLi) {
					if (taskLi.dataset.category === currentCategory) {
						taskLi.style.display = "flex";
					} else {
						taskLi.style.display = "none";
					}
				});
			});

			const del = document.createElement("button");
			del.innerText = "✖";

			del.addEventListener("click", function (event) {
				event.stopPropagation();

				const targetCategoryName = item.category;

				const allTaskLis = document.querySelectorAll("#taskList li");
				allTaskLis.forEach(function (taskLi) {
					if (taskLi.dataset.category === targetCategoryName) {
						taskLi.remove();
					}
				})
				saveTasks();
				li.remove();
				saveCategories();
			})


			li.appendChild(del);

			categoryList.appendChild(li);
		});
	}
}


localTasks();
localCategories();