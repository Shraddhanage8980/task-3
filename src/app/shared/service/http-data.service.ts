import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";

@Injectable()

export class HttpService{
    constructor(private http: HttpClient){}

    postSection(secData : any){
        this.http.post('https://task-3-b1866-default-rtdb.firebaseio.com/section.json',secData).subscribe({
            next : (param : any)=>{
                console.log(param);
                this.getSection()
            }
        })
    }
    getSection(){
        return this.http.get('https://task-3-b1866-default-rtdb.firebaseio.com/section.json').pipe(map((resp : any)=>{
            let mySecArr = [];
            for(let sec in resp){
                mySecArr.push({...resp[sec]});
            }
            console.log(mySecArr);
            return mySecArr;
        }))
    }
}