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
      <li><a href="">Lab Reports</a></li>
      <li><a href="">Room</a></li>
      <li><a href="">Billing</a></li>
    </ul>
`

function displayPatientFirstSection(patient_sec){
  document.querySelector('.patient-first-sec').innerHTML = `
  <h1>${patient_sec}</h1>
    <div class="dept-sub-container">
      <input class="search-bar" type="text" placeholder="Search">
      <div>
        <button class="add-patient" onclick="">Add Patient</button>
        <button class="remove-patient">Remove Patient</button>
      </div>
    </div>
  `
}

function displayInpatientList(Patient) {

  const patientList = document.querySelector('.patient-table');
  patientList.innerHTML = `
  <tr>
    <th>Patient Id</th>
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
