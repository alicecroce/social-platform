import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListComponent } from './user-list.component';
import { UserService } from '../user.service';
import { of } from 'rxjs';

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
});
