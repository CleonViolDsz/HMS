const mysql = require('mysql2');
const dotenv = require('dotenv');
let instance = null;
dotenv.config();

const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  port: process.env.DB_PORT
});

connection.connect((err)=>{
  if(err){
    console.log(err.message);
  }
  // console.log('db ' + connection.state);
})

class DbService {
  static getDbServieInstance() {
    return instance? instance: new DbService();
  }


//get doctor data
  async getDoctorData(id){
    id = parseInt(id);
    try{
      const response = await new Promise((resolve, reject)=>{
        const query = `select * from doctor where dept_id = ?;`;
        connection.query(query,[id],(err,results)=>{
          if(err) reject(new Error(err.message));
          resolve(results);
        })
      });
      //  console.log(response);
      return response;
    }
    catch(error){
      console.log(error);
    }
  }

  //get patient data
  async getPatientData(category){
    
    try{
      const response = await new Promise((resolve, reject)=>{
        const query = `select * from patient where category = ?;`;
        connection.query(query,[category],(err,results)=>{
          if(err) reject(new Error(err.message));
          resolve(results);
        })
      });
      // console.log(response);
      return response;
    }
    catch(error){
      console.log(error);
    }
  }

  //get lab report data
  async getLabReportData(){
    
    try{
      const response = await new Promise((resolve, reject)=>{
        const query = `select * from lab_report`;
        connection.query(query,(err,results)=>{
          if(err) reject(new Error(err.message));
          resolve(results);
        })
      });
      // console.log(response);
      return response;
    }
    catch(error){
      console.log(error);
    }
  }

  //get room data
  async getRoomData(){
    
    try{
      const response = await new Promise((resolve, reject)=>{
        const query = `select * from room`;
        connection.query(query,(err,results)=>{
          if(err) reject(new Error(err.message));
          resolve(results);
        })
      });
      // console.log(response);
      return response;
    }
    catch(error){
      console.log(error);
    }
  }

  //get bill data
  async getBillingData(){
    
    try{
      const response = await new Promise((resolve, reject)=>{
        const query = `select * from bill`;
        connection.query(query,(err,results)=>{
          if(err) reject(new Error(err.message));
          resolve(results);
        })
      });
      // console.log(response);
      return response;
    }
    catch(error){
      console.log(error);
    }
  }

  //get doc count
  async getDoctorCount(dept_id){
    dept_id = parseInt(dept_id);
    try{
     
      const response = await new Promise((resolve, reject)=>{
        const query = `select count(*) as doctor_count from doctor where dept_id = ?;`;
        connection.query(query,[dept_id],(err,results)=>{
          
          if(err) reject(new Error(err.message));
          resolve(results[0].doctor_count);
        })
      });
      return response;
    }
    catch(error){
      console.log(error);
    }
  }

  // add doctor

  async addDoctor(doctor_id,doctor_name,phone,email,gender,Age,salary,employee_status,dept_id){
    
    try{
      const response = await new Promise((resolve, reject)=>{
        const query = `insert into doctor values(?,?,?,?,?,?,?,?,?)`;
        connection.query(query,[doctor_id,doctor_name,phone,email,gender,Age,salary,employee_status,dept_id],(err,results)=>{
          if(err) reject(new Error(err.message));
          resolve(results);
        })
      });
      console.log(response);
      return response;
    }
    catch(error){
      console.log(error);
    }
  }

  //add patient
  async getPatientCount(category){
    try{
      const response = await new Promise((resolve, reject)=>{
        const query = `select count(*) as patient_count from patient where category = ?;`;
        connection.query(query,[category],(err,results)=>{
          
          if(err) reject(new Error(err.message));
          resolve(results[0].patient_count);
        })
      });
      console.log(response);
      return response;
    }
    catch(error){
      console.log(error);
    }
  }

  async addPatient(patient_id,name,age,phone_no,gender,disease,doctor_id,date_of_admission,date_of_discharge,category){
    
    try{
      const response = await new Promise((resolve, reject)=>{
        const query = `insert into patient values(?,?,?,?,?,?,?,?,?,?)`;
        connection.query(query,[patient_id,name,age,phone_no,gender,disease,doctor_id,date_of_admission,date_of_discharge,category],(err,results)=>{
          if(err) reject(new Error(err.message));
          resolve(results);
        })
      });
      // console.log(response);
      return response;
    }
    catch(error){
      console.log(error);
    }
  }

  //add Lab report

  async addLabReport(patient_id,category,impression,report_date,doctor_id,amount,payment_status){
    
    try{
      const response = await new Promise((resolve, reject)=>{
        const query = `insert into lab_report(patient_id,category,impression,report_date,doctor_id,amount,payment_status) values(?,?,?,?,?,?,?)`;
        connection.query(query,[patient_id,category,impression,report_date,doctor_id,amount,payment_status],(err,results)=>{
          if(err) reject(new Error(err.message));
          resolve(results);
        })
      });
      console.log(response);
      return response;
    }
    catch(error){
      console.log(error);
    }
  }

  //add Bill

  async addBill(patient_id,operation_charges,lab_charges,medicine_charges,room_charges,total_bill,payment_status){
    
    try{
      const response = await new Promise((resolve, reject)=>{
        const query = `insert into bill(patient_id,operation_charges,lab_charges,medicine_charges,room_charges,total_bill,payment_status) values(?,?,?,?,?,?,?)`;
        connection.query(query,[patient_id,operation_charges,lab_charges,medicine_charges,room_charges,total_bill,payment_status],(err,results)=>{
          if(err) reject(new Error(err.message));
          resolve(results);
        })
      });
      console.log(response);
      return response;
    }
    catch(error){
      console.log(error);
    }
  }


