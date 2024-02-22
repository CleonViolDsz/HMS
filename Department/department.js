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
      <li><a href="">Lab Reports</a></li>
      <li><a href="">Room</a></li>
      <li><a href="">Billing</a></li>
    </ul>
`