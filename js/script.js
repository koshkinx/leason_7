// // 1)Створити html документ, в якому є теги header, footer, nav, ul список на 5 елементів li ,
//  отримати доступ до ціх елементів і змінити там текст за допомогою innerHtml
window.onload = () => {
  let header = document.querySelector("header");
  let footer = document.querySelector("footer");
  let nav = document.querySelector("nav");
  let li = document.querySelectorAll("ul li");
  header.innerHTML = "це голова";
  footer.innerHTML = "це подвал";
  nav.innerHTML = "це навігатор";
  li.forEach((element) => {
    element.innerHTML = "це Брюс Лі";
  });
};

// // 2) Знайти батьківський елемент li елемента через методи пошуку батьківського елементу вивести в консоль отримане значення

let parent = document.querySelector("li");
console.log(parent.parentElement);

// // 3) Створіть класс по додаваню фільма який має такі значення(рік випуску, жанр, назву, кількість переглядів)

// // 4) В классі створити метод який визначає рейтинг в залежності від року випуску і кількості переглядів
// ( кількість переглядів поділена на різницю між сьогоднішнім роком і роком випуску )

// // 5) Створіть массив і розмістіть в ньому створені обєкти фільмів, далі за допомогою синтаксису деструктирізації
//  переберіть масив  і виведіть значення по року випуску.
class Movie {
  constructor(name, year, genre, views) {
    this.name = name;
    this.year = year;
    this.genre = genre;
    this.views = views;
  }
  raiting() {
    let today = new Date();
    return console.log(this.views / (today.getFullYear() - this.year));
  }
}
// const d = new Movie("ivan", "1989", "man", "fffff");
// console.log(d);

let film = [
  new Movie("matrix reloaded", 2003, "fantastic", 1500),
  new Movie("matrix", 1999, "fantastic", 1000),
  new Movie("matrix revolutions", 2003, "fantastic", 900),
];

let [matrixReloaded, matrix, matrixRevolutions] = film;

film.sort(function (a, b) {
  return a.year - b.year;
});
console.table(film);
