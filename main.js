const questions = document.querySelectorAll(".question");

questions.forEach(question => {
    question.addEventListener("click", () => {
        const item = question.parentElement;
        const isActive = item.classList.contains("active") ? true : false;
        const listItems = document.querySelectorAll(".list-item");
        listItems.forEach(listItem => {
            listItem.classList.remove("active");
        })
        if (!isActive)
            item.classList.add("active");
    });
});