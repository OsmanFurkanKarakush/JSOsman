class Course {
  constructor(kod, saat, tarih, sinif) {
    this.kod = kod;
    this.saat = saat;
    this.tarih = tarih;
    this.sinif = sinif;
  }
  toString() {
    return (
      "Adı: " +
      this.kod + "\n" +
      " Saat: " +
      this.saat + "\n" +
      " Tarih: " +
      this.tarih + "\n" +
      " Sınıflar :" +
      this.sinif + "\n" +
      "-------------------------------------------------------" + "\n"
    );
  }
}
class Student {
  constructor(id, isim, ortalama, dersler) {
    this.id = id;
    this.isim = isim;
    this.ortalama = ortalama;
    this.dersler = dersler;
  }
  toString() {
    return (
      "Id: " +
      this.id + "\n" +
      " İsim: " +
      this.isim + "\n" +
      " Ortalama: " +
      this.ortalama + "\n" +
      " Dersler: " +
      this.dersler + "\n" +
      "-------------------------------------------------------" + "\n"
    );
  }
}
class Database {
  constructor() {
    this.url1 = "https://maeyler.github.io/JS/data/Students.txt";
    this.url2 = "https://maeyler.github.io/JS/data/Courses.txt";
    this.StudentMap = new Map();
    this.CourseMap = new Map();
  }

  async getRemoteData(methodId = -1, param = -1) {
    if (methodId == -1) {
      let rawData = await fetch(this.url1);
      let text = await rawData.text();
      let array = text.split("\n");
      for (let line of array) {
        let veri = line.split("\t");
        let student = new Student(veri[0], veri[1], veri[2], veri.slice(3));
        this.StudentMap.set(veri[0], student);
      }

      let rawData2 = await fetch(this.url2);
      let text2 = await rawData2.text();
      let newArray = text2.split("\n");
      for (let line2 of newArray) {
        let veri2 = line2.split("\t");
        let course = new Course(veri2[0], veri2[1], veri2[2], veri2.slice(3));
        this.CourseMap.set(veri2[0], course);
      }
    }

    if (param != -1) {
      if (methodId == 1) {
        this.NumberOfStudentsAboveGPA(param);
      } else if (methodId == 2) {
        this.CoursesTakenByStudent(param);
      } else if (methodId == 3) {
        this.ExamSchedule(param);
      } else if (methodId == 4) {
        this.StudentList(param);
      } else if (methodId == 5) {
        this.CourseList(param);
      } else if (methodId == 6) {
        this.NumberOfCourses(param);
      }
      else if (methodId == 7) {
        this.CoursesInDate(param);
      }
    } else if (methodId == 0) {
      this.RandomStd();
    }
  }

  

  //ÇALIŞIYOR
  RandomStd() {
    let array = [];
    for (let element of this.StudentMap.keys()) {
      array.push(element);
    }
    let randomStudent = array[Math.floor(Math.random() * array.length)];
    result.innerText = "";
    result.innerText = this.StudentMap.get(randomStudent);
  }
  //ÇALIŞIYOR
  NumberOfStudentsAboveGPA(num) {
    let count = 0;
    let array = [];
    for (let deger of this.StudentMap.values()) {
      if (Number(deger.ortalama) > num) {
        count += 1;
      }
    }
    result.innerText = "";
    result.innerText = count;
  }

  //ÇALIŞIYOR
  CoursesTakenByStudent(stu) {
    let ogrenci = this.StudentMap.get(stu);

    result.innerText = "";
    result.innerText = ogrenci.dersler;
  }

  //ÇALIŞIYOR
  ExamSchedule(num) {
    let stu = this.StudentMap.get(num);

    result.innerText = "";

    for (let ders of stu.dersler) {
      let cou = this.CourseMap.get(ders);
      result.innerText += cou;
    }
  }

  //ÇALIŞIYOR
  StudentList(course) {
    let alanlar = [];
    for (let student of this.StudentMap.values()) {
      let array = student.dersler;
      for (let ders of array) {
        if (ders == course) {
          alanlar.push(student);
        }
      }
    }
    result.innerText = alanlar;
  }

  CourseList(room) {
    let kursListesi = [];
    for (let kurs of this.CourseMap.values()) {
      let array = kurs.sinif;
      for (let yer of array) {
        if (yer == room) {
          kursListesi.push(kurs.kod);
        }
      }
    }
    result.innerText = kursListesi;
  }

  NumberOfCourses(room) {
    let count = 0;
    for (let kurs of this.CourseMap.values()) {
      let array = kurs.sinif;
      for (let yer of array) {
        if (yer == room) {
          count += 1;
        }
      }
    }
    result.innerText = count;
  }
  CoursesInDate(date) {
    let kursListesi = [];
    for (let kurs of this.CourseMap.values()) {
      if (date == kurs.tarih) {
        kursListesi.push(kurs);
      }
    }
    result.innerText = kursListesi;
  }

}



db = new Database();
db.getRemoteData();
