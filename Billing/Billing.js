document.querySelector('.sidebar').innerHTML = 
`
<ul class="sidebar-menu">
      <li><a href="../dashboard.html">Dashboard</a></li>

      <li>
        <button class="dropdown-btn department-drop-down-menu">Department
        <!-- <i class="fa fa-caret-down"></i> -->
        </button>
        <div class="dropdown-container">
          <ul>
           <li><a class="department-name"  href="../Department/Emergency.html">Emergency</a></li> 
          <li><a class="department-name" href="../Department/Surgery.html">Surgery</a></li>
          <li><a class="department-name" href="../Department/ICU.html">ICU</a></li>
          <li><a class="department-name" href="../Department/ENT.html">ENT</a></li>
          <li><a class="department-name" href="../Department/Neurology.html">Neurology</a></li>
          <li><a class="department-name" href="../Department/Oncology.html">Oncology</a></li>
          <li><a class="department-name" href="../Department/Gynaecology.html">Gynaecology</a></li>
          <li><a class="department-name" href="../Department/Pediatrics.html">Pediatrics</a></li>
          <li><a class="department-name" href="../Department/Psychiatry.html">Psychiatry</a></li>
          <li><a class="department-name" href="../Department/Orthopaedic.html">Orthopaedic</a></li>
          </ul>
          
        </div>
      </li>

      <li><button class="dropdown-btn department-drop-down-menu">Patients
        <!-- <i class="fa fa-caret-down"></i> -->
        </button>
        <div class="dropdown-container">
          <ul>
           <li><a class="patient"  href="../Patients/Inpatients.html">Inpatients</a></li> 
          <li><a class="patient" href="../Patients/Outpatients.html">Outpatients</a></li>
          </ul>
          
        </div></li>
      <li><a href="../Lab Report/Lab_Report.html">Lab Reports</a></li>
      <li><a href="../Room/Room.html">Room</a></li>
      <li><a href="Billing.html">Billing</a></li>
    </ul>
`

displayBillingFirstSection();
let k= displayBillingList()

document.querySelector('.add-bill-overlay').innerHTML =
`
<div class="add-bill-dropdown-box">
<p class="add-title">ADD BILL</p>
<p>Patient ID:</p>
<input type="text" class="patientId">
<p>Room Charge:</p>
<input type="text" class="room-charge">
<p>Operation Charge:</p>
<input type="text" class="operation-charge">
<p>Lab Charge:</p>
<input type="text" class="lab-charge">
<p>Medicine Charge:</p>
<input type="text" class="medicine-charge">
<p>Payment Status:</p>
<select name="status" id="" class="payment-status">
      <option value="Paid">Paid</option>
      <option value="Partially Paid">Partially Paid</option>
      <option value="Unpaid">Unpaid</option>
</select>

<div class="btn-ctn">
  <button class="add-bill-btn">Save & Submit</button>
</div>
</div>
`;



document.querySelector('.edit-bill').addEventListener('click',()=>{
  toggleEditBillOverlay('edit-bill-overlay');
});

let Patient_Id = 0;
document.querySelector('.edit-bill-first-btn').addEventListener('click',()=>{
  let count = 0;
  Patient_Id = document.querySelector('.edit_patientId').value;
  console.log(Patient_Id);
  Bills.forEach(data=>{
    if(data.PatientId == Patient_Id){
      count++;
      document.querySelector('.edit-room-charge').value = data.Room_Charges;
      document.querySelector('.edit-operation-charge').value = data.Operation_Charges;
      document.querySelector('.edit-lab-charge').value = data.Lab_Charges;
      document.querySelector('.edit-medicine-charge').value = data.Medicine_Charges;
    }
  });
  if(count == 1){
    document.querySelector('.invalid-id').innerHTML = "";
      toggleEditBillOverlay('edit-bill-overlay-1');
  }
  else{
  document.querySelector('.invalid-id').innerHTML = "Invalid Patient ID";
  }
});

