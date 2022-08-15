
declare global {
  interface Navigator {
      msSaveBlob?: (blob: any, defaultName?: string) => boolean
  }
}

export class ArrayBuffer {

  static base64ToArrayBuffer(base64: any ) {
    const binaryString = atob (base64);
    const bytes = new Uint8Array (binaryString.length);

    return bytes.map ((_, i) => binaryString.charCodeAt (i));
  }


  static createAndDownloadBlobFile(body: any, filename: string, type: string) {
    const blob = new Blob ([body], { type: type });
    const fileName = filename;

    if (navigator.msSaveBlob) {

      navigator.msSaveBlob! (blob, fileName);

    } else {
      const link = document.createElement ('a');


        const url = URL.createObjectURL (blob);
        link.setAttribute ('href', url);
        link.setAttribute ('download', fileName);
        link.style.visibility = 'oculto';
        document.body.appendChild (link);
        link.click ();
        document.body.removeChild (link);

    }
  }

}
