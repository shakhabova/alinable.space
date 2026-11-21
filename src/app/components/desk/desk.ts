import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { DESK_ITEMS, KEYBOARDS } from './desk.data';

@Component({
  selector: 'app-desk',
  templateUrl: './desk.html',
  styleUrl: './desk.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Desk {
  readonly lang = inject(LanguageService);
  readonly items = DESK_ITEMS;
  readonly photoItems = [...this.items].sort((a, b) => (a.layer ?? 0) - (b.layer ?? 0));
  readonly keyboards = KEYBOARDS;
  readonly keys = Array.from({ length: 60 });
  readonly selectedId = signal('monitor');
  readonly previewId = signal<string | null>(null);
  readonly activeId = computed(() => this.previewId() ?? this.selectedId());
  readonly activeItem = computed(() => this.items.find(item => item.id === this.activeId())!);
  readonly selectedKeyboardId = signal('daily');
  readonly activeKeyboard = computed(() => this.keyboards.find(item => item.id === this.selectedKeyboardId())!);

  selectItem(id: string) {
    this.selectedId.set(id);
    this.previewId.set(null);
  }
}
