document.querySelector('.sidebar').innerHTML = `
<ul class="sidebar-menu">
      <li><a href="../dashboard.html">Dashboard</a></li>

      <li>
        <button class="dropdown-btn department-drop-down-menu">Department
        <!-- <i class="fa fa-caret-down"></i> -->
        </button>
        <div class="dropdown-container">
          <ul>
           <li><a class="department-name"  href="Emergency.html">Emergency</a></li> 
          <li><a class="department-name" href="Surgery.html">Surgery</a></li>
          <li><a class="department-name" href="ICU.html">ICU</a></li>
          <li><a class="department-name" href="ENT.html">ENT</a></li>
          <li><a class="department-name" href="Neurology.html">Neurology</a></li>
          <li><a class="department-name" href="Oncology.html">Oncology</a></li>
          <li><a class="department-name" href="Gynaecology.html">Gynaecology</a></li>
          <li><a class="department-name" href="Pediatrics.html">Pediatrics</a></li>
          <li><a class="department-name" href="Psychiatry.html">Psychiatry</a></li>
          <li><a class="department-name" href="Orthopaedic.html">Orthopaedic</a></li>
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
      <li><a href="../Billing/Billing.html">Billing</a></li>
    </ul>
`

//display header section of department

function displayDeptFirstSection(deptName){
  document.querySelector('.dept-first-sec').innerHTML = `
  <h1>${deptName} DEPARTMENT</h1>
    <div class="dept-sub-container">
      <input class="search-bar" type="text" placeholder="Search">
      <div>
        <button class="add-doctor js-add-doc" onclick="toggleAddDoctorOverlay()">Add Doctor</button>
        <button class="edit-doctor" onclick="toggleEditDoctorOverlay('edit-doc-overlay')">Edit Doctor</button>
      </div>
    </div>
  `
}


// document.querySelector('.js-add-doc').addEventListener('click',()=>{
//   toggleOverlay();
// })

//overlay function


function toggleAddDoctorOverlay() {
  let element = document.querySelector('.overlay');
    if(element.style.visibility === 'hidden'){
      element.style.visibility = 'visible';
    }
    else{
      element.style.visibility = 'hidden';
    }
}

function toggleEditDoctorOverlay(class_name) {
  let element = document.querySelector(`.${class_name}`);
    if(element.style.visibility === 'hidden'){
      element.style.visibility = 'visible';
    }
    else{
      element.style.visibility = 'hidden';
    }
}

 //overlay add doctor inner content
document.querySelector('.add-doc-overlay').innerHTML = 
`<div class="add-doc-dropdown-box">
<p class="add-title">ADD DOCTOR</p>
<p>Full Name:</p>
<input type="text" class="doc-name">
<p>Age:</p>
<input type="text" class="doc-age">
<p>Contact No.:</p>
<input type="tel" class="doc-contact">
<p>Email ID:</p>
<input type="text" class="doc-email">
<p>Gender:</p>
<select name="doc-sex" id="" class="doc-sex">
  <option value="">Select</option>
  <option value="Male">Male</option>
  <option value="Female">Female</option>
</select>
<p>Salary:</p>
<input type="number" class="doc-salary">
<div class="btn-ctn">
  <button class="add-doc-btn js-add-doc-btn">Submit</button>
</div>
</div>`

//overlay delete doctor inner content 
// document.querySelector('.delete-doc-overlay').innerHTML = `
// <div class="delete-doc-dropdown-box">
// <p class="add-title">DELETE DOCTOR</p>
// <p>Enter Doctor Id:</p>
// <input type="text" class="doc-id">
// <div class="btn-ctn">
// <button class="delete-doc-btn">Delete Doctor</button>
// </div>
// <p class="invalid-doctor"></p>
// </div>
// `


//edit doctor overlay

document.querySelector('.edit-doc-overlay').innerHTML = 
`
<div class="edit-doc-first-dropdown">
      <p class="edit-title">EDIT DOCTOR</p>
      <p>Enter Doctor ID:</p>
      <input type="text" class="edit_doctorId">
      <div class="btn-ctn">
        <button class="edit-doc-first-btn">Enter</button>
      </div>
      <p class="invalid-id"></p>
    </div>
`;

document.querySelector('.edit-doc-overlay-1').innerHTML = 
`
<div class="edit-doc-second-dropdown">
      <p class="edit-title">EDIT DOCTOR</p>
      <p>Name:</p>
      <input type="text" class="edit-doc-name">
      <p>Age:</p>
      <input type="text" class="edit-doc-age">
      <p>Contact No.:</p>
      <input type="text" class="edit-doc-contact">
      <p>Email ID:</p>
      <input type="text" class="edit-doc-emailid">
      <p>Sex:</p>
      <select name="edit-doc-sex" id="" class="edit-doc-sex">
        <option value="">Select</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
      <p>Salary:</p>
      <input type="text" class="edit-doc-salary">
      <p>Employment Status</p>
      <select name="edit-emp-status" id="" class="edit-emp-status">
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
      </select>
      <div class="btn-ctn">
        <button class="edit-doc-btn">Save</button>
      </div>
      </div>
`


