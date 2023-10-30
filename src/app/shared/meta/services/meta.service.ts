import { Injectable } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class MetaService {

  constructor(private meta: Meta, private title: Title) { }

  public setTitle(title: string): void {
    this.title.setTitle(title);
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'twitter:title', content: title });
  }

  public setDescription(description: string): void {
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'twitter:description', content: description });
  }

  public setImage(imageUrl: string): void {
    this.meta.updateTag({ property: 'og:image', content: imageUrl });
  }

  public setUrl(url: string): void {
    this.meta.updateTag({ property: 'og:url', content: url });
  }
}
