import { TestBed } from '@angular/core/testing';
import { UserService } from './user.service';

describe('UserService', () => {

  let service:UserService;

  beforeEach(()=>{//beforeEach-> prima di ogni test
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
  });

  //PRIMO UNIT TEST
  it('should be created', ()=>{
    expect(service).toBeTruthy();
  });

  //SECONDO TEST
  it('should get users', ()=>{
    service.getUsers().subscribe(users=>{
      expect(users.length).toBeGreaterThan(0);
    }
    )
  })

});
