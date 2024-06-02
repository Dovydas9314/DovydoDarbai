const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 80;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/add', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'add-animal.html'));
});

app.get('/edit', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'edit-animal.html'));
});

app.get('/api/animals', (req, res) => {
    const filePath = path.join(__dirname, 'animals.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading JSON file', err);
            res.status(500).send('Internal Server Error');
        } else {
            res.json(JSON.parse(data));
        }
    });
});

app.post('/api/animals', (req, res) => {
    const filePath = path.join(__dirname, 'animals.json');
    const newAnimal = req.body;

    console.log('New animal:', newAnimal);

    if (!newAnimal.name || !newAnimal.species || !newAnimal.age) {
        res.status(400).send('Invalid animal data');
        return;
    }

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading JSON file', err);
            res.status(500).send('Internal Server Error');
            return;
        }

        let animals = JSON.parse(data);
        animals.push(newAnimal);

        fs.writeFile(filePath, JSON.stringify(animals, null, 2), 'utf8', (err) => {
            if (err) {
                console.error('Error writing JSON file', err);
                res.status(500).send('Internal Server Error');
            } else {
                console.log('Animal added:', newAnimal);
                res.redirect('/');
            }
        });
    });
});

app.put('/api/animals/:index', (req, res) => {
    const index = parseInt(req.params.index, 10);
    const updatedAnimal = req.body;
    const filePath = path.join(__dirname, 'animals.json');

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading JSON file', err);
            res.status(500).send('Internal Server Error');
            return;
        }

        let animals = JSON.parse(data);
        if (index >= 0 && index < animals.length) {
            animals[index] = updatedAnimal;
            fs.writeFile(filePath, JSON.stringify(animals, null, 2), 'utf8', (err) => {
                if (err) {
                    console.error('Error writing JSON file', err);
                    res.status(500).send('Internal Server Error');
                } else {
                    res.json(updatedAnimal);
                }
            });
        } else {
            res.status(404).send('Animal not found');
        }
    });
});

app.delete('/api/animals/:index', (req, res) => {
    const index = parseInt(req.params.index, 10);
    const filePath = path.join(__dirname, 'animals.json');

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading JSON file', err);
            res.status(500).send('Internal Server Error');
            return;
        }

        let animals = JSON.parse(data);
        if (index >= 0 && index < animals.length) {
            const deletedAnimal = animals.splice(index, 1);
            fs.writeFile(filePath, JSON.stringify(animals, null, 2), 'utf8', (err) => {
                if (err) {
                    console.error('Error writing JSON file', err);
                    res.status(500).send('Internal Server Error');
                } else {
                    res.json(deletedAnimal[0]);
                }
            });
        } else {
            res.status(404).send('Animal not found');
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});