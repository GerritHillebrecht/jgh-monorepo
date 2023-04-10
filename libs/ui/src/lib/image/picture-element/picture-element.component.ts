import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  getStorage,
  ref,
  getDownloadURL,
  FirebaseStorage,
} from 'firebase/storage';

interface ImageUrlOptions {
  storage?: FirebaseStorage;
  path: string;
  filename: string;
  orientation: 'landscape' | 'portrait';
  sizes?: string[];
  types?: string[];
}

interface ImageSources {
  size: string;
  orientation: string;
  images: {
    type: string;
    src: string;
  }[];
}

@Component({
  selector: 'jgh-lib-picture-element',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './picture-element.component.html',
  styleUrls: ['./picture-element.component.scss'],
})
export class PictureElementComponent implements OnInit {
  @Input() fitToParent = false;
  @Input() landscapeImage = 'background-main.jpg';
  @Input() landscapeImagePath = 'images/background/home';
  @Input() portraitImage = 'background-main_portrait.png';
  @Input() portraitImagePath = 'images/background/home';

  imageSrcs: ImageSources[] | undefined;

  async getImageURLs({
    storage = getStorage(),
    path,
    filename,
    orientation,
    sizes = ['1920', '1200', '600'],
    types = ['avif', 'webp'],
  }: ImageUrlOptions): Promise<ImageSources[]> {
    const orientationRef = ref(storage, `${path}/${orientation}`);
    const filenameWithoutExtension = filename.split('.');
    const fileType = filenameWithoutExtension.pop();
    const imageFileName = filenameWithoutExtension.join('.');
    const imageTypes = [...types, fileType as string];

    const imageUrls = await Promise.all(
      sizes.map(
        async (size) =>
          await Promise.all(
            imageTypes.map((type) =>
              getDownloadURL(
                ref(orientationRef, `${imageFileName}_${size}x${size}.${type}`)
              )
            )
          )
      )
    );

    return imageUrls.map((urls, index) => ({
      size: sizes[index],
      orientation,
      images: urls.map((url, index) => ({
        type: imageTypes[index],
        src: url,
      })),
    }));
  }

  ngOnInit() {
    this.getImages().then((images) => {
      this.imageSrcs = images;
    });
  }

  async getImages() {
    const landscapeImages = await this.getImageURLs({
      path: this.landscapeImagePath,
      filename: this.landscapeImage,
      orientation: 'landscape',
    });

    const portraitImages = await this.getImageURLs({
      path: this.portraitImagePath,
      filename: this.portraitImage,
      orientation: 'portrait',
    });

    const images = [...landscapeImages, ...portraitImages];
    return images;
  }
}
