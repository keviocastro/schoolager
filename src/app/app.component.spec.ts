import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { IMPORTS, DECLARATIONS, PROVIDERS } from './app.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: DECLARATIONS,
      imports: IMPORTS,
      providers: PROVIDERS
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