  //update doc
  async getIndDoc(doc_id,dept_id){
    dept_id = parseInt(dept_id)
    try{
      const response = await new Promise((resolve, reject)=>{
        const query = `select * from doctor where doctor_id = ? and dept_id = ?;`;
        connection.query(query,[doc_id,dept_id],(err,results)=>{
          
          if(err) reject(new Error(err.message));
          resolve(results[0]);
        })
      });
      // console.log(response);
      return response;
    }
    catch(error){
      console.log(error);
    }
  }

  async updateDoc(doctor_name,phone,email,gender,Age,salary,employee_status,doctor_id){
    try{
      const response = await new Promise((resolve, reject)=>{
        const query = `update doctor set 
        doctor_name=?,phone=?,email=?,gender=?,Age=?,salary=?,employee_status=? where doctor_id = ?;
        `;
        connection.query(query,[doctor_name,phone,email,gender,Age,salary,employee_status,doctor_id],(err,results)=>{
          
          if(err) reject(new Error(err.message));
          resolve(results.affectedRows);
        })
      });
      console.log(response);
      return response;
    }
    catch(error){
      console.log(error);
    }
  }

  //update patient

  async getIndPatient(patient_id,category){
    
    try{
      const response = await new Promise((resolve, reject)=>{
        const query = `select * from patient where patient_id = ? and category = ?;`;
        connection.query(query,[patient_id,category],(err,results)=>{
          
          if(err) reject(new Error(err.message));
          resolve(results[0]);
        })
      });
      console.log(response);
      return response;
    }
    catch(error){
      console.log(error);
    }
  }

  async updatePatient(name,age,phone_no,gender,disease,doctor_id,date_of_admission,date_of_discharge,patient_id){
    try{
      const response = await new Promise((resolve, reject)=>{
        const query = `update patient set 
        name=?,age=?,phone_no=?,gender=?,disease=?,doctor_id=?,date_of_admission=?,date_of_discharge=? where patient_id = ?;
        `;
        connection.query(query,[name,age,phone_no,gender,disease,doctor_id,date_of_admission,date_of_discharge,patient_id],(err,results)=>{
          
          if(err) reject(new Error(err.message));
          resolve(results);
        })
      });
      console.log(response);
      return response;
    }
    catch(error){
      console.log(error);
    }
  }

  //update Lab Report
  async getIndLabReport(id){
    id = parseInt(id);
    try{
      const response = await new Promise((resolve, reject)=>{
        const query = `select * from lab_report where report_id = ?;`;
        connection.query(query,[id],(err,results)=>{
          if(err) reject(new Error(err.message));
          resolve(results[0]);
        })
      });
      console.log(response);
      return response;
    }
    catch(error){
      console.log(error);
    }
  }

  async updateLabReport(patient_id,category,impression,report_date,doctor_id,amount,payment_status,report_id){
    try{
      const response = await new Promise((resolve, reject)=>{
        const query = `update lab_report set 
        patient_id = ?,category = ?,impression = ?,report_date = ?,doctor_id = ?,amount = ?,payment_status = ? where report_id = ?;
        `;
        connection.query(query,[patient_id,category,impression,report_date,doctor_id,amount,payment_status,report_id],(err,results)=>{
          
          if(err) reject(new Error(err.message));
          resolve(results);
        })
      });
      console.log(response);
      return response;
    }
    catch(error){
      console.log(error);
    }
  }

  //update bill
  async getIndBill(id){
    // id = parseInt(id);
    try{
      const response = await new Promise((resolve, reject)=>{
        const query = `select * from bill where patient_id = ?;`;
        connection.query(query,[id],(err,results)=>{
          if(err) reject(new Error(err.message));
          resolve(results[0]);
        })
      });
      console.log(response);
      return response;
    }
    catch(error){
      console.log(error);
    }
  }

  async updateBill(operation_charges,lab_charges,medicine_charges,room_charges,total_bill,payment_status,patient_id){
    // bill_no = parseInt(bill_no)
    try{
      const response = await new Promise((resolve, reject)=>{
        const query = `update bill set operation_charges = ?,lab_charges = ?,medicine_charges = ?,room_charges = ?,total_bill = ?,payment_status = ? where patient_id = ?;
        `;
        connection.query(query,[operation_charges,lab_charges,medicine_charges,room_charges,total_bill,payment_status,patient_id],(err,results)=>{
          
          if(err) reject(new Error(err.message));
          resolve(results);
        })
      });
      console.log(response);
      return response;
    }
    catch(error){
      console.log(error);
    }
  }

  //update room

  async getIndRoom(room_no){
    room_no = parseInt(room_no);
    try{
      const response = await new Promise((resolve, reject)=>{
        const query = `select * from room where room_no = ?;`;
        connection.query(query,[room_no],(err,results)=>{
          if(err) reject(new Error(err.message));
          resolve(results[0]);
        })
      });
      console.log(response);
      return response;
    }
    catch(error){
      console.log(error);
    }
  }

  async updateRoom(patient_id,status,room_no){
    // bill_no = parseInt(bill_no)
    try{
      const response = await new Promise((resolve, reject)=>{
        const query = `
        update room set patient_id = ?,status = ? where room_no = ?;
        `;
        connection.query(query,[patient_id,status,room_no],(err,results)=>{
          
          if(err) reject(new Error(err.message));
          resolve(results);
        })
      });
      console.log(response);
      return response;
    }
    catch(error){
      console.log(error);
    }
  }


}

module.exports = DbService;