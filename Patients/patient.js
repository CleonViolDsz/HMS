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
           <li><a class="patient"  href="Inpatients.html">Inpatients</a></li> 
          <li><a class="patient" href="Outpatients.html">Outpatients</a></li>
          </ul>
          
        </div></li>
      <li><a href="../Lab Report/Lab_Report.html">Lab Reports</a></li>
      <li><a href="../Room/Room.html">Room</a></li>
      <li><a href="../Billing/Billing.html">Billing</a></li>
    </ul>
`

//add patient page content
document.querySelector('.add-inpatient-overlay').innerHTML = 
`
<div  class="add-inpatient-dropdown-box">
     <p class="add-title">ADD PATIENT</p>
     <div class="patient-detail-ctn">
     <div class="patient-detail" >
       <div>
         <p >Full Name:</p>
         <input type="text" class="patient-name">
       </div>
       <div>
         <p >Age:</p>
         <input type="text" class="patient-age">
       </div>
       <div>
         <p >Contact No.:</p>
         <input type="text" class="patient-phone">
       </div>
       
       <div>
         <p>Date of Admission:</p>
         <input type="date" class="DOA">
       </div>
       </div>
       <div class="patient-detail">
       <div>
         <p >Gender:</p>
         <select  name="patient-sex" id="" class="patient-sex">
           <option value="">Select</option>
           <option value="Male">Male</option>
           <option value="Female">Female</option>
         </select>
       </div>
       <div>
         <p >Disease:</p>
         <input type="text" class="patient-disease">
       </div>
       <div>
         <p >Doctor ID:</p>
         <input type="text" class="patient-doc">
       </div>
       <div>
         <p >Date of Discharge:</p>
         <input type="date" class="DOD">
       </div>
       
       </div>
     </div>
     
     <div class="btn-ctn">
       <button class="add-patient-btn add-inpatient-btn">Save & Submit</button>
     </div>
 </div>
