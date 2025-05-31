import * as sdk from 'node-appwrite';

const {
  PROJECT_ID,
  DATABASE_ID,
  API_KEY,
  DOCTOR_COLLECTION_ID,
  PATIENT_COLLECTION_ID,
  APPOINTMENT_COLLECTION_ID,
  NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
  NEXT_PUBLIC_ENDPOINT: ENDPOINT,
} = process.env;


const client = new sdk.Client();

client.setEndpoint(ENDPOINT!) 
