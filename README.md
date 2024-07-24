## Getting Started

#### Step 1: Run Command:
```bash
npm install
```

#### Step 2: Create and Login to your account at https://uploadthing.com and get your App Secret Key and Id.

#### Step 3: Create ***.env*** file and paste this code and replace with your Credentials:
```.env
UPLOADTHING_SECRET=<Your-Secret-Key>
UPLOADTHING_APP_ID=<Your-App-Id>

DATABASE_URL=<DB-URL>
```
#### Step 4:
> Generate the prisma client instance
```bash
npx prisma generat
``` 

> Push the Models to the Datasea
```bash
npx prisma db push
```
> Run the studio
```bash
npx prisma studio
```
#### Step 5: Finally, run this command in your Project Directory
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.