`;


function displayPatientFirstSection(patient_sec){
  document.querySelector('.patient-first-sec').innerHTML = `
  <h1>${patient_sec}</h1>
    <div class="dept-sub-container">
      <input class="search-bar" type="text" placeholder="Search">
      <div>
        <button class="add-patient">Add Patient</button>
        <button class="edit-patient">Edit Patient</button>
      </div>
    </div>
  `
}



function displayInpatientList(Patient) {

  const patientList = document.querySelector('.patient-table');
  patientList.innerHTML = `
  <tr>
    <th>Patient ID</th>
    <th>Name</th>
    <th>Age</th>
    <th>Phone</th>
    <th>Sex</th>
    <th>Disease</th>
    <th>Doctor Id</th>
    <th>Date of Admission</th>
    <th>Date of Discharge</th>
    
  </tr>`

  let j = 0;
  Patient.forEach(data => {
  
    patientList.innerHTML += `
    <tr>
    <td>${data.PatientId}</td>
    <td>${data.Name}</td>
    <td>${data.Age}</td>
    <td>${data.Phone}</td>
    <td>${data.Sex}</td>
    <td>${data.Disease}</td>
    <td>${data.DoctorId}</td>
    <td>${data.DOAdmin}</td>
    <td>${data.DODischarge}</td>
    
    </tr>
    `
    j++;
    
  });

  return j;
}
 
function displayOutPatientList(Patient){
  const patientList = document.querySelector('.outpatient-table');
  patientList.innerHTML = `
  <tr>
    <th>Patient Id</th>
    <th>Name</th>
    <th>Age</th>
    <th>Phone</th>
    <th>Sex</th>
    <th>Disease</th>
    <th>Doctor Id</th>
    <th>Date</th>
  </tr>`

  let j = 0;
  Patient.forEach(data => {
  
    patientList.innerHTML += `
    <tr>
    <td>${data.PatientId}</td>
    <td>${data.Name}</td>
    <td>${data.Age}</td>
    <td>${data.Phone}</td>
    <td>${data.Sex}</td>
    <td>${data.Disease}</td>
    <td>${data.DoctorId}</td>
    <td>${data.Date}</td>
    
    </tr>
    `
    j++;
    
  });

  return j;

}

//toggle add patient overlay
function toggleAddPatientOverlay(class_name){
  console.log(class_name);
  let element = document.querySelector(`.${class_name}`);
  if(element.style.visibility === 'hidden'){
    element.style.visibility = 'visible';
  }
  else{
    element.style.visibility = 'hidden';
  }
}

function toggleEditPatientOverlay(class_name){
  let element = document.querySelector(`.${class_name}`);
  if(element.style.visibility === 'hidden'){
    element.style.visibility = 'visible';
  }
  else{
    element.style.visibility = 'hidden';
  }
}

// Add Inpatient
function addInpatient(n,patient_sec,overlay_class,patientPrefix){
  document.querySelector('.add-inpatient-btn').addEventListener('click',()=>{
    let Name = document.querySelector('.patient-name').value;
    let Age = document.querySelector('.patient-age').value;
    let Phone = document.querySelector('.patient-phone').value;
    let sexIndex = document.querySelector('.patient-sex').selectedIndex;
    let Sex = document.querySelector('.patient-sex')[sexIndex].value;
    let Disease = document.querySelector('.patient-disease').value;
    let DoctorId = document.querySelector('.patient-doc').value;
    let DOAdmin = document.querySelector('.DOA').value;
    let DODischarge = document.querySelector('.DOD').value;
    n = ++n;
    let id = (n<10)?`00${n}`:(n<100)?`0${n}`:`${n}`;
    PatientId = `${patientPrefix}${id}`;
    if(DODischarge == ""){
      DODischarge = "--";
    }

    let newPatient = new createInpatient(PatientId,Name,Age,Phone,Sex,Disease,DoctorId,DOAdmin,DODischarge);
    patient_sec.push(newPatient);
    displayInpatientList(patient_sec);
    toggleAddPatientOverlay(overlay_class);
  });
}

//add outpatient

function addOutpatient(n,patient_sec,overlay_class,patientPrefix){
  document.querySelector('.add-outpatient-btn').addEventListener('click',()=>{
    let Name = document.querySelector('.patient-name').value;
    let Age = document.querySelector('.patient-age').value;
    let Phone = document.querySelector('.patient-phone').value;
    let sexIndex = document.querySelector('.patient-sex').selectedIndex;
    let Sex = document.querySelector('.patient-sex')[sexIndex].value;
    let Disease = document.querySelector('.patient-disease').value;
    let DoctorId = document.querySelector('.patient-doc').value;
    let Date = document.querySelector('.date').value;
    n = ++n;
    let id = (n<10)?`00${n}`:(n<100)?`0${n}`:`${n}`;
    PatientId = `${patientPrefix}${id}`;

    let newPatient = new createOutpatient(PatientId,Name,Age,Phone,Sex,Disease,DoctorId,Date);
    patient_sec.push(newPatient);
    displayOutPatientList(patient_sec);
    toggleAddPatientOverlay(overlay_class);
  })
}



//create inpatient
 function createInpatient(PatientId,Name,Age,Phone,Sex,Disease,DoctorId,DOAdmin,DODischarge){
  this.PatientId = PatientId;
  this.Name = Name;
  this.Age = Age;
  this.Phone = Phone;
  this.Sex = Sex;
  this.Disease = Disease;
  this.DoctorId = DoctorId,
  this.DOAdmin = DOAdmin,
  this.DODischarge = DODischarge
 }

 //create outpatient
 function createOutpatient(PatientId,Name,Age,Phone,Sex,Disease,DoctorId,Date){
  this.PatientId = PatientId;
  this.Name = Name;
  this.Age = Age;
  this.Phone = Phone;
  this.Sex = Sex;
  this.Disease = Disease;
  this.DoctorId = DoctorId,
  this.Date = Date;
 }

 



