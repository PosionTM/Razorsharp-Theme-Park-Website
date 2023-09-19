const tickets = document.querySelectorAll('.ticket');

tickets.forEach(ticket => {

  const minusBtn = ticket.querySelector('.minus');
  const plusBtn = ticket.querySelector('.plus');
  const count = ticket.querySelector('.count');

  const checkbox = ticket.querySelector('input[type="checkbox"]');

  minusBtn.addEventListener('click', () => {
    let val = parseInt(count.textContent);
    if (val > 0) {
      count.textContent = val - 1;
      updateTotal();
    }
  });

  plusBtn.addEventListener('click', () => {
    let val = parseInt(count.textContent);
    count.textContent = val + 1;
    updateTotal();
  });

  checkbox.addEventListener('change', () => {
    updateTotal();
  });
});

function updateTotal() {
  let totalPrice = 0;
  tickets.forEach(ticket => {
    const checkbox = ticket.querySelector('input[type="checkbox"]');
    if (checkbox.checked) {
      const price = parseInt(ticket.querySelector('p').textContent.slice(1));
      const count = parseInt(ticket.querySelector('.count').textContent);
      totalPrice += price * count;
    }
  });
  document.querySelector('#total').textContent = totalPrice;
}