//edit doctor
let Doctor_id = 0;
function getEditDoctor(dept){
document.querySelector('.edit-doc-first-btn').addEventListener('click',()=>{
  let count = 0;
  Doctor_id = document.querySelector('.edit_doctorId').value;
  dept.forEach(data=>{
    if(data.doctorId == Doctor_id){
      count++;
      document.querySelector('.edit-doc-name').value = data.Name;
      document.querySelector('.edit-doc-age').value = data.Age;
      document.querySelector('.edit-doc-contact').value = data.Phone;
      document.querySelector('.edit-doc-emailid').value = data.emailId;
      document.querySelector('.edit-doc-sex').value = data.Sex;
      document.querySelector('.edit-doc-salary').value = data.Salary;
    }
  });

  if(count == 1){
    document.querySelector('.invalid-id').innerHTML = "";
    toggleEditDoctorOverlay('edit-doc-overlay-1');
  }

  else{
    document.querySelector('.invalid-id').innerHTML = "Invalid Report ID";
  }

})
};

function editDoctor(dept){
  document.querySelector('.edit-doc-btn').addEventListener('click',()=>{
    let Name = document.querySelector('.edit-doc-name').value;
    let Age = document.querySelector('.edit-doc-age').value;
    let Phone = document.querySelector('.edit-doc-contact').value;
    let emailId = document.querySelector('.edit-doc-emailid').value;
    let Sex = document.querySelector('.edit-doc-sex').value;
    let Salary = document.querySelector('.edit-doc-salary').value;
    let statusIndex = document.querySelector('.edit-emp-status').selectedIndex;
    let Employment_Status = document.querySelector('.edit-emp-status')[statusIndex].value;

    dept.forEach(data=>{
      if(data.doctorId == Doctor_id){
        data.Name = Name;
        data.Age = Age;
        data.Phone = Phone;
        data.emailId = emailId;
        data.Sex = Sex;
        data.Salary = Salary;
        data.Employment_Status = Employment_Status;

        displayDoctorList(dept);
        toggleEditDoctorOverlay('edit-doc-overlay-1');
        toggleEditDoctorOverlay('edit-doc-overlay');
      }
    })
  })
}

//Add doctor

function addDoctor(deptId,dept,n,deptPrefix){
  document.querySelector('.js-add-doc-btn').addEventListener('click',()=>{
    let Name = document.querySelector('.doc-name').value;
    let Age = Number(document.querySelector('.doc-age').value);
    let Phone = document.querySelector('.doc-contact').value;
    let sexIndex = document.querySelector('.doc-sex').selectedIndex;
    let Sex = document.querySelector('.doc-sex')[sexIndex].value;
    let EmailId = document.querySelector('.doc-email').value;
    let Salary = Number(document.querySelector('.doc-salary').value);
    let Employment_Status = 'Active';
    n = ++n;
    let id = (n<10)?`00${n}`:(n<100)?`0${n}`:`${n}`;
    let doctorId = `${deptPrefix}${id}`

    let newDoc = new createDoctor(doctorId,Name,deptId,Age,Phone,Sex,EmailId,Salary,Employment_Status);
    console.log(newDoc);
    dept.push(newDoc);
    displayDoctorList(dept);
    toggleAddDoctorOverlay();
  })
}

//create doctor
function createDoctor(doctorId,Name,deptId,Age,Phone,Sex,EmailId,Salary,Employment_Status){
  this.doctorId = doctorId;
  this.Name = Name;
  this.deptId = deptId
  this.Age = Age;
  this.Phone = Phone;
  this.emailId = EmailId;
  this.Sex = Sex;
  this.Salary = Salary;
  this.Employment_Status = Employment_Status;
  

}

//delete doctor
// function deleteDoctor(dept){
//   let c = 0;
//   document.querySelector('.delete-doc-btn').addEventListener('click',()=>{
//     let docId = document.querySelector('.doc-id').value;
//     dept.forEach(doctor => {
//       if(doctor.doctorId == docId){
//         dept.splice((docId-1),1);
//         c++;
//       }
//     });
//     if(c >0){
//     displayDoctorList(dept);
//     toggleDeleteDoctorOverlay();
//     document.querySelector('.invalid-doctor').innerHTML = "";
//     }
//     else{
//       document.querySelector('.invalid-doctor').innerHTML = `Invalid Doctor Id`;
//     }
//   })

// }

//display doctor list

function displayDoctorList(department) {
  const doctors = document.querySelector('.department-table');
  doctors.innerHTML = `
  <tr>
    <th>Doctor Id</th>
    <th>Name</th>
    <th>Age</th>
    <th>Phone</th>
    <th>Email ID</th>
    <th>Sex</th>
    <th>Salary</th>
    <th>Employment Status</th>
  </tr>`

  let j = 0;
  department.forEach(data => {
  
    doctors.innerHTML += `
    <tr>
    <td>${data.doctorId}</td>
    <td>${data.Name}</td>
    <td>${data.Age}</td>
    <td>${data.Phone}</td>
    <td>${data.emailId}</td>
    <td>${data.Sex}</td>
    <td>&#8377 ${data.Salary}</td>
    <td>${data.Employment_Status}</td>
    </tr>
    `
    j++;
    
  });
  return j;
}