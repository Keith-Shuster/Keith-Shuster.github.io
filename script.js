document.addEventListener("DOMContentLoaded", () => {
    const tableBody = document.querySelector("#data-table tbody");
  
    fetch("data.json") // Fetch the data file from the same directory
      .then((response) => response.json())
      .then((data) => {
        // Loop through the data and insert rows into the table
        data.forEach((row) => {
          const tr = document.createElement("tr");
          tr.innerHTML = `
            <td>${row.column1}</td>
            <td>${row.column2}</td>
            <td>${row.column3}</td>
          `;
          tableBody.appendChild(tr);
        });
      })
      .catch((error) => console.error("Error loading data:", error));
  });
  