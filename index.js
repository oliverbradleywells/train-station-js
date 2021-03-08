// const departures = [
//   {
//     time: { hrs: 8, mins: 14 },
//     train: 'Acela Express',
//     no: 2153,
//     to: 'Washington, DC',
//     status: '',
//     track: 2,
//   },
//   {
//     time: { hrs: 8, mins: 19 },
//     train: 'New Haven Line',
//     no: 1541,
//     to: 'Grand Central Terminal',
//     status: 'On Time',
//     track: 14,
//   },
//   {
//     time: { hrs: 8, mins: 20 },
//     train: 'Shore Line East',
//     no: 1606,
//     to: 'Old Saybrook',
//     status: 'On Time',
//     track: 12,
//   },
//   {
//     time: { hrs: 8, mins: 37 },
//     train: 'N.E. Regional',
//     no: 190,
//     to: 'Boston South Station',
//     status: 'On Time',
//     track: 1,
//   },
//   {
//     time: { hrs: 8, mins: 40 },
//     train: 'Shuttle',
//     no: 490,
//     to: 'Springfield',
//     status: 'On Time',
//     track: 3,
//   },
//   {
//     time: { hrs: 8, mins: 43 },
//     train: 'N.E. Regional',
//     no: 96,
//     to: 'Newport News',
//     status: 'On Time',
//     track: 2,
//   },
//   {
//     time: { hrs: 8, mins: 50 },
//     train: 'New Haven Line',
//     no: 1545,
//     to: 'Grand Central Terminal',
//     status: 'On Time',
//     track: 8,
//   },
//   {
//     time: { hrs: 9, mins: 16 },
//     train: 'Shore Line East',
//     no: 1610,
//     to: 'Old Saybrook',
//     status: 'On Time',
//     track: 10,
//   },
//   {
//     time: { hrs: 9, mins: 23 },
//     train: 'New Haven Line',
//     no: 1549,
//     to: 'Grand Central Terminal',
//     status: 'On Time',
//     track: 14,
//   },
//   {
//     time: { hrs: 9, mins: 36 },
//     train: 'Acela Express',
//     no: 2150,
//     to: 'Boston-South Sta.',
//     status: '',
//     track: 1,
//   },
//   {
//     time: { hrs: 9, mins: 46 },
//     train: 'New Haven Line',
//     no: 1551,
//     to: 'Grand Central Terminal',
//     status: 'On Time',
//     track: 8,
//   },
//   {
//     time: { hrs: 10, mins: 13 },
//     train: 'N.E. Regional',
//     no: 170,
//     to: 'Boston South Station',
//     status: 'On Time',
//     track: 2,
//   },
//   {
//     time: { hrs: 10, mins: 25 },
//     train: 'New Haven Line',
//     no: 1553,
//     to: 'Grand Central Terminal',
//     status: 'On Time',
//     track: 14,
//   },
// ]
fetch(`http://bootcamp.podlomar.org/api/departures`)
  .then((resp) => resp.json())
  .then((departures) => {
    // departures = json



    const tbody = document.querySelector('.board__table tbody');
    departures.forEach((row) => {
      const rowElm = document.createElement('tr');
      rowElm.innerHTML += `
    <td class="board__time">${row.time.hrs}:${row.time.mins}</td>
    <td class="board__train">${row.train}</td>
    <td class="board__no">${row.no}</td>
    <td class="board__to">${row.to}</td>
    <td class="board__status">${row.status}</td>
    <td class="board__track">${row.track}</td>
    <td><button class="btn-delay">delay</button></td>
  `;

      const btnDelay = rowElm.querySelector('.btn-delay');
      btnDelay.addEventListener('click', () => {
        const statusElm = rowElm.querySelector('.board__status');
        statusElm.innerHTML = '<input type="text" />';

        const input = statusElm.querySelector('input');
        input.addEventListener('keypress', (event) => {
          if (event.key === 'Enter') {
            let status = 'On Time';
            if (input.value !== '') {
              status = `${input.value} min delayed`;
            }

            statusElm.innerHTML = status;
            row.status = status;
          }
        });
        input.focus();
      });

      tbody.appendChild(rowElm);
    });
  })