import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-secondary-skills',
  templateUrl: './secondary-skills.component.html',
  styleUrls: ['./secondary-skills.component.css']
})
export class SecondarySkillsComponent implements OnInit {

  secondarySkillsForm: FormGroup;
  secondarySkill1 = new FormControl();
  secondarySkill2 = new FormControl();
  secondarySkillInputs = [{value: 'secondarySkill1'}, {value: 'secondarySkill2'}];
  constructor() { }

  ngOnInit() {
    this.secondarySkillsForm = new FormGroup({
      secondarySkill1: this.secondarySkill1,
      secondarySkill2: this.secondarySkill2
    });
  }
  addPrimarySkill() {
    this.secondarySkillInputs.push({value: 'primarySkill' + Number(this.secondarySkillInputs.length + 1)});
    this.secondarySkillsForm.addControl(this.secondarySkillInputs[this.secondarySkillInputs.length - 1].value, new FormControl());
  }

}
