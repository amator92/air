

const readyPlane = (forms, main) => {
  const data = [];

  forms.forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      for (const element of form.elements) {
        element.disabled = true;
      }

      data.push({
        name: form.name.value,
        ticket: form.ticket.value,
      });
      console.log('data:', data)
    });
  });
};

export default readyPlane;