import {
  AfterViewInit,
  Component,
  ElementRef,
  Pipe,
  PipeTransform,
  ViewChild,
  ViewEncapsulation,
  effect,
  signal,
  computed,
  ChangeDetectionStrategy,
  ViewChildren,
  QueryList,
} from '@angular/core';
import Stories from './constants/stories';

interface SpeedOption {
  speed: number;
  label: string;
  group: {
    type: 'Uncommon' | 'Rare' | 'Epic' | 'Legendary' | 'Mythic';
    color: string;
  };
}

interface Word {
  content: string;
  length: number;
  index: number;
}

@Pipe({
  name: 'speedGroup',
})
export class SpeedGroupPipe implements PipeTransform {
  transform(options: SpeedOption[], group: SpeedOption['group']) {
    return options.filter((option) => option.group.type === group.type);
  }
}

@Component({
  selector: 'jgh-sr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements AfterViewInit {
  @ViewChild('readerOutput') readerElement?: ElementRef<HTMLSpanElement>;
  @ViewChild('textContainer') textContainer?: ElementRef<HTMLDivElement>;
  @ViewChildren('word') wordElements?: QueryList<ElementRef<HTMLSpanElement>>;

  protected readonly groups: SpeedOption['group'][] = [
    {
      type: 'Uncommon',
      color: '#10b981',
    },
    {
      type: 'Rare',
      color: '#0ea5e9',
    },
    {
      type: 'Epic',
      color: '#8b5cf6',
    },
    {
      type: 'Legendary',
      color: '#f59e0b',
    },
    {
      type: 'Mythic',
      color: '#ef4444',
    },
  ];

  protected readonly options: SpeedOption[] = Array.from(
    { length: 15 },
    (_, i) => {
      const speed = 1000 / (i + 1);
      return {
        speed,
        label: `${i + 1}wps`,
        group: this.groups[Math.floor(i / 3)],
      };
    }
  );

  private timeOut: NodeJS.Timeout | undefined;

  protected currentWord = signal(
    Number(localStorage.getItem('currentWord')) || 0
  );
  protected readSpeed = Number(localStorage.getItem('readSpeed')) || 500;
  protected selectedStory = signal(
    Number(localStorage.getItem('selectedStory')) || 0
  );
  protected stories = Stories;
  protected readonly readerText = computed(() =>
    Stories[this.selectedStory()].content
      .replace(/\n/g, '')
      .split(' ')
      .filter((w) => w.length > 0)
      .map((w, index) => ({ content: w, length: w.length, index }))
  );
  protected fontSize = signal(60);
  protected fontSizePx = computed(() => `${this.fontSize()}px`);
  protected readonly playState = signal<'play' | 'pause'>('pause');
  protected readonly playEffect = effect(() => {
    if (this.playState() === 'play') {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      this.loopWords();
    }
  });

  ngAfterViewInit(): void {
    this.highlightWord(this.currentWord());
    console.log('Hello world')
  }

  protected togglePlay() {
    clearTimeout(this.timeOut);
    this.playState.update((state) => (state === 'play' ? 'pause' : 'play'));
  }

  protected setReadSpeed(speed: number) {
    this.readSpeed = speed;
    localStorage.setItem('readSpeed', String(speed));
  }

  protected selectStory(index: number) {
    this.selectedStory.set(index);
    this.removeTextHighlight(this.currentWord());
    this.currentWord.set(0);
    this.highlightWord(0);
    localStorage.setItem('selectedStory', String(index));
    localStorage.setItem('currentWord', String(0));
  }

  protected selectWord(index: number) {
    this.removeTextHighlight(this.currentWord());
    this.currentWord.set(index);
    this.highlightWord(index);
  }

  private loopWords() {
    this.timeOut = setTimeout(() => {
      if (this.readerElement) {
        this.removeTextHighlight(this.currentWord());
        this.currentWord.update((index) => index + 1);
        localStorage.setItem('currentWord', String(this.currentWord()));
        this.highlightWord(this.currentWord());

        if (this.currentWord() === this.readerText().length - 1) {
          this.currentWord.set(0);
          this.playState.set('pause');
          return;
        }

        if (this.textContainer) {
          this.scrollToWord();
        }

        if (this.playState() === 'play') {
          this.loopWords();
        }
      }
    }, this.readSpeed);
  }

  protected trackByFn(index: number, item: Word) {
    return item.index;
  }

  private scrollToWord() {
    if (this.textContainer) {
      const height = this.textContainer.nativeElement.scrollHeight;
      this.textContainer.nativeElement.scrollTo({
        top: Math.min(
          Math.max(
            (height / this.readerText().length) * this.currentWord() - 100,
            0
          ),
          height
        ),
      });
    }
  }

  private removeTextHighlight(index: number) {
    this.wordElements
      ?.toArray()
      ?.at(index)
      ?.nativeElement.classList.remove('text-highlight');
  }

  private highlightWord(index: number) {
    this.wordElements
      ?.toArray()
      ?.at(index)
      ?.nativeElement.classList.add('text-highlight');
  }
}
