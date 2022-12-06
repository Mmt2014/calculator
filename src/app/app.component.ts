import { Component } from '@angular/core';
import { FormControl,FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mycalculator';
  toshow ='0'
  currvalue=''
writetoinput(value: string){
  this.currvalue = this.currvalue + value
  this.toshow = this.currvalue
}
equalto(){
  this.toshow=eval(this.currvalue)
  this.currvalue = this.toshow
}
clear(){
  this.currvalue='';
  this.toshow = '0'
}
back(){
  this.currvalue=this.currvalue.slice(0,-1)
  this.toshow = this.currvalue
  if(this.toshow == ''){this.toshow = '0'}
  

}

}
