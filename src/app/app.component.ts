import { Component ,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'chart-display';

  selectGroupId: any = [];
  selectData: any = [];
  deleteGroupId: any = [];
  deleteDataId: any = [];


  group = [
    { id: 1, name: 'Volvo' },
    { id: 2, name: 'Saab' },
    { id: 3, name: 'Opel' },
    { id: 4, name: 'Audi' },
  ];
  data = [
    { id: 1, name: 'DATA' },
    { id: 2, name: 'DATA 1' },
    { id: 3, name: 'Opel' },
    { id: 4, name: 'Audi' },
  ]
  ngOnInit() :void {
    this.selectGroupId = [2,3]
    this.selectData = [3]
  }
  onAdd($event:any, type: string) {
    if (type === 'group') {
      const value = $event.value;
      if (this.selectGroupId.indexOf(value) === -1) {
        this.selectGroupId.push(value);
      }
    }


  }
  onRemove($event :any, type: string) {
    if (type === 'group') {
      const value = $event.value;
      const index = this.selectGroupId.indexOf(value);
      if (index !== -1) {
        this.selectGroupId.splice(index, 1);
        if (this.deleteGroupId.indexOf(value) === -1) {
          this.deleteGroupId.push(value);
        }
      }
    }

  }
  click() {
    const test = {
      selectGroupId: this.selectGroupId,
      selectDataSource: this.selectData,
      deleteGroupId: this.deleteGroupId,
      deleteDataId: this.deleteDataId
    }
    console.log(test);
  }
}
