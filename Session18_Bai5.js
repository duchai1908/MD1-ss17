// //Bài toàn trên có thể biến thành ứng dụng “Quản lý danh sách nhân viên” với việc cho người dùng nhập vào C/R/U/D/E và đưa toàn bộ code phía trên vào trong vòng lặp while
let staff = {
    id: 1,
    name: "Nguyễn",
    age: 20,
    salary: 1000
}
let company = [];
company.push(staff);
console.log(company);

function displayStaff() {
    for (let i in company) {
        console.log("----------------------");
        console.log("id", company[i].id);
        console.log("Name", company[i].name);
        console.log("age", company[i].age);
        console.log("salary", company[i].salary);
    }
}

let state = true;

while (state) {
    let input = prompt("Nhập C/R/U/D/E để tiếp tục chương trình").toLocaleLowerCase();
    if (input === "c") {
        let newName = prompt("Nhập tên nhân viên muốn thêm");
        let newAge = +prompt("Nhập tuổi nhân viên muốn thêm");
        let newSalary = +prompt("Nhập lương nhân viên muốn thêm");

        let newStaff = {
            id: company[company.length - 1].id + 1,
            name: newName,
            age: newAge,
            salary: newSalary
        }
        company.push(newStaff);
        displayStaff();
    }
    else if (input === "r") {
        let index = +prompt("Nhập số thứ tự nhân viên muốn xem");
        console.log(company[index - 1]);
    }
    else if (input === "u") {
        // let index = +prompt("Nhập số thứ tự nhân viên muốn sửa");
        // let newName = prompt("Nhập tên nhân viên muốn sửa");
        // let newAge = +prompt("Nhập tuổi nhân viên muốn sửa");
        // let newSalary = +prompt("Nhập lương nhân viên muốn sửa");
        // company[index - 1].name = newName;
        // company[index - 1].age = newAge;
        // company[index - 1].salary = newSalary;
        // console.log(company);

        //tìm kiếm ra nhân viên muốn cập nhạt
        let id = +prompt('Mời bạn nhập id');
        let staffIndex = company.findIndex(
            function (el, i) {
                return el.id === id;
            });
        if (staffIndex < 0) {
            console.log("no staff index found");
        }
        else {
            let salary = prompt('Mời bạn nhập lương mới');
            company[staffIndex].salary = salary;
            displayStaff();
        }
    }
    else if (input === "d") {
        let index = +prompt("Nhập số thứ tự nhân viên muốn xóa");
        company.splice(index - 1, 1);
        console.log(company);
    }
    else if (input === "e") {
        console.log('Cảm ơn đã dùng chương trình');
        state = false;
    }
    else {
        console.log("Lệnh không hợp lệ Mời bạn nhập lại");
    }
}


//TẠO TODOLIST TRONG OBJECT
// const todoList = [
//     { id: 1, todo: "Have breakfast", completed: false },
//     { id: 2, todo: "Have breakfast", completed: true },
//     { id: 3, todo: "Have breakfast", completed: false },
// ];



// function addTodo(todo) {
//     let newTodo = 0;
//     for (let i = 0; i < todoList.length; i++) {
//         newTodo - todoList.length - 1;
//     }
//     let newTodoList = {
//         id: todoList.length + 1,
//         todo: todo,
//         completed: false,
//     }
//     todoList.push(newTodoList);
// }

// addTodo("Đi tắm");
// console.log(todoList);

// function updateTodoList(id) {
//     let findIndex = todoList.findIndex((e) => id === e.id);
//     todoList[findIndex].completed = true;
// }

// updateTodoList(4);
// console.log(todoList);

// function removeTodo(id) {
//     let check = -1;
//     for (let i = 0; i < todoList.length; i++) {
//         if (id == todoList[i].id) {
//             check = i;
//         }
//     }
//     todoList.splice(check, 1);
// }

// removeTodo(2);
// console.log(todoList);

// LUYỆN TẬP VÀ THAO TÁC ĐỐI TƯỢNG OBJECT
// let players = {
//     name: "Messi",
//     age: 30,
//     nation: "Argentine",
//     club: "PSG",
// };

// players.email = "messi@gmail.com";
// console.log(players);

/*
{
  name: "Messi",
  age: 30,
  nation: "Argentina",
  club: "PSG",
  email: "messi@gmail.com",
};
*/