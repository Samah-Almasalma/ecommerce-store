import { Component, EventEmitter, Input , Output} from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent {
@Input() title:any=''
@Input() data:any[]=[]
@Output() selectValue = new EventEmitter()

changeValue(e:any){
  this.selectValue.emit(e)
}

}
