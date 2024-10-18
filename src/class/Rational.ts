export class Rational {
  numerator: number;
  denominator: number;

  constructor(numerator: number, denominator: number) {
    if (denominator === 0) {
      throw new Error("Denominator cannot be zero.");
    }
    this.numerator = numerator;
    this.denominator = denominator;
   
  }

  /**
   * 將分數化為最簡分數。
   * @returns {Rational} 新的規範化 Rational 物件
   */
  normalize(): Rational {
    const gcd = Rational.gcd(Math.abs(this.numerator), Math.abs(this.denominator));
    this.numerator /= gcd;
    this.denominator /= gcd;

    // 處理負號統一放在分子
    if (this.denominator < 0) {
      this.numerator = -this.numerator;
      this.denominator = -this.denominator;
    }
    return this;
  }

  /**
   * 檢查是否為整數（即分母為 1）。
   */
  isWhole(): boolean {
    return this.denominator === 1;
  }

  /**
   * 檢查是否有小數部分（即分母不為 1）。
   */
  isDecimal(): boolean {
    return this.denominator !== 1;
  }

  /**
   * 判斷兩個 Rational 物件是否相等。
   * @param other 另一個 Rational 物件
   */
  equals(other: Rational): boolean {
    return this.numerator === other.numerator &&
           this.denominator === other.denominator;
  }

  /**
   * 將 Rational 物件轉為字串格式 "a/b"。
   */
  toString(): string {
    return `${this.numerator}/${this.denominator}`;
  }

  /**
   * 解析字串格式的分數，如 "a/b"。
   * @param str 字串格式的分數
   */
  static parseRational(str: string): Rational {
    const parts: string[] = str.split("/");
  
    if (parts.length !== 2) {
      throw new Error("Invalid format. The input string must be in 'a/b' format.");
    }
  
    const num = Number(parts[0]);
    const den = Number(parts[1]);
  
    if (isNaN(num) || isNaN(den)) {
      throw new Error("Invalid numbers. Please provide a valid rational number.");
    }
  
    return new Rational(num, den);
  }
  

  /**
   * 將兩個陣列解析為 Rational 物件。
   * @param numArr 分子的字串陣列
   * @param denArr 分母的字串陣列
   */
  static _parseRational(numArr: string[], denArr: string[]): Rational {
    const numerator = Number(numArr.join(""));
    const denominator = Number(denArr.join(""));
    return new Rational(numerator, denominator);
  }

  /**
   * 計算兩個數的最大公因數 (GCD)。
   */
  private static gcd(a: number, b: number): number {
    return b === 0 ? a : Rational.gcd(b, a % b);
  }
}

  
  
 




  