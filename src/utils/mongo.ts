import dotenv from 'dotenv';
import {MongoClient, MongoClientOptions} from 'mongodb'
dotenv.config();

const MONGODB_URI = String(process.env.MONGODB_URI)
const MONGODB_DB  = String(process.env.MONGODB_DB)

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  )
}

if (!MONGODB_DB) {
  throw new Error(
    'Please define the MONGODB_DB environment variable inside .env.local'
  )
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached: any = (global as any).mongo

if (!cached) {
  cached = (global as any).mongo = { conn: null, promise: null }
}

export async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    const opts: MongoClientOptions = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as MongoClientOptions

    cached.promise = MongoClient.connect(MONGODB_URI, opts).then((client) => {
      return {
        client,
        db: client.db(MONGODB_DB),
      }
    })
  }
  cached.conn = await cached.promise
  return cached.conn
}

export const currentDBVersion = 1;

export async function checkDBVersionHigherThan(db:any, version:number) {
  const dbVersion = await db.collection('_version').findOne({});
  console.log('dbVersion', dbVersion);
  if (dbVersion && dbVersion.version) {
    return dbVersion.version >= version;
  }
  return false;
}

export async function updateDBVersion(db:any) {
  const version = currentDBVersion;
  await db.collection('_version').updateOne({}, {$set: {version}}, {upsert: true});
}

export async function createIndicesForImages(db:any) {
  if(await checkDBVersionHigherThan(db, currentDBVersion)) {
    return;
  }

  updateDBVersion(db);
  await db.collection('_images').createIndex({name: 1}, {background: 1});
  await db.collection('_images').createIndex({name: 1, vendor:1, imgHash: 1}, {background: 1});
}