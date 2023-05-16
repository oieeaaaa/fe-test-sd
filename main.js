document.addEventListener('DOMContentLoaded', function() {
  //=================================================
  // Queries
  //=================================================
  let toggleNav = document.getElementById('toggle-nav');
  let nav = document.querySelector('.nav');
  let navFill = document.querySelector('.nav-fill');
  let plansTable = document.querySelector('[data-js="plans-table"]');
  let searchInput = document.querySelector('[data-js="search-input"]');
  let plansSwitch = document.querySelector('[data-js="plans-switch"]');

  //=================================================
  // Variables
  //=================================================
  let navOpen = false;

  // nav
  toggleNav.addEventListener('click', function() {
    nav.classList.toggle('open');
    navOpen = !navOpen;

    if (navOpen) {
      document.body.classList.add('overflow-hidden');
    }
  })

  // search by contract or customer
  searchInput.addEventListener('keyup', function() {
    const value = this.value.toLowerCase();

    const newPlans = PLANS.filter(function(plan) {
      return plan.contract.toLowerCase().includes(value) || plan.customer.toLowerCase().includes(value);
    })

    // reset the table
    plansTable.querySelector('tbody').innerHTML = '';

    // repopulate the table
    populatePlansTable(newPlans);
  })

  // plans switch just for fun
  if (plansSwitch) {
    plansSwitch.addEventListener('click', function() {
      const isChecked = this.checked;

      if (!isChecked) {
        // split PLANS into half
        const newPlans = PLANS.slice(0, PLANS.length / 2);

        // reset the table
        plansTable.querySelector('tbody').innerHTML = '';

        // repopulate the table
        populatePlansTable(newPlans);
      } else {
        // reset the table
        plansTable.querySelector('tbody').innerHTML = '';

        // repopulate the table
        populatePlansTable(PLANS);
      }
    })
  }



  //=================================================
  // Event Listeners
  //=================================================

  // remove overflow hidden after transition
  // doing this so that the nav doesn't scroll when it's closed
  navFill.addEventListener('transitionend', function() {
    if (!navOpen) {
      document.body.classList.remove('overflow-hidden');
    }
  })

  //=================================================
  // Functions
  //=================================================

  // populate plans table
  function populatePlansTable(data) {
    const body = plansTable.querySelector('tbody');

    // add a row if there's no data
    if (data.length === 0) {
      const row = document.createElement('tr');
      const cell = document.createElement('td');

      cell.textContent = 'No data found';

      row.appendChild(cell);
      body.appendChild(row);
    }

    // loop through each plan
    data.forEach(function(plan) {
      // create a row
      const row = document.createElement('tr');

      // loop through each plan property
      for (const key in plan) {
        // create a cell
        const cell = document.createElement('td');

        // add the cell content
        cell.textContent = plan[key];

        // append the cell to the row
        row.appendChild(cell);
      }

      // add button cell
      // got lazy here a bit lol
      row.innerHTML += `
<td>
  <div class="flex justify-center items-center">
    <button class="btn btn-outline btn-sm">View Plan</button>
  </div>
</td>
`;

      // append the row to the table body
      body.appendChild(row);
    })
  }

  function init() {
    if (plansTable) {
      populatePlansTable(PLANS);
    }
  }

  // initialize
  init();
})
