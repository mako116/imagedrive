// import doctor from "../assets/doctors/doctor-1.jpg"
// import doctor2 from "../assets/doctors/doctor-2.jpg"
// const UserData=[
//     {
//     img:doctor2,
//     Name:"Dr (Lady) Ijeoma Nnabuife",
//     email:"newemail@gmail.com"
//    },
//     {
//     img:doctor,
//     Name:"Dr Edidiong Monday Udo",
//     email:"newemail@gmail.com"
// }
// ]

import axios from "axios";

const EMPLOYEE_API_BASE_URL = "https://backend.imagepluseyeclinic.com/api/users";


// class UsersService {
//     getUsers(){
//         return axios.get(EMPLOYEE_API_BASE_URL);
//     } 
//     createUsers(Users){
//         return axios.post(EMPLOYEE_API_BASE_URL, Users);
//     }
//     getUsersId(usersId){
//         return axios.get(EMPLOYEE_API_BASE_URL + '/' + usersId)
//     }
//     updateUsers(users, usersId){
//         return axios.put(EMPLOYEE_API_BASE_URL + '/' + usersId, users)
//     }
//     deleteUsers(usersId){
//         return axios.delete(EMPLOYEE_API_BASE_URL + '/' + usersId)
//     }
// }
 
 

//  export default new UsersService()