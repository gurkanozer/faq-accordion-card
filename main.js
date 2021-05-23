const questions = document.querySelectorAll(".question");

questions.forEach(question => {
    question.addEventListener("click", () => {
        const item = question.parentElement;
        const listItems = document.querySelectorAll(".list-item");
        listItems.forEach(listItem => {
            listItem.classList.remove("active");
        })
        item.classList.toggle("active");
    });
});