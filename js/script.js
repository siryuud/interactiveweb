const grid = document.getElementById("grid");
const picker = document.getElementById("picker");
const info = document.getElementById("info");
let target = null;

for (let r = 1; r <= 10; r++) {
  for (let c = 1; c <= 10; c++) {
    const cell = document.createElement("div");
    cell.className = "cell";
    cell.dataset.pos = `${r}행 ${c}열`;

    cell.addEventListener("click", (e) => {
      const box = e.target.getBoundingClientRect();
      picker.style.left = box.left + window.scrollX + "px";
      picker.style.top = box.top + window.scrollY + "px";
      picker.style.display = "block";
      target = e.target;
    });

    grid.appendChild(cell);
  }
}

picker.addEventListener("input", () => {
  if (target) {
    target.style.background = picker.value;
    picker.style.display = "none";

    const picked = [...document.querySelectorAll(".cell")]
      .filter(
        (cell) => cell.style.background && cell.style.background !== "white"
      )
      .map((cell) => cell.dataset.pos);

    info.textContent = picked.length
      ? `선택한 셀 위치: ${picked.join(", ")}`
      : "선택한 셀 위치: 없음";
  }
});
