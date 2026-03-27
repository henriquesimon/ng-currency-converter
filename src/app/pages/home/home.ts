import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CURRENCIES } from '../../data/currencies';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})

export class Home {
  currencies = CURRENCIES;
  form: FormGroup;

  isOpenFrom = false;
  isOpenTo = false;

  selectedFrom = this.currencies[0];
  selectedTo = this.currencies[2]; // BRL por exemplo

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      valor: [''],
      from: ['USD'],
      to: ['BRL']
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }

  // FROM
  toggleFrom() {
    this.isOpenFrom = !this.isOpenFrom;
  }

  selectFrom(currency: any, event: Event) {
    event.stopPropagation();
    this.selectedFrom = currency;
    this.form.patchValue({ from: currency.code }); // 🔥 integra com form
    this.isOpenFrom = false;
  }

  // TO
  toggleTo() {
    this.isOpenTo = !this.isOpenTo;
  }

  selectTo(currency: any, event: Event) {
    event.stopPropagation();
    this.selectedTo = currency;
    this.form.patchValue({ to: currency.code }); // 🔥 integra com form
    this.isOpenTo = false;
  }
}