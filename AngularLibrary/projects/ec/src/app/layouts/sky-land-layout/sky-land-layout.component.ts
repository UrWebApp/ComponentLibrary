import { Component } from '@angular/core';
import { FakeDataService, TranslateService } from 'lib/public-api';
import { Observable } from 'rxjs';

@Component({
  selector: 'ec-sky-land-layout',
  templateUrl: './sky-land-layout.component.html',
  styleUrls: ['./sky-land-layout.component.scss']
})
export class SkyLandLayoutComponent {
  headerData$: Observable<any> = {} as Observable<any>;
  constructor(
    private fakeDataService: FakeDataService,
    private translateService: TranslateService,
  ) {
    this.headerData$ = this.fakeDataService.headerData$;
  }

  ngOnInit(): void {
    this.translateService.Use(window.navigator.language);
  }
}
