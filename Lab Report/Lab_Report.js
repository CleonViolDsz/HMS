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

let k = displayLabReportList();
displayLabReportFirstSection();
// addReport(LabReport);


  document.querySelector('.add-report-btn').addEventListener('click',()=>{
    let PatientId = document.querySelector('.patientId').value;
    // let PatientIdNum = Number(PatientId);
    let Test = document.querySelector('.test').value;
    let DoctorId = document.querySelector('.doctorId').value;
    // let DoctorIdNum = Number(DoctorId);
    let Impression = document.querySelector('.test-impression').value;
    let Amount = document.querySelector('.report-amount').value;
    let AmountNum = Number(Amount);
    let ReportDate = document.querySelector('.report-date').value;
    let statusIndex = document.querySelector('.payment-status').selectedIndex;
    let PaymentStatus = document.querySelector('.payment-status')[statusIndex].value;

    // console.log(PatientIdNum);
    // let newReport = createLabReport(PatientIdNum,++k,Test,DoctorIdNum,Impression,AmountNum,ReportDate,PaymentStatus);

    const newReport = {
      PatientId: PatientId,
      Report_Id: ++k,
      Test: Test,
      DoctorId: DoctorId,
      Impression: Impression,
      Amount: AmountNum,
      ReportDate: ReportDate,
      PaymentStatus: PaymentStatus
    }
    LabReport.push(newReport);
    displayLabReportList();
    toggleAddLabReportOverlay();
  });


  document.querySelector('.edit-report').addEventListener('click',()=>{
    toggleEditLabReportOverlay('edit-lab-report-overlay');
  })

  let Report_Id= 0;

  document.querySelector('.edit-report-first-btn').addEventListener('click',()=>{
    let count = 0;
    Report_Id = Number(document.querySelector('.edit_reportId').value);
    LabReport.forEach(data=>{
      if(data.Report_Id == Report_Id){
        count++;
        document.querySelector('.edit-patientId').value = data.PatientId;
        document.querySelector('.edit-test').value = data.Test;
        document.querySelector('.edit-doctorId').value = data.DoctorId;
        document.querySelector('.edit-impression').value = data.Impression;
        document.querySelector('.edit-report-date').value = data.ReportDate;
        document.querySelector('.edit-report-amount').value = data.Amount;
      }
    });
    if(count == 1){
      document.querySelector('.invalid-id').innerHTML = "";
      toggleEditLabReportOverlay('edit-lab-report-overlay-1');
    }
    else{
      document.querySelector('.invalid-id').innerHTML = "Invalid Report ID";
    }
    
  })

  document.querySelector('.edit-report-btn').addEventListener('click',()=>{
    let PatientId = document.querySelector('.edit-patientId').value;
    let Test = document.querySelector('.edit-test').value;
    let Impression = document.querySelector('.edit-impression').value;
    let DoctorId = document.querySelector('.edit-doctorId').value;
    let Amount = Number(document.querySelector('.edit-report-amount').value );
    let ReportDate = document.querySelector('.edit-report-date').value;
    let statusIndex = document.querySelector('.edit-payment-status').selectedIndex;
    let PaymentStatus = document.querySelector('.edit-payment-status')[statusIndex].value;

    LabReport.forEach(data=>{
      if(data.Report_Id == Report_Id){
        data.PatientId = PatientId;
        data.Test = Test;
        data.Impression = Impression;
        data.DoctorId = DoctorId;
        data.Amount = Amount;
        data.ReportDate = ReportDate;
        data.PaymentStatus = PaymentStatus;
        displayLabReportList();
        toggleEditLabReportOverlay('edit-lab-report-overlay-1');
        toggleEditLabReportOverlay('edit-lab-report-overlay');
      }
    })
  })

function displayLabReportFirstSection(){
  document.querySelector('.lab-report-first-section').innerHTML=
  `
  <h1>LAB REPORTS</h1>
  <div class="dept-sub-container">
      <input class="search-bar" type="text" placeholder="Search">
      <div>
        <button class="add-report" onclick="toggleAddLabReportOverlay()">Add Report</button>
        <button class="edit-report">Edit Report</button>
      </div>
    </div>
  `
}

function displayLabReportList(){
  const reportList = document.querySelector('.lab-report-table');
  
  reportList.innerHTML = 
  `
    
    <th>Report ID</th>
    <th>Patient ID</th>
    <th>Category</th>
    <th>Doctor ID</th>
    <th>Impression</th>
    <th>Report Date</th>
    <th>Amount</th>
    <th>Payment Status</th>
  `
  let j = 0;
  LabReport.forEach(data => {
    reportList.innerHTML += `
    <tr>
      
      <td>${data.Report_Id}</td>
      <td>${data.PatientId}</td>
      <td>${data.Test}</td>
      <td>${data.DoctorId}</td>
      <td>${data.Impression}</td>
      <td>${data.ReportDate}</td>
      <td>&#8377 ${data.Amount}</td>
      <td >${data.PaymentStatus}</td>
    </tr>
    `
    j++;
  });


  return j;
}

function toggleAddLabReportOverlay() {
  let element = document.querySelector('.add-lab-report-overlay');
  if(element.style.visibility === 'hidden'){
    element.style.visibility = 'visible';
  }
  else{
    element.style.visibility = 'hidden';
  }
}

function toggleEditLabReportOverlay(class_name) {
  let element = document.querySelector(`.${class_name}`);
  if(element.style.visibility === 'hidden'){
    element.style.visibility = 'visible';
  }
  else{
    element.style.visibility = 'hidden';
  }
}


//add lab report
  



// function createLabReport(PatientId, Report_Id,Test,DoctorId,Impression,Amount,ReportDate,PaymentStatus){
//   this.PatientId = PatientId;
//   this.Report_Id = Report_Id;
//   this.Test = Test;
//   this.DoctorId = DoctorId;
//   this.Impression = Impression;
//   this.Amount = Amount;
//   this.ReportDate = ReportDate;
//   this.PaymentStatus = PaymentStatus;
// }