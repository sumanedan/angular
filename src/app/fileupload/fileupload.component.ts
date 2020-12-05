import { Component, OnInit } from '@angular/core';
import {AngularFireStorage} from '@angular/fire/storage'
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileuploadComponent implements OnInit {
  selectedFile
  
  constructor(private storage:AngularFireStorage) { }

  ngOnInit(): void {
  }
  uploadFile(event) {
    console.log(event)
   
    this.selectedFile=<File>event.target.files[0]
    console.log(this.selectedFile)
  }
  upload() {
    console.log("file uploaded")
    this.storage.upload("/images"+Math.random()+this.selectedFile,this.selectedFile)
    let fd=new FormData()
    // fd.append("image",this.selectedFile,this.selectedFile.name)
    // this.http.post("https://firebasestorage.googleapis.com/v0/b/studentreg-b10f3.appspot.com/",fd)
    // .subscribe((res)=>{
    //   console.log("success")
    // },
    // err=>{
    //   console.log("error occured..")
    // }
    // )

  }
}
