export type ImageData = {
  id: number;
  alt_description: string;
  urls: { small: string; regular: string; [key: string]: any };
  description: string;
  user: { username: string; [key: string]: any };
  [key: string]: any;
};

export type ImagesData = ImageData[];

export type ResponcePhotosSearch = {
  data: { results: ImageData[]; total_pages: number; [key: string]: any };
  [key: string]: any;
};

export type LoadMoreButtonType = {
  onClick: (page: number) => void;
  page: number;
};

export type ImagesGalleryType = {
  imagesData: ImagesData;
  onGalleryClick: (id: number) => void;
};

export type ImageCardType = {
  imageData: ImageData;
  onGalleryClick: (id: number) => void;
};

export type SearchBarType = {
  onClick: (prompt: string) => void;
};

export type ImageModalType = {
  modalData: ImageData | undefined;
  closeModal: () => void;
  modalIsOpen: boolean;
};
