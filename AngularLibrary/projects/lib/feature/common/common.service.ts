import { ElementRef, Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  /**
   * 滾動到特定的 HTML 元素
   * @param elementRef - 要滾動到的元素的 ElementRef
   */
  goToAnchor(elementRef: ElementRef): void {
    // 使用 scrollIntoView 方法滾動到指定的元素
    elementRef.nativeElement.scrollIntoView({
      // 使用平滑滾動效果
      behavior: 'smooth',
      // 將元素的開始位置滾動到視圖的開始位置
      block: 'start',
      // 將元素的開始邊緣對齊視圖的開始邊緣
      inline: 'start',
    });
  }

  /**
   * 使用正則表達式檢查字串中是否包含中文字符
   * @param str - 要判斷的字串
   */
  containsChinese(str: string): boolean {
    return /[\u4E00-\u9FFF]/.test(str);
  }

  /**
   * 載入中
   */
  private isLoadingSubject = new BehaviorSubject<boolean>(true);
  isLoading$ = this.isLoadingSubject.asObservable();
  loadingOn() { this.isLoadingSubject.next(true); }
  loadingOff() { this.isLoadingSubject.next(false); }

  /**
   * 檢查字串是否為「中文」
   */
  isMostlyChinese(text: string): boolean {
    const chineseMatches = text.match(/[\u4e00-\u9fa5]/g) || [];
    return chineseMatches.length / text.length > 0.5;
  }

  /**
   * 檢查字串是否為「英文」
   */
  isMostlyEnglish(text: string): boolean {
    const englishMatches = text.match(/[A-Za-z]/g) || [];
    return englishMatches.length / text.length > 0.5;
  }

  // 去除所有標點符號（全形 + 半形）
  removePunctuation(input: string): string {
    // 包含中英文標點符號的正則
    const punctuationRegex = /[~`!@#$%^&*()_\-+=\[\]{}|\\:;"'<>,.?/，。、《》「」『』；：？！—…·～﹏、（）【】]/g;
    return input.replace(punctuationRegex, '');
  }
}
