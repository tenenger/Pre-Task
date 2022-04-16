// variable
const SearchInput = document.querySelector(".SearchInput__input");
const Suggestion = document.querySelector(".Suggestion");
const SelectedLanguage_ul = document.querySelector(".SelectedLanguage ul");
const Suggestion_ul = document.querySelector(".Suggestion ul");
let words = [];
let filtered = [];
console.log(filtered);

// fetch
init();
function init() {
    const url =
        "https://wr4a6p937i.execute-api.ap-northeast-2.amazonaws.com/dev/languages?keyword=java";
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            words = data;
            filtered = data;
            words_filter(data, "");
        });
}

// input event
SearchInput.addEventListener("input", (e) => {
    const { value } = e.target;

    // autocomplete show and hidden
    if (value.trim() === "") {
        Suggestion.style.display = "none";
    } else {
        Suggestion.style.display = "inherit";

        // filter function
        filtered = words_filter(words, value.toLowerCase());
    }
});

// keyboard event
SearchInput.addEventListener("keydown", (e) => {
    let idx = 0;
    if (e.code == "ArrowDown" && idx < filtered.length - 1) {
        idx += 1;
    } else if (e.code == "ArrowUp" && idx > 0) {
        idx -= 1;
    }
    console.log(e.code, idx);
});

// filter
function words_filter(data, value) {
    let items = data.filter((item) =>
        item.trim().toLowerCase().includes(value)
    );
    create_element(items);
    return items;
}

// create Element
function create_element(words) {
    // words change
    const Suggestion_ul_children =
        document.querySelectorAll(".Suggestion ul li");
    Suggestion_ul_children.forEach((child) => {
        child.remove();
    });
    words.map((word, idx) => {
        // <li> element create
        console.log(idx);
        const li = document.createElement("li");
        li.innerText = word;

        // <span> element create
        const span = document.createElement("span");
        span.classList.add("Suggestion__item--matched");
        li.appendChild(span);

        // click event
        li.addEventListener("click", () => {
            alert(word);
            const li = document.createElement("li");
            li.innerText = word;
            // SelectedLanguage.childNodes[1].appendChild(li);
            SelectedLanguage_ul.appendChild(li);

            if (SelectedLanguage_ul.childElementCount > 5) {
                SelectedLanguage_ul.removeChild(
                    SelectedLanguage_ul.children[0]
                );
            }
        });
        // api word add in <ul>
        Suggestion_ul.appendChild(li);
    });
}
