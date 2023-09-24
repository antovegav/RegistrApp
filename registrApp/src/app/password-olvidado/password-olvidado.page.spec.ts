import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PasswordOlvidadoPage } from './password-olvidado.page';

describe('PasswordOlvidadoPage', () => {
  let component: PasswordOlvidadoPage;
  let fixture: ComponentFixture<PasswordOlvidadoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PasswordOlvidadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
