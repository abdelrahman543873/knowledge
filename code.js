const {
  BlobServiceClient,
  StorageSharedKeyCredential,
} = require("@azure/storage-blob");

const sharedKeyCredential = new StorageSharedKeyCredential(
  'valsquad',
  "4+n0m6e+/EwQSJ7img8uDDFiAK9XhZmAq1ECxulQGHtRnVSyFDtjLwB7q/20dRBCr/U7MHpYGIegZJjnAeEd8A=="
);
const blobServiceClient = new BlobServiceClient(
  `https://valsquad.blob.core.windows.net`,
  sharedKeyCredential
);

const containerName = "digitalworkspace";

async function main() {
  const containerClient = blobServiceClient.getContainerClient(containerName);

  const content = "Hello world!";
  const blobName = "newblob" + new Date().getTime();
  const blockBlobClient = containerClient.getBlockBlobClient(blobName);
  const uploadBlobResponse = await blockBlobClient.upload(
    content,
    content.length
  );
  console.log(
    `Upload block blob ${blobName} successfully`,
    uploadBlobResponse.requestId
  );
}

main();
