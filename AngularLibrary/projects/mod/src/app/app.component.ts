import { Component, HostListener } from '@angular/core';
import { ServiceWorkerService } from 'lib/feature';
import { CommonService } from 'lib/feature/common/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    public commonService: CommonService
  ) {}

    isWindowFocused = true;
    @HostListener('window:blur', [])
    onWindowBlur() {
      this.isWindowFocused = false;
    }

    @HostListener('window:focus', [])
    onWindowFocus() {
      this.isWindowFocused = true;
    }
}