document.querySelector('.edit-bill-btn').addEventListener('click',()=>{
  let Room_Charges = Number(document.querySelector('.edit-room-charge').value);
  let Operation_Charges = Number(document.querySelector('.edit-operation-charge').value);
  let Lab_Charges = Number(document.querySelector('.edit-lab-charge').value);
  let Medicine_Charges = Number(document.querySelector('.edit-medicine-charge').value);
  let statusIndex = document.querySelector('.edit-payment-status').selectedIndex;
    let Payment_Status = document.querySelector('.edit-payment-status')[statusIndex].value;

    Bills.forEach(data=>{
      if(data.PatientId == Patient_Id){
        data.Room_Charges = Room_Charges;
        data.Operation_Charges = Operation_Charges;
        data.Lab_Charges = Lab_Charges;
        data.Medicine_Charges = Medicine_Charges;
        data.Payment_Status = Payment_Status;
        displayBillingList();
        toggleEditBillOverlay('edit-bill-overlay-1');
        toggleEditBillOverlay('edit-bill-overlay');
      }
    })

})

document.querySelector('.add-bill-btn').addEventListener('click',()=>{
  let PatientId = document.querySelector('.patientId').value;
  let Room_Charges = Number(document.querySelector('.room-charge').value);
  let Operation_Charges = Number(document.querySelector('.operation-charge').value);
  let Lab_Charges = Number(document.querySelector('.lab-charge').value);
  let Medicine_Charges = Number(document.querySelector('.medicine-charge').value);
  let statusIndex = document.querySelector('.payment-status').selectedIndex;
    let Payment_Status = document.querySelector('.payment-status')[statusIndex].value;

    const newBill={
      BillNo: ++k,
      PatientId: PatientId,
      Room_Charges: Room_Charges,
      Operation_Charges: Operation_Charges,
      Lab_Charges: Lab_Charges,
      Medicine_Charges: Medicine_Charges,
      Payment_Status: Payment_Status
    };

    Bills.push(newBill);
    displayBillingList();
    toggleAddBillOverlay();
});




function displayBillingFirstSection(){
  document.querySelector('.billing-first-sec').innerHTML = `
  <h1>BILLING</h1>
    <div class="dept-sub-container">
      <input class="search-bar" type="text" placeholder="Search">
      <div>
        <button class="add-bill" onclick="toggleAddBillOverlay()">Add Bill</button>
        <button class="edit-bill">Edit Bill</button>
      </div>
    </div>
  `
}

function displayBillingList() {
  const billingList = document.querySelector('.billing-table');

  billingList.innerHTML = 
  `
    <th>Bill No.</th>
    <th>Patient ID</th>
    <th>Room Charges</th>
    <th>Operation Charges</th>
    <th>Lab Charges</th>
    <th>Medicine Charges</th>
    <th>Total Bill</th>
    <th>Status</th>
  `
  let j = 0;
  Bills.forEach(data => {
    billingList.innerHTML += 
    `
    <tr>
      <td>${data.BillNo}</td>
      <td>${data.PatientId}</td>
      <td>&#8377 ${data.Room_Charges}</td>
      <td>&#8377 ${data.Operation_Charges}</td>
      <td>&#8377 ${data.Lab_Charges}</td>
      <td>&#8377 ${data.Medicine_Charges}</td>
      <td>&#8377 ${data.Lab_Charges + data.Operation_Charges +data.Room_Charges + data.Medicine_Charges}</td>
      <td>${data.Payment_Status}</td>
    </tr>
    `
    j++;
  });
  return j;

}

function toggleAddBillOverlay() {
  let element = document.querySelector('.add-bill-overlay');
  if(element.style.visibility === 'hidden'){
    element.style.visibility = 'visible';
  }
  else{
    element.style.visibility = 'hidden';
  }
}

function toggleEditBillOverlay(class_name) {
  let element = document.querySelector(`.${class_name}`);
  const childElement = element.children[0];
  if(element.style.visibility === 'hidden'){
    element.style.visibility = 'visible';
    
  }
  else{
    element.style.visibility = 'hidden';
    
  }

  
  console.log(childElement);
  
}