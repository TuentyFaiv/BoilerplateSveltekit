export interface ReturnGetCountry {
  location: {
    postal: string;
    country: {
      calling_code: string;
      code: string;
      name: string;
      flag: {
        emoji: string;
        emoji_unicode: string;
        emojitwo: string;
        noto: string;
        twemoji: string;
        wikimedia: string;
      }
    }
  }
}

export interface Country {
  zip_code: string;
  phoneCode: string;
  name: string;
  code: string;
  emoji: string;
}
