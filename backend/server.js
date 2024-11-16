const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb+srv://kappishj:jpONHdE59mmwyRg3@cluster0.u1pte.mongodb.net/", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Connected to MongoDB");
}).catch((error) => {
  console.error("MongoDB connection error:", error);
});

// Schema and Model
const contactSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  company: String,
  jobTitle: String,
});

const Contact = mongoose.model("Contact", contactSchema);

// API Endpoints

// Create a new contact
app.post("/contacts", async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).send(contact);
  } catch (error) {
    res.status(400).send({ error: "Failed to create contact", details: error });
  }
});

// Fetch all contacts
app.get("/contacts", async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).send(contacts);
  } catch (error) {
    res.status(500).send({ error: "Failed to fetch contacts", details: error });
  }
});

// Update a contact
app.put("/contacts/:id", async (req, res) => {
  try {
    const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!contact) {
      return res.status(404).send({ error: "Contact not found" });
    }
    res.status(200).send(contact);
  } catch (error) {
    res.status(400).send({ error: "Failed to update contact", details: error });
  }
});

// Delete a contact
app.delete("/contacts/:id", async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (!contact) {
      return res.status(404).send({ error: "Contact not found" });
    }
    res.status(200).send({ message: "Contact deleted successfully" });
  } catch (error) {
    res.status(500).send({ error: "Failed to delete contact", details: error });
  }
});

// Start the server
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
