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
      <li><a href="Room.html">Room</a></li>
      <li><a href="../Billing/Billing.html">Billing</a></li>
    </ul>
`;



  document.querySelector('.room-first-sec').innerHTML = `
  <h1>ROOM</h1>
    <div class="dept-sub-container">
      <input class="search-bar" type="text" placeholder="Search Room No.">
      <div>
        <button class="assign-room" onclick="toggleRoomOverlay('assign-room-overlay')">Assign Room</button>
        <button class="vacate-room" onclick="toggleRoomOverlay('vacate-room-overlay')">Vacate Room</button>
      </div>
    </div>

  `

  document.querySelector('.assign-room-overlay').innerHTML = 
  `
  <div class="assign-room-dropdown-box">
      <p class="add-title">ASSIGN ROOM</p>
      <p>Enter Room Number:</p>
      <input type="text" class="room-no">
      <p>Enter Patient ID:</p>
      <input type="text" class="patientId">
      <div class="btn-ctn">
        <button class="assign-room-btn">Assign Room</button>
      </div>
      <p class="invalid-id"></p>
    </div>
  `

  document.querySelector('.vacate-room-overlay').innerHTML = 
  `
  <div class="vacate-room-dropdown-box">
      <p class="add-title">VACATE ROOM</p>
      <p>Enter Room Number:</p>
      <input type="text" class="vacate-room-no">
      <p>Enter Patient ID:</p>
      <input type="text" class="vacate-PatientId">
      <div class="btn-ctn">
        <button class="vacate-room-btn">Vacate Room</button>
      </div>
      <p class="invalid-room-id"></p>
    </div>
  `

  document.querySelector('.assign-room-btn').addEventListener('click',()=>{
    let RoomNo = Number(document.querySelector('.room-no').value);
    let PatientId = document.querySelector('.patientId').value;
    
    let flag = false;
    Room.forEach(data=>{
      if(RoomNo == data.RoomNo && data.Status != 'Occupied'){
        flag = true;
        
        data.PatientId = PatientId;
        data.Status = 'Occupied';
      }
    });
    if(flag == true){
      document.querySelector('.invalid-id').innerHTML = '';
      toggleRoomOverlay('assign-room-overlay');
      displayRoomList(Room);
    }
    else{
      document.querySelector('.invalid-id').innerHTML = 'The Room is Occupied';
    }
  });

  document.querySelector('.vacate-room-btn').addEventListener('click',()=>{
    let RoomNo = Number(document.querySelector('.vacate-room-no').value);
    let PatientId = document.querySelector('.vacate-PatientId').value;
    let flag = false;
    let invalid_text = "";
    Room.forEach(data=>{
      if(RoomNo == data.RoomNo && data.Status == 'Occupied'){
        if(PatientId == data.PatientId){
          flag = true;
          data.PatientId = null;
        data.Status = 'Available'
        }
        else{
          invalid_text = 'Invalid Patient ID';
        }
        
      }
      else{
        invalid_text = 'The Room is unoccupied';
      }
    })
    console.log(flag);
    if(flag == true){
      document.querySelector('.invalid-id').innerHTML = '';
      toggleRoomOverlay('vacate-room-overlay');
      displayRoomList(Room);
    }
    else{
      document.querySelector('.invalid-room-id').innerHTML = invalid_text;
    }
  });


  document.addEventListener('keydown',(event)=>{
    if(event.key == 'Enter'){
     let search_roomNo = Number(document.querySelector('.search-bar').value);
      const searchList = [];
      let flag = false;
     Room.forEach(data => {
      if(data.RoomNo == search_roomNo){
        flag = true;
        searchList.push(data);
        displayRoomList(searchList);
      }
     });
     if(flag == false){
      document.querySelector('.room-table').innerHTML = 'No results found';
     }
    }
  });
  


  displayRoomList(Room);

  function displayRoomList(Rooms){
    const roomList = document.querySelector('.room-table');
    roomList.innerHTML = 
    `
    <th>Room No.</th>
    <th>Patient ID</th>
    <th>Status</th>
    `;

    
    Rooms.forEach(data=>{
      roomList.innerHTML += 
      `
      <td>${data.RoomNo}</td>
      <td>${data.PatientId}</td>
      <td>${data.Status}</td>
      `
    })
  }

  function toggleRoomOverlay(class_name){
    let element = document.querySelector(`.${class_name}`);
    if(element.style.visibility === 'hidden'){
      element.style.visibility = 'visible';
    }
    else{
      element.style.visibility = 'hidden';
    }
  }

  
        