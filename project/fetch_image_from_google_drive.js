const { google } = require('googleapis');
const path = require('path');
const fs = require('fs');

const CLIENT_ID = '506918901588-5741ukcd5fb5dplmtjif8urnufnvegul.apps.googleusercontent.com';
const CLIENT_SECRET = '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';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';

const REFRESH_TOKEN = '1//047K310ZW0XSNCgYIARAAGAQSNwF-L9Ir6RlyBCb_TDRg8JKUMjdK1mgdhzmnEMNaPQ2P2T2q_7Sl-8p3kN71lvSB-xQML9YJVB0';

const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

const drive = google.drive({
  version: 'v3',
  auth: oauth2Client,
});

/* 
filepath which needs to be uploaded
Note: Assumes example.jpg file is in root directory, 
though this can be any filePath
*/
const filePath = path.join(__dirname, 'deepa.jpg');

async function uploadFile() {
  try {
    const response = await drive.files.create({
      requestBody: {
        name: 'deepa.jpg', //This can be name of your choice
        mimeType: 'image/jpg',
      },
      media: {
        mimeType: 'image/jpg',
        body: fs.createReadStream(filePath),
      },
    });

    console.log(response.data);
  } catch (error) {
    console.log(error.message);
  }
}

//uploadFile();

async function deleteFile() {
  try {
    const response = await drive.files.delete({
      fileId: 'YOUR FILE ID',
    });
    console.log(response.data, response.status);
  } catch (error) {
    console.log(error.message);
  }
}

//deleteFile();

async function generatePublicUrl() {
  try {
    const fileId = '1A2yCxeeQVifI1n1JeZkoC3da8ddAc5Jm';
    await drive.permissions.create({
      fileId: fileId,
      requestBody: {
        role: 'reader',
        type: 'anyone',
      },
    });

    /* 
    webViewLink: View the file in browser
    webContentLink: Direct download link 
    */
    const result = await drive.files.get({
      fileId: fileId,
      fields: 'webViewLink, webContentLink',
    });
    console.log(result.data);
  } catch (error) {
    console.log(error.message);
  }
}

generatePublicUrl();