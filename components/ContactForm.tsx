"use client";

import { useState } from "react";

const MOTIFS = [
  "Douleurs dorsales / cervicales / lombaires",
  "Nourrisson / bébé",
  "Femme enceinte / post-partum",
  "Sport / blessure",
  "Senior / mobilité",
  "Troubles digestifs / viscéral",
  "Autre",
];

export default function ContactForm() {
  const [form, setForm] = useState({
    nom: "",
    prenom: "",
    telephone: "",
    email: "",
    motif: "",
    date: "",
    message: "",
  });
  const [formSent, setFormSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
    setForm({
      nom: "",
      prenom: "",
      telephone: "",
      email: "",
      motif: "",
      date: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  if (formSent) {
    return (
      <div className="rounded-2xl bg-sage/10 border border-sage/30 p-8 text-center text-gray-700">
        <p className="font-medium">Votre demande a bien été envoyée.</p>
        <p className="mt-2 text-sm">
          Nous vous recontacterons sous 24h pour confirmer votre rendez-vous.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-2xl bg-white p-8 shadow-sm border border-bluegray/20"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-1">
            Nom
          </label>
          <input
            id="nom"
            name="nom"
            type="text"
            required
            value={form.nom}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-sage focus:ring-1 focus:ring-sage"
          />
        </div>
        <div>
          <label htmlFor="prenom" className="block text-sm font-medium text-gray-700 mb-1">
            Prénom
          </label>
          <input
            id="prenom"
            name="prenom"
            type="text"
            required
            value={form.prenom}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-sage focus:ring-1 focus:ring-sage"
          />
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-1">
            Téléphone
          </label>
          <input
            id="telephone"
            name="telephone"
            type="tel"
            required
            value={form.telephone}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-sage focus:ring-1 focus:ring-sage"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-sage focus:ring-1 focus:ring-sage"
          />
        </div>
      </div>
      <div>
        <label htmlFor="motif" className="block text-sm font-medium text-gray-700 mb-1">
          Motif de consultation
        </label>
        <select
          id="motif"
          name="motif"
          required
          value={form.motif}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-sage focus:ring-1 focus:ring-sage"
        >
          <option value="">Choisir...</option>
          {MOTIFS.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
          Date souhaitée
        </label>
        <input
          id="date"
          name="date"
          type="date"
          value={form.date}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-sage focus:ring-1 focus:ring-sage"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message (optionnel)
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          value={form.message}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-sage focus:ring-1 focus:ring-sage"
          placeholder="Précisez si besoin..."
        />
      </div>
      <button
        type="submit"
        className="btn-cta w-full rounded-full bg-sage py-3.5 text-base font-medium text-white shadow hover:bg-sage/90 focus:outline-none focus:ring-2 focus:ring-sage focus:ring-offset-2"
      >
        Demander un rendez-vous
      </button>
    </form>
  );
}
