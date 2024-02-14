const { MongoClient } = require('mongodb');
const express = require('express');
const uri = 'mongodb+srv://pampam777123:test1234@score.1ajs42j.mongodb.net/';
const app = express();
const cors = require('cors');

app.use(cors());
const client = new MongoClient(uri);

async function connectToDatabase() {
  try {
    await client.connect();
    console.log('Connected to the database');
  } catch (err) {
    console.error('Error connecting to the database:', err);
  }
}

connectToDatabase();

// Definicja schematu dla danych
// const ScoreSchema = {
//   username: String,
//   score: Number,
// };

// Obsługa żądania POST do zapisywania danych
app.use(express.json());
app.post('/save-score', async (req, res) => {
  const { username, score } = req.body;
  await client.connect();
  try {
    const database = client.db('moja_baza_danych');
    const collection = database.collection('scores');

    // Zapisanie nowego obiektu do bazy danych
    await collection.insertOne({ username, score });

    res.status(200).send('Wynik zapisany pomyślnie');
  } catch (error) {
    console.error('Błąd zapisu do bazy danych:', error);
    res.status(500).send('Błąd serwera');
  }
});
async function getDataFromDatabase() {
  try {
    await client.connect();
    console.log('Connected to the database');

    const database = client.db('moja_baza_danych');
    const collection = database.collection('scores');

    const cursor = collection.find();

    const data = await cursor.toArray();
    return data;
  } finally {
    await client.close();
  }
}

app.get('/scores', async (req, res) => {
  try {
    // Połączenie z bazą danych
    await client.connect();
    const database = client.db('moja_baza_danych');
    const collection = database.collection('scores');

    // Pobranie danych z kolekcji
    const cursor = collection.find();
    const data = await cursor.toArray();

    // Wysłanie danych jako odpowiedź
    res.json(data);
  } catch (error) {
    console.error('Error fetching data from database:', error);
    res.status(500).send('Internal Server Error');
  } finally {
    // Zamknięcie połączenia z bazą danych
    await client.close();
  }
});

// Pobranie danych z bazy danych i przesłanie ich jako odpowiedź na żądanie GET
app.get('/data', async (req, res) => {
  try {
    const data = await getDataFromDatabase();
    res.json(data);
  } catch (error) {
    console.error('Błąd pobierania danych z bazy danych:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

//   res.status(200).json(scores); // Zwróć wyniki jako JSON
// });
// app.use('/loopback', (req, res) => {
//   res.send('Przykładowa odpowiedź z aplikacji Express');
// });

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
