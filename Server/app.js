const express = require('express');
const app = express();
const cors = require('cors')
const dotenv = require('dotenv')
const dbservice = require('./dbService.js');
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//read

//read Doctor Data
app.get('/getDoctorData/:id',(request,response)=>{
  const {id} = request.params;
  
  const db = dbservice.getDbServieInstance();
  const result = db.getDoctorData(id);

  result
  .then(data=>response.json({data: data}))
  .catch(err => console.log(err));
})

//read Patient data
app.get('/getPatientData/:category',(request,response)=>{
  const {category} = request.params;
  
  const db = dbservice.getDbServieInstance();
  const result = db.getPatientData(category);

  result
  .then(data=>response.json({data: data}))
  .catch(err => console.log(err));
})


//read lab report data
app.get('/getLabReport',(request,response)=>{
  const db = dbservice.getDbServieInstance();
  const result = db.getLabReportData();

  result
  .then(data=>response.json({data: data}))
  .catch(err => console.log(err));
})


//get room data
app.get('/getRoomData',(request,response)=>{
  const db = dbservice.getDbServieInstance();
  const result = db.getRoomData();

  result
  .then(data=>response.json({data: data}))
  .catch(err => console.log(err));
})


//get billing data
app.get('/getBillingData',(request,response)=>{
  const db = dbservice.getDbServieInstance();
  const result = db.getBillingData();

  result
  .then(data=>response.json({data: data}))
  .catch(err => console.log(err));
})


//insert Doctor Data

app.get('/getDoctorCount/:dept_id',(request,response)=>{
  const {dept_id} = request.params;
  const db = dbservice.getDbServieInstance();
  const result = db.getDoctorCount(dept_id);
  result
  .then(data=>response.json({data: data}))
  .catch(err => console.log(err));
})

app.post('/insertDocData',(request,response)=>{
  const {doctor_id,doctor_name,phone,email,gender,Age,salary,employee_status,dept_id} = request.body;
  const db = dbservice.getDbServieInstance();
  const result = db.addDoctor(doctor_id,doctor_name,phone,email,gender,Age,salary,employee_status,dept_id);
  result
  .then(data=>response.json({data: data}))
  .catch(err => console.log(err));
})

//insert patient data
app.get('/getPatientCount/:category',(request,response)=>{
  const {category} = request.params;
  const db = dbservice.getDbServieInstance();
  const result = db.getPatientCount(category);
  result
  .then(data=>response.json({data: data}))
  .catch(err => console.log(err));
})

app.post('/insertPatientData',(request,response)=>{
  const {patient_id,name,age,phone_no,gender,disease,doctor_id,date_of_admission,date_of_discharge,category} = request.body;
  // console.log(request.body);
  const db = dbservice.getDbServieInstance();
  const result = db.addPatient(patient_id,name,age,phone_no,gender,disease,doctor_id,date_of_admission,date_of_discharge,category);
  result.
  then(data=>response.json({data: data}))
  .catch(err=>console.log(err));
})

//insert lab report

app.post('/insertLabReportData',(request,response)=>{
  const {patient_id,category,impression,report_date,doctor_id,amount,payment_status} = request.body;
  const db = dbservice.getDbServieInstance();
  const result = db.addLabReport(patient_id,category,impression,report_date,doctor_id,amount,payment_status);
  result.
  then(data=>response.json({data: data}))
  .catch(err=>console.log(err));
})

//insert Bill

app.post('/insertBillData',(request,response)=>{
  const {patient_id,operation_charges,lab_charges,medicine_charges,room_charges,total_bill,payment_status} = request.body;
  const db = dbservice.getDbServieInstance();
  const result = db.addBill(patient_id,operation_charges,lab_charges,medicine_charges,room_charges,total_bill,payment_status);
  result.
  then(data=>response.json({data: data}))
  .catch(err=>console.log(err));
})


//updadte

//update doc 
app.use('/getIndividualDocData/:doc_id/:dept_id',(request,response)=>{
  const {doc_id,dept_id} = request.params;
  const db = dbservice.getDbServieInstance();
  const result = db.getIndDoc(doc_id,dept_id);
  result.then(data=>response.json({data:data}))
  .catch(err=>console.log(err));
})

app.use('/updateDoc',(request,response)=>{
  const {doctor_name,phone,email,gender,Age,salary,employee_status,doctor_id} = request.body;
  const db = dbservice.getDbServieInstance();
  const result = db.updateDoc(doctor_name,phone,email,gender,Age,salary,employee_status,doctor_id)
  result.then(data=>response.json({success:data}))
  .catch(err=>console.log(err));
})

//update Patients

app.use('/getIndividualPatientData/:patient_id/:category',(request,response)=>{
  const {patient_id,category} = request.params;
  const db = dbservice.getDbServieInstance();
  const result = db.getIndPatient(patient_id,category);
  result.then(data=>response.json({data:data}))
  .catch(err=>console.log(err));
})

app.use('/updatePatient',(request,response)=>{
  const {name,age,phone_no,gender,disease,doctor_id,date_of_admission,date_of_discharge,patient_id} = request.body;
  const db = dbservice.getDbServieInstance();
  const result = db.updatePatient(name,age,phone_no,gender,disease,doctor_id,date_of_admission,date_of_discharge,patient_id)
  result.then(data=>response.json({success:data}))
  .catch(err=>console.log(err));
})

//update Lab Reports
app.use('/getIndividualLabReportData/:id',(request,response)=>{
  const {id} = request.params;
  const db = dbservice.getDbServieInstance();
  const result = db.getIndLabReport(id);
  result.then(data=>response.json({data:data}))
  .catch(err=>console.log(err));
})

app.use('/updateLabReport',(request,response)=>{
  const {patient_id,category,impression,report_date,doctor_id,amount,payment_status,report_id} = request.body;
  const db = dbservice.getDbServieInstance();
  const result = db.updateLabReport(patient_id,category,impression,report_date,doctor_id,amount,payment_status,report_id)
  result.then(data=>response.json({success:data}))
  .catch(err=>console.log(err));
})

//Update bill
app.use('/getIndividualBillData/:id',(request,response)=>{
  const {id} = request.params;
  const db = dbservice.getDbServieInstance();
  const result = db.getIndBill(id);
  result.then(data=>response.json({data:data}))
  .catch(err=>console.log(err));
})

app.use('/updateBill',(request,response)=>{
  const {operation_charges,lab_charges,medicine_charges,room_charges,total_bill,payment_status,patient_id} = request.body;
  const db = dbservice.getDbServieInstance();
  const result = db.updateBill(operation_charges,lab_charges,medicine_charges,room_charges,total_bill,payment_status,patient_id)
  result.then(data=>response.json({success:data}))
  .catch(err=>console.log(err));
})

//update Room

app.use('/getIndRoomData/:room_no',(request,response)=>{
  const {room_no} = request.params;
  const db = dbservice.getDbServieInstance();
  const result = db.getIndRoom(room_no);
  result
  .then(data=>response.json({data:data}))
  .catch(err=>console.log(err));
})

app.use('/updateRoom',(request,response)=>{
  const {patient_id,status,room_no} = request.body;
  const db = dbservice.getDbServieInstance();
  const result = db.updateRoom(patient_id,status,room_no);
  result.then(data=>response.json({success:data}))
  .catch(err=>console.log(err));
})


app.listen(process.env.PORT,()=> console.log('app is running'));