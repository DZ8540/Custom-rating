export class Rating {
  public readonly starsClass: string = '.Rating__star';
  public readonly inputId: string = 'input';
  public readonly activeBtnClassName: string = 'Rating__star--active';

  public name: string;
  public item: HTMLDivElement | null;
  public stars: NodeListOf<HTMLButtonElement>;
  public input: HTMLInputElement | null;
  public data: string[] = [];

  constructor(item: HTMLDivElement) {
    this.item = item;
    this.name = this.item.dataset.name || '';
    this.stars = this.item.querySelectorAll(this.starsClass);
    this.input = this.item.querySelector(`[data-id="${this.inputId}"]`);

    this._handle();
  }

  private _handle(): void {
    try {
      this._checkForUser();

      this.input!.onchange = this._changeHandler.bind(this);
      this._setClickHandler();

      this._getAllData();

      this._init();
    } catch (err: any | Error) {
      console.warn(err.message);
    }
  }

  private _init(): void {
    if (this._getInputValue() !== '') {
      for (let item of this.stars) {
        if (item.dataset.value! === this._getInputValue()) {
          item.dispatchEvent(new Event('click'));
        }
      }
    }
  }

  private _getAllData(): void {
    for (let item of this.stars) {
      this.data.unshift(item.dataset.value!);
    }
  }

  private _changeHandler(): void {
    let activeBtnIndex: number = parseInt(this._getInputValue()) - 1;

    this._setActiveBtn([...this.stars!].reverse()[activeBtnIndex]);
  }

  private _setClickHandler(): void {
    for (let item of this.stars) {
      item.onclick = this._clickHandler.bind(this, item)
    }
  }

  private _clickHandler({ dataset }: HTMLButtonElement): void {
    this._setInputValue(dataset.value!);
  }

  private _getInputValue(): string {
    return this.input!.value;
  }

  private _setInputValue(val: string): void {
    this.input!.value = val;
    this.input!.dispatchEvent(new Event('change'));
  }

  private _setActiveBtn(btn: HTMLButtonElement): void {
    this._removeAllActives();

    btn.classList.add(this.activeBtnClassName);
  }

  private _removeAllActives(): void {
    for (let item of this.stars) {
      item.classList.remove(this.activeBtnClassName);
    }    
  }

  private _checkForUser(): void {
    if (this.item === null)
      throw new Error(`Component's '${this.name}' item is null!`);

    for (let item of this.stars) {
      if (item.dataset.value === undefined)
        throw new Error(`Component's '${this.name}' button's 'data-value' attribute is undefined!`);
    }

    if (this.input === null)
      throw new Error(`Component's '${this.name}' input is null!`);
      
    console.info(`Component '${this.name}' is ready.`);
  }
}

export default Rating;