//drop down menu

var dropdown = document.getElementsByClassName("dropdown-btn");
let i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  }); 
}



//display header section of department

function displayDeptFirstSection(deptName){
  document.querySelector('.dept-first-sec').innerHTML = `
  <h1>${deptName} DEPARTMENT</h1>
    <div class="dept-sub-container">
      <input class="search-bar" type="text" placeholder="Search">
      <div>
        <button class="add-doctor js-add-doc" onclick="toggleAddDoctorOverlay()">Add Doctor</button>
        <button class="delete-doctor" onclick="toggleDeleteDoctorOverlay()">Delete Doctor</button>
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

function toggleDeleteDoctorOverlay() {
  let element = document.querySelector('.delete-doc-overlay');
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
<p>Email id:</p>
<input type="email" class="doc-email">
<p>Gender:</p>
<select name="doc-sex" id="" class="doc-sex">
  <option value="">Select</option>
  <option value="Male">Male</option>
  <option value="Female">Female</option>
</select>
<p>Address:</p>
<textarea class="doc-address" name="" id="" cols="30" rows="4"></textarea>
<div class="btn-ctn">
  <button class="add-doc-btn js-add-doc-btn">Submit</button>
</div>
</div>`

//overlay delete doctor inner content 
document.querySelector('.delete-doc-overlay').innerHTML = `
<div class="delete-doc-dropdown-box">
<p class="add-title">DELETE DOCTOR</p>
<p>Enter Doctor Id:</p>
<input type="text" class="doc-id">
<div class="btn-ctn">
<button class="delete-doc-btn">Delete Doctor</button>
</div>
<p class="invalid-doctor"></p>
</div>
`


//Add doctor

function addDoctor(deptId,dept,n){
  document.querySelector('.js-add-doc-btn').addEventListener('click',()=>{
    let Name = document.querySelector('.doc-name').value;
    let Age = document.querySelector('.doc-age').value;
    let Phone = document.querySelector('.doc-contact').value;
    let sexIndex = document.querySelector('.doc-sex').selectedIndex;
    let Sex = document.querySelector('.doc-sex')[sexIndex].value;
  
    let newDoc = new createDoctor(++n,Name,deptId,Age,Phone,Sex);
    console.log(newDoc);
    dept.push(newDoc);
    displayDoctorList(dept);
    toggleAddDoctorOverlay();
  })
}

//create doctor
function createDoctor(doctorId,Name,deptId,Age,Phone,Sex){
  this.doctorId = doctorId;
  this.Name = Name;
  this.deptId = deptId
  this.Age = Age;
  this.Phone = Phone;
  this.Sex = Sex;
}

//delete doctor
function deleteDoctor(dept){
  let c = 0;
  document.querySelector('.delete-doc-btn').addEventListener('click',()=>{
    let docId = document.querySelector('.doc-id').value;
    dept.forEach(doctor => {
      if(doctor.doctorId == docId){
        dept.splice((docId-1),1);
        c++;
      }
    });
    if(c >0){
    displayDoctorList(dept);
    toggleDeleteDoctorOverlay();
    document.querySelector('.invalid-doctor').innerHTML = "";
    }
    else{
      document.querySelector('.invalid-doctor').innerHTML = `Invalid Doctor Id`;
    }
  })

}

//display doctor list

function displayDoctorList(department) {
  const doctors = document.querySelector('.department-table');
  doctors.innerHTML = `
  <tr>
    <th>Doctor Id</th>
    <th>Name</th>
    <th>Age</th>
    <th>Phone</th>
    <th>Sex</th>
  </tr>`

  let j = 0;
  department.forEach(data => {
  
    doctors.innerHTML += `
    <tr>
    <td>${data.doctorId}</td>
    <td>${data.Name}</td>
    <td>${data.Age}</td>
    <td>${data.Phone}</td>
    <td>${data.Sex}</td>
    </tr>
    `
    j++;
    
  });
  return j;
}