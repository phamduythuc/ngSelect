import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'chart-display';

  selectGroupId: any = [];
  addGroup: any = [];
  selectData: any = [];
  deleteGroupId: any = [];
  deleteDataId: any = [];
  dataGroup = [2, 3];

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
  ];
  ngOnInit(): void {
    this.selectGroupId = this.dataGroup;
    this.addGroup = this.dataGroup;
  }
  onAdd($event: any, type: string) {
    if (type === 'group') {
      const value = $event.id;
      if (this.selectGroupId.indexOf(value) === -1) {
        this.selectGroupId.push(value);
        // gửi lên server theo logic của bạn
      }
      if (this.deleteGroupId.indexOf(value) !== -1) {
        this.deleteGroupId.splice(this.deleteGroupId.indexOf(value), 1);
      }
    }
  }
  onRemove($event: any, type: string) {
    if (type === 'group') {
      const value = $event.value.id;
      const index = this.selectGroupId.indexOf(value);
      if (index !== -1) {
        this.selectGroupId.splice(index, 1);
      }
      if (this.deleteGroupId.indexOf(value) === -1) {
        this.deleteGroupId.push(value);
      }
    }
  }
  click() {
    const uniqueArray = [...new Set([...this.addGroup, ...this.selectGroupId])];
    const filteredArr2 = this.deleteGroupId.filter((value: any) =>
      this.addGroup.includes(value)
    );
    const newData = uniqueArray.filter(
      (value) => !filteredArr2.includes(value)
    );
    const uniqueArrays = [...new Set(filteredArr2)];

    const test = {
      selectGroupId: newData,
      selectDataSource: this.selectData,
      deleteGroupId: filteredArr2,
      deleteDataId: this.deleteDataId,
    };
    console.log(test);
  }
}
