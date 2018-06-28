import {Component, OnInit} from '@angular/core';
import {ErrorStateMatcher} from '@angular/material/core';
import {FormControl, FormBuilder, FormGroupDirective, NgForm, Validators, FormGroup} from '@angular/forms';
import {map, startWith} from 'rxjs/internal/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  constructor(private fb: FormBuilder) {}
  form: FormGroup;
  filteredDeptHeads: Observable<string[]>;
  filteredHRMgrs: Observable<string[]>;
  filteredHRBPs: Observable<string[]>;
  deptHeadCtrl = new FormControl('', Validators.required);
  hrManagerCtrl = new FormControl('', Validators.required);
  hrBPCtrl = new FormControl('', Validators.required);
  departments: Departments[] = [
    {value: 'vit', viewValue: 'VIT'},
    {value: 'gtp', viewValue: 'GTP'},
    {value: 'gtt', viewValue: 'GTT'},
    {value: 'acc', viewValue: 'ACC'}
  ];
  groups: Departments[] = [
    {value: 'group1', viewValue: 'GROUP 1'},
    {value: 'group2', viewValue: 'GROUP 2'},
    {value: 'group3', viewValue: 'GROUP 3'},
    {value: 'group4', viewValue: 'GROUP 4'}
  ];
  deptHeads: string[] = ['ARUN', 'RAJ', 'ARUNRAJ'];
  hrMGRs: string[] = ['HR', 'MANAGER', 'HR MANAGER'];
  hrBPs: string[] = ['HR', 'BP', 'HR BP'];

  name = new FormControl();
  vroId = new FormControl('', Validators.required);
  noOfOpenings = new FormControl();
  departmentsList = new FormControl();
  group = new FormControl();
  deptHead = new FormControl('', Validators.required);
  hrManager = new FormControl('', Validators.required);
  hrBP = new FormControl('', Validators.required);
  model: any = {};
  ngOnInit() {
    this.form = new FormGroup({
      name: this.name,
      vroId: this.vroId,
      noOfOpenings: this.noOfOpenings,
      departmentsList: this.departmentsList,
      group: this.group,
      deptHead: this.deptHeadCtrl,
      hrManager: this.hrManagerCtrl,
      hrBP: this.hrBPCtrl
    });
    this.filteredDeptHeads = this.deptHeadCtrl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filterDeptHeads(value))
      );
    this.filteredHRMgrs = this.hrManagerCtrl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filterHRManager(value))
      );
    this.filteredHRBPs = this.hrBPCtrl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filterHRBPs(value))
      );
  }

  private _filterDeptHeads(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.deptHeads.filter(option => option.toLowerCase().includes(filterValue));
  }
  private _filterHRManager(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.hrMGRs.filter(option => option.toLowerCase().includes(filterValue));
  }
  private _filterHRBPs(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.hrBPs.filter(option => option.toLowerCase().includes(filterValue));
  }

  onSubmit(model) {
    if (this.form.valid) {
      console.log(model);
    }
  }
}
