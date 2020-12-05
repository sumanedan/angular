import { Injectable } from '@angular/core';
import { Student } from './student'
import { AngularFirestore } from '@angular/fire/firestore'
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private obj: AngularFirestore) { }
  saveStudent(student: Student) {
    console.log("inside service", student)
    this.obj.collection("studentdata").add({ ...student })
  }
  readStudent() {
    return this.obj.collection("studentdata").snapshotChanges()
  }
  updateStudent(student) {
    this.obj.doc("studentdata/" + student.did).update({ ...student })
  }
  deleteStudent(student) {
    this.obj.doc("studentdata/" + student.did).delete()
  }
}
