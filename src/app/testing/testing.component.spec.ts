import { DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
//service
import { TestSerService } from './test-ser.service';

import { TestingComponent } from './testing.component';

describe('TestingComponent', () => {
  let component: TestingComponent;
  let fixture: ComponentFixture<TestingComponent>;
  //service
  let service:TestSerService;
  //html ele
  let de:DebugElement
 
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    //service
    service=TestBed.inject(TestSerService);
     //conect html ele
   de=fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should add two numbers', () => {
    const result = component.addNumbers(2, 3);
    expect(result).toEqual(5);
  });

//async
it('should get student async',fakeAsync(()=>{
    expect(component.students).toEqual(10); 
    component.changeStudent();
    tick(2000);
    expect(component.students).toEqual(1000); 
}))

//service
it('should call function getComment',()=>{
  spyOn(service,"getComment");
  component.ngOnInit();
  expect(service.getComment).toHaveBeenCalled();
  expect(service.getComment).toHaveBeenCalledTimes(1);
})

// it('shuould increase',()=>{
  // let btn=de.query(By.css("#id"));
  // let h1Ele=de.query(By.css('h1'));
//   btn.triggerEventHandler("click")
//   expect(component.countClick).toEqual(1);
  // expect(h1Ele.nativeElement.textContent).toEqual(1);
// })

});

