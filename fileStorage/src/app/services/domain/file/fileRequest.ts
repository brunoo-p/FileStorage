import { TypeofDescription, TypeofKeywords } from '../types/typesFile';
import { FileMetadata } from './fileMetadata';
import { FileName } from './fileName';

export class FileRequest {
  constructor(
    public profileId: string,
    public name: FileName,
    public description: TypeofDescription,
    public keywords: TypeofKeywords,
    public content: any,
    public metadata: FileMetadata,
  )
  {}
  mapFormData(): FormData {

    const keywordList = this.keywords;
    let data = new FormData();
    data.append("profileId", this.profileId);
    data.append("name", this.name.value);
    data.append("description", String(this.description));
    this.keywords?.forEach((keyword) => {
      data.append("keywords", keyword);
    })
    data.append("content", String(''));
    data.append("imagePath", this.content);
    data.append("metadata", this.metadata.type);

    return data;
  }
}
