import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListComponent } from './user-list.component';
import { UserService } from '../user.service';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;//FIXTURE= involucro del componente con funzioni aggiuntive che possiamo richiamare
  let userService:UserService;
  let userServiceSpy:jasmine.Spy;//Jasmine spierà il service separandolo dal componente, mi permetterà di testarli separatamente

  beforeEach(async () => {//BEFOREEACH= funzione di Jasmine che parte prima del test
    await TestBed.configureTestingModule({//AWAIT= diciamo di aspettare "qualcosa" prima di eseguire il test
      declarations: [UserListComponent],
      providers:[UserService]
    }).compileComponents();//mi dice se il componente è stato assemblato e compilato per bene

    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();//DETECTCHANGES= rileva le modifiche per aggiornare il data binding

    userService=TestBed.inject(UserService);
    userServiceSpy=spyOn(userService,'getUsers').and.returnValue(of([//"spio" userSrvice ed il suo metodo getUsers, in modo da capire quante volte viene chiamato l metodo che argomenti vengono usati
      {id:1, name:'Maria Tuttoilmondo'},
      {id:1, name:'Rosalia Tuttoilmondo'}
    ]));
  });

  it('should create', () => {//test unitario che si ASPETTA un valore vero (no undefined, no null) cioè che venga creato l nostro elenco utenti
    expect(component).toBeTruthy();
  });

  it('should retriebe users from the UserService on init', ()=>{
    fixture.detectChanges();//rileva le modifiche che avvierà l'OnInit, l'hook sulla rete e aggiornerà tutti i binding
    expect(userServiceSpy).toHaveBeenCalled();
  })

    //TESTIAMO IL COMPONENTE: assicuriamoci che quando venga cliccato button, gli users facciano il refresh
  it('should retrieve users from the UserService when the refresh button is clicked', ()=>{
    fixture.detectChanges();

    userServiceSpy.calls.reset();//chiedo di testare un refresh, non quelli precedenti, quindi "RESET le CALLS precedenti"

    const button=fixture.debugElement.query(By.css('button'));
    button.triggerEventHandler('click', null);//triggerEvent = simula l'evento per testarlo

    expect(userServiceSpy).toHaveBeenCalled();
  })
});
