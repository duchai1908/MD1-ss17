// const todoList = [
//     "Do homework at 8 pm",
//     "Do Exercise everyday",
//     "Go to bed early",
// ];



// while (true) {
//     //Xây dựng chương trình ứng dụng todo List
//     let userInput = prompt("Mời bạn nhập C/R/U/D từ bàn phím");


//     if (userInput === "C") {
//         let todo = prompt("Thêm công việc mới");
//         todoList.push(todo);
//         printToDoList();
//     }
//     else if (userInput === "R") {
//         printToDoList();
//     }
//     else if (userInput === "U") {
//         let index = +prompt("Nhập số thứ tự công việc bạn muốn sửa");
//         let newTodo = prompt("Nhập công việc mới");
//         todoList[index - 1] = newTodo;
//         printToDoList();
//     }
//     else if (userInput === "D") {
//         let index = +prompt("Nhập số thứ tự công việc bạn muốn xóa");
//         todoList.splice(index - 1, 1);
//         printToDoList();
//     }
//     else if (userInput === "E") {
//         console.log('Cảm ơn đã dùng chương trình todoList');
//         break;
//     }
//     else {
//         console.log("Lệnh không hợp lệ Mời bạn nhập lại");
//     }
// }

// function printToDoList() {
//     for (let index in todoList) {
//         console.log(`${+index + 1}. ${todoList[index]}`);
//     }
// }


//Xây dựng một chương trình (1 hàm) máy tính cầm tay
//chỉ thực hiện phép cộng tính tổng của 2 số bất kỳ

// let a = +prompt("Mời bạn nhập số a:");
// let b = +prompt("Mời bạn nhập số b:");

// function sum(a, b) {
//     return a + b;
// }

// console.log(sum(a, b));

// let person = {
//     name: "Son",
//     age: 24,
//     handsome: true,
//     hobbies: ['Bóng đá', 'cầu lông'],
//     address: {
//         number: 10,
//         street: 'Thị Trấn Văn Giang',
//         ward: 'Văn Giang',
//         province: 'Hưng yên',
//         zipcode: 10000,
//     },
// };

// person.jobs = ['DEVELOPER', 'ADMIN', 'TESTER'];


// console.log(person);

// console.log("Tên", person.name);

// console.log("Tuổi", person.age);

// console.log("Sở thích", person.hobbies[1]);

// console.log("Địa chỉ", person.address.street);

// //lấy ra toàn bộ key person

// for (let key in person) {
//     // console.log(key);
//     console.log(key, person[key]);
// }


// delete person.jobs;
// console.log(person);

// // Nested Object (Đối tượng lồng nhau)

// console.log('number:', person.address.number);


// console.log("hobbies 1:", person.hobbies[0]);

// const studentList = [
//     {
//         name: "Son",
//         age: 24,
//         gender: "female",
//     },
//     {
//         name: "Van",
//         age: 29,
//         gender: "male",
//     },
//     {
//         name: "Phong",
//         age: 29,
//         gender: "female",
//     },
// ]

// console.log(studentList[0].age, studentList[0].gender);

// for (let index in studentList) {
//     console.log(studentList[index]);
// }

