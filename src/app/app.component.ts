import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from './shared/service/http-data.service';

@Component({
  selector: 'app-root',
  // standalone: true,
  // imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'task-3';
  mySecForm : FormGroup | any;
  allSecArr : any[] = [];

  constructor(private httpServ : HttpService){}
  ngOnInit(): void {
      this.mySecForm = new FormGroup ({
        sectionHeader : new FormControl('',Validators.required),
        sectionDetails : new FormControl('',Validators.required)
      })
      this.getAllSectionData()
  }

  onSubmit(){
    console.log(this.mySecForm.value);
    this.httpServ.postSection(this.mySecForm.value)
    this.getAllSectionData()
    this.mySecForm.reset()
  }
  getAllSectionData(){
    this.httpServ.getSection().subscribe({
      next : (param)=>{
        this.allSecArr = param
      }
    })
  }

}
