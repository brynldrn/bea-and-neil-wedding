'use server';

import { JWT } from "google-auth-library";
import { GoogleSpreadsheet } from "google-spreadsheet";

const serviceAccountAuth = new JWT({
  email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  scopes: ['https://www.googleapis.com/auth/spreadsheets', 'https://www.googleapis.com/auth/drive.file'],
});

export const writeToSheets = async ({ names, status = 'Accepted', phoneNumber }: { names: string[], status: 'Accepted' | 'Declined', phoneNumber?: string }) => {
  const noEmptyNames = names.filter((name) => name.trim() !== '');
  const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID ?? '', serviceAccountAuth);
  await doc.loadInfo(); // loads document properties and worksheets

  const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id] or doc.sheetsByTitle[title]

  console.log('names :>> ', names);
  console.log('noEmptyNames :>> ', noEmptyNames);

  await Promise.all(noEmptyNames?.map(async (name, index) => {
    await sheet.addRow({
      'Name': name,
      'RSVP status': status,
      ...phoneNumber && index === 0 ? { 'Phone Number': phoneNumber } : {},
    })
  }))
}