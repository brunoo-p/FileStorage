export type FileType = {
  name: string;
  description: string;
  file: { file: File, base64: any, type: string};
  keywords: string[];
}
