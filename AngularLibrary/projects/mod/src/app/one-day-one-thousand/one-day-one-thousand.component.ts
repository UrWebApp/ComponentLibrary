import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonService } from 'lib/feature/common/common.service';

@Component({
  selector: 'one-day-one-thousand',
  standalone: true,
  imports: [],
  template: `
  <button class="quickBtn CR" >懵</button>
  <button class="quickBtn CB" >劍</button>
  <button class="quickBtn EP" >解</button>
  <button class="quickBtn NC" >新</button>
  <button class="quickBtn BT" >🔝</button>

  <div class="box" #backToTop>
    <div class="toolBox">
      <button class="answerScoreResetBtn">aaa</button>
    </div>
  </div>
  `,
  styleUrls: ['./one-day-one-thousand.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OneDayOneThousandComponent {
  constructor(
    public commonService: CommonService,
  ) {
    this.commonService.loadingOff();
  }

  // 每次抽 100 個？
}
