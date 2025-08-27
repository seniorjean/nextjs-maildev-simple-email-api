# 📧 API Email Testing avec Next.js et MailDev

Un projet simple permettant de **tester l'envoi d'emails via une API** construite avec **Next.js**, en utilisant **MailDev** (serveur SMTP de test) exécuté dans **Docker**.

## ✨ Fonctionnalités

- 📨 **Envoi d'emails** via API Next.js
- 🐳 **Serveur SMTP de test** avec MailDev
- 📧 **Interface de visualisation** des emails
- 🎨 **Templates d'emails** personnalisables
- 🔧 **Configuration Docker** simple
- 🧪 **Tests avec Postman** intégrés

## 🛠️ Technologies Utilisées

- **Next.js** - Framework React pour l'API
- **MailDev** - Serveur SMTP de développement
- **Docker** - Conteneurisation
- **Nodemailer** - Envoi d'emails Node.js

## 🚀 Démarrage Rapide

### Avec Docker (Recommandé)

```bash
# Lancer tous les services avec Docker Compose
docker compose up --build
```

### Sans Docker

```bash
# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev
```

## 🌐 URLs d'Accès

### 📝 Template d'Email
[http://localhost:3000/mailtemplate](http://localhost:3000/mailtemplate)
> Interface pour visualiser et tester les templates d'emails

### 📧 Interface MailDev
[http://localhost:1080](http://localhost:1080)
> Interface web pour consulter les emails envoyés

### ⚙️ Configuration SMTP

**Paramètres de connexion :**
- **Host:** `maildev`
- **Port:** `1025`
- **Username:** *(vide)*
- **Password:** *(vide)*
- **TLS:** Désactivé

## 💻 Configuration Nodemailer

```javascript
const transporter = nodemailer.createTransporter({
    host: 'maildev',
    port: 1025,
    ignoreTLS: true,
});

const mailOptions = {
    from: 'from@email.com',
    to: email,
    subject: 'New Contact',
    html: emailHtml,
};
```

## 🧪 Tester l'API

[![Run in Postman](https://run.pstmn.io/button.svg)](https://god.gw.postman.com/run-collection/20726569-626456c6-231b-4f38-82ac-bfde97981479?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D20726569-626456c6-231b-4f38-82ac-bfde97981479%26entityType%3Dcollection%26workspaceId%3De638c00e-154b-4000-85fe-58a1f52e21c2)

### Endpoints API Disponibles

#### POST `/api/send-email`
Envoie un email via l'API

**Body (JSON):**
```json
{
  "to": "test@example.com",
  "subject": "Test Email",
  "html": "<h1>Hello World!</h1>",
  "from": "sender@example.com"
}
```

**Réponse:**
```json
{
  "success": true,
  "messageId": "unique-message-id"
}
```

## 🏗️ Structure du Projet

```
project/
├── pages/
│   ├── api/
│   │   └── send-email.js    # API d'envoi d'emails
│   ├── mailtemplate.js      # Page de test des templates
│   └── index.js            # Page d'accueil
├── components/
│   └── EmailTemplate.jsx   # Composant template d'email
├── styles/                 # Styles CSS
├── docker-compose.yml      # Configuration Docker
├── Dockerfile             # Image Docker Next.js
├── package.json           # Dépendances npm
└── README.md
```

## ⚙️ Configuration Avancée

### Variables d'Environnement

Créez un fichier `.env.local` :

```env
# Configuration SMTP
SMTP_HOST=maildev
SMTP_PORT=1025
SMTP_USER=
SMTP_PASSWORD=

# Configuration Next.js
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key
```

### Docker Compose personnalisé

```yaml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - SMTP_HOST=maildev
    depends_on:
      - maildev

  maildev:
    image: maildev/maildev
    ports:
      - "1080:1080"  # Interface web
      - "1025:1025"  # Port SMTP
```

## 🔍 Dépannage

### Problèmes Courants

**Docker ne démarre pas :**
```bash
# Vérifier Docker est installé et démarré
docker --version
docker-compose --version

# Nettoyer les conteneurs existants
docker-compose down
docker-compose up --build
```

**Emails non reçus :**
- Vérifier que MailDev fonctionne sur `http://localhost:1080`
- Contrôler les logs du conteneur : `docker-compose logs maildev`
- Vérifier la configuration SMTP dans le code

**Erreur de port :**
- S'assurer que les ports 3000 et 1080 sont libres
- Modifier les ports dans `docker-compose.yml` si nécessaire

## 🧪 Tests et Développement

### Scripts Disponibles

```bash
# Démarrage en développement
npm run dev

# Build de production
npm run build

# Démarrage en production
npm start

# Linting du code
npm run lint
```

### Exemples de Tests

```javascript
// Test d'envoi d'email simple
const response = await fetch('/api/send-email', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    to: 'test@example.com',
    subject: 'Test',
    html: '<h1>Hello!</h1>'
  })
});
```

## 📈 Améliorations Futures

- [ ] **Templates d'emails avancés** avec React Email
- [ ] **File d'attente** pour les emails
- [ ] **Statistiques d'envoi** et tracking
- [ ] **Support multi-langues** pour les templates
- [ ] **Intégration avec services externes** (SendGrid, AWS SES)
- [ ] **Tests automatisés** pour les APIs
- [ ] **Interface admin** pour gérer les emails

## 🤝 Contribution

Les contributions sont les bienvenues ! Pour contribuer :

1. **Fork** le projet
2. **Créer une branche** (`git checkout -b feature/nouvelle-fonctionnalite`)
3. **Commit** vos changements (`git commit -m 'Ajout nouvelle fonctionnalité'`)
4. **Push** vers la branche (`git push origin feature/nouvelle-fonctionnalite`)
5. **Créer une Pull Request**

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

**Développé avec ❤️ et Next.js**
