/**
 * Converts a File object to a base64 string.
 * @param file - The File object to convert.
 * @returns A Promise that resolves to the base64 string representation of the file.
 */
export function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    // Event handler executed when the file has been read successfully
    reader.onloadend = () => {
      // The result property contains the file content as a data URL
      resolve(reader.result as string);
    };

    // Event handler executed if an error occurs while reading the file
    reader.onerror = reject;

    // Initiate reading the file as a data URL
    reader.readAsDataURL(file);
  });
}
