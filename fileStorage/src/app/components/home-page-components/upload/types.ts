export type FileType = {
  name: string;
  description: string;
  content: { file: File, base64: any, type: string};
  keywords: string[];
  metadata: { type: string };
}
