function Project() {
  let allData = data.forEach((item) => {
    const tempHtml = `<div>
                          <p id="projectTitle">${item.title}</p>
                        </div>`;
    return tempHtml;
  });

  allData = allData.join(" ");

  return <div id="root_"></div>;
}
