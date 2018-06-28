import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-primary-skills',
  templateUrl: './primary-skills.component.html',
  styleUrls: ['./primary-skills.component.css']
})
export class PrimarySkillsComponent implements OnInit {
  primarySkillsForm: FormGroup;
  primarySkill1 = new FormControl();
  primarySkill2 = new FormControl();
  primarySkillInputs = [{value: 'primarySkill1'}, {value: 'primarySkill2'}];
  constructor() { }

  ngOnInit() {
    this.primarySkillsForm = new FormGroup({
      primarySkill1: this.primarySkill1,
      primarySkill2: this.primarySkill2
    });
  }

  addPrimarySkill() {
    this.primarySkillInputs.push({value: 'primarySkill' + Number(this.primarySkillInputs.length + 1)});
    this.primarySkillsForm.addControl(this.primarySkillInputs[this.primarySkillInputs.length - 1].value, new FormControl());
  }
}
