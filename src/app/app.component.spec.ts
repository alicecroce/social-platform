import { AppComponent } from "./app.component";

//descrivo l'operazione che andrò a fare con JASMINE
describe('AppComponent', ()=>{

  it('should have a defined title', ()=>{
    //creaiamo l'asserzione
    const component= new AppComponent();
    expect(component.title).toBeDefined();//mi ASPETTO che abbia un TITOLO DEFINITO 
  });

});