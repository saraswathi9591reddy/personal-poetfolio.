const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// REPLACE YOUR_PASSWORD with Saraswathireddy99024
const MONGO_URI = "mongodb+srv://saraswathi:Saraswathireddy99024@cluster0.zncizeu.mongodb.net/portfolio?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(MONGO_URI)
    .then(() => console.log("✅ Database Connected Successfully"))
    .catch(err => console.log("❌ DB Error: ", err));

const Project = mongoose.model('Project', {
    title: String,
    description: String,
    tech: String
});

app.get('/api/projects', async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (err) {
        res.status(500).json(err);
    }
});

app.listen(5000, () => console.log("🚀 Server running on port 5000"));