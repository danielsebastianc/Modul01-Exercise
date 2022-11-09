// Soal 1
// memebuat fungsi untuk kalkulasi
// age dari tanggal lahir(date) menjadi usia

class Student {
    constructor(name, email, dob, score) {
        this.name = name;
        this.email = email;
        this.dob = dob;
        this.score = score;
    }
}

//contoh data
let dbStudent = [
    new Student("Edo", "edo@mail.com", "1997-04-25", 85),
    new Student("Andrew", "andrew@mail.com", "1998-11-12", 65),
    new Student("Zafran", "zafran@mail.com", "1992-02-01", 95),
    new Student("John", "john@mail.com", "1996-11-11", 75),
];

const calculateAge = (date) => {
    let dateNow = new Date();
    let dob = new Date(date);
    let age = dateNow.getFullYear() - dob.getFullYear();
    let month = dateNow.getMonth() - dob.getMonth();
    if (month < 0 || (month === 0 && dateNow.getDate() < dob.getDate())) {
        age--;
    }
    return age;
};

let calculateStudent = (arr) => {
    //calculate avg
    let totalScore = 0;
    arr.forEach((student) => {
        totalScore += student.score;
    });
    let avgScore = totalScore / arr.length;

    //calculate age from dob
    dbStudent.forEach((student) => {
        student.dob = calculateAge(student.dob);
    });

    //callculate min max of score
    let studentScore = [];
    arr.forEach((student) => {
        studentScore.push(student.score);
    });

    let highestStudent = arr.find(
        (student) => student.score == Math.min(...studentScore)
    );
    let lowestStudent = arr.find(
        (student) => student.score == Math.max(...studentScore)
    );

    //calculate avg age
    let totalAge = 0;
    arr.forEach((student) => {
        totalAge += student.dob;
    });
    let avgAge = totalAge / arr.length;

    //calculate min max of age
    let studentAge = [];
    arr.forEach((student) => {
        studentAge.push(student.dob);
    });
    let highestAge = arr.find(
        (student) => student.dob == Math.min(...studentAge)
    );
    let lowestAge = arr.find(
        (student) => student.dob == Math.max(...studentAge)
    );

    //masukin semuanya ke dalam object
    return {
        score: {
            highest: highestStudent,
            lowest: lowestStudent,
            average: avgScore,
        },
        age: {
            highest: highestAge,
            lowest: lowestAge,
            average: avgAge,
        },
    };
};

console.log(calculateStudent(dbStudent));

// Soal 2 create program to create transaction

// saya kurang paham dengan soalnya
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class Transaction extends Product {
    constructor(name, price, qty, total) {
        super(name, price);
        this.qty = qty;
        this.total = total;
    }
}

let cart = [];
const addtoCart = (object) => {
    return cart.push(
        new Transaction(object.name, object.price, object.qty, object.total)
    );
};

const showTotal = (cart) => {
    let total = 0;
    cart.forEach((obj) => {
        total += obj.total;
    });
    return total;
};

const checkout = () => {
    return cart;
};